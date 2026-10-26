import {mkdir,writeFile,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {posts,experts} from '../src/data.js';
import {escapeHtml} from '../src/core.js';
import {publicColumns,articleMeta,editorialCover,readingMinutes,renderArticleBody,articleOutline,renderArticleNext} from '../src/editorial.js';

export function renderStaticArticle(post,related=[]){
 if(!publicColumns([post]).length)throw new Error('Static article output accepts public expert articles only.');
 if(!/^[a-zA-Z0-9_-]+$/.test(post.id))throw new Error('Invalid article ID.');
 const esc=escapeHtml,meta=articleMeta(post),cover=editorialCover(post),author=experts.find(x=>x.id===post.author);
 return `<!doctype html>
<html lang="zh-Hant-TW"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="description" content="${esc(meta.description)}"><meta property="og:type" content="article"><meta property="og:title" content="${esc(meta.title)}｜球場邊"><meta property="og:description" content="${esc(meta.description)}"><meta name="theme-color" content="#d71928"><title>${esc(meta.title)}｜球場邊</title><link rel="stylesheet" href="../../styles.css"><link rel="stylesheet" href="../../sports-theme.css"></head>
<body class="sports-theme static-page"><a class="skip-link" href="#main-content">跳到主要內容</a><div class="static-demo-strip">公開文章閱讀樣板｜虛構賽事與內容，圖片為 AI 情境示意</div><header class="static-reader-header shell"><a href="../../index.html" class="static-brand">球場邊</a><nav aria-label="閱讀導覽"><a href="../../index.html#/columns">公開專欄</a><a href="../../index.html#/experts">專家廣場</a><a href="../../index.html#/tools">專家工具</a><a href="../../index.html#/responsible-gaming">責任博彩</a></nav></header><main id="main-content" class="shell static-article-shell"><article><header class="article-heading"><a href="../../index.html#/columns" class="breadcrumb">公開專欄</a><h1>${esc(post.title)}</h1><p class="static-byline"><a href="../../index.html#/expert/${esc(post.author)}">${esc(author.name)}</a><span>${esc(post.time)}</span><span>約 ${readingMinutes(post.body)} 分鐘</span></p></header><p class="article-lead">${esc(post.excerpt)}</p>${cover?`<figure class="article-photo"><img src="../../${cover.src}" alt="${esc(post.imageAlt||cover.alt)}"><figcaption>AI 情境圖，非真實賽事照片。</figcaption></figure>`:''}${articleOutline(post.body,{staticPage:true})}<div class="article-body rich-body">${renderArticleBody(post.body)}</div>${post.videoUrl?'<p class="static-video-note">本篇附有影片說明，請進入互動閱讀頁載入。</p>':''}${renderArticleNext(post,{prefix:'../../index.html#'})}<a class="btn btn-primary" href="../../index.html#/post/${esc(post.id)}">到互動閱讀頁留言與收藏</a></article>${related.length?`<section class="static-related"><h2>延伸閱讀</h2>${publicColumns(related).filter(p=>p.id!==post.id&&/^[a-zA-Z0-9_-]+$/.test(p.id)).slice(0,3).map(p=>`<a href="../${esc(p.id)}/index.html">${esc(p.title)}</a>`).join('')}</section>`:''}</main><footer class="shell static-reader-footer">球場邊・內容服務示範｜不進行真實交易</footer></body></html>\n`;
}

export async function buildArticles({source=posts}={}){
 const outputDir=path.resolve(fileURLToPath(new URL('../dist/articles',import.meta.url))),selected=publicColumns(source);
 for(const post of selected)renderStaticArticle(post,selected);
 await rm(outputDir,{recursive:true,force:true});await mkdir(outputDir,{recursive:true});
 for(const post of selected){const html=renderStaticArticle(post,selected),dir=path.join(outputDir,post.id);await mkdir(dir,{recursive:true});await writeFile(path.join(dir,'index.html'),html);}
 const manifest={mode:'demo-noindex',source:'file-backed public sample articles; browser edits are not included',articles:selected.map(p=>({id:p.id,title:p.title,author:p.author,path:`articles/${p.id}/index.html`}))};
 await writeFile(path.join(outputDir,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');return manifest;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){const manifest=await buildArticles();console.log(`Public article pages: ${manifest.articles.length} (noindex demo)`);}
