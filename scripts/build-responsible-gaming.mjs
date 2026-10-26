import {mkdir,writeFile,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {escapeHtml} from '../src/core.js';
import {RG_ARTICLES,RG_REVIEWED_AT,renderResponsibleHub,renderResponsibleArticle} from '../src/responsible-gaming.js';

export function responsibleStaticDocument(article=null){
 const prefix=article?'../../':'../',title=article?article.title:'責任博彩專區',description=article?article.summary:'理性參與、生活優先：閱讀責任博彩宣導、未成年人保護與暫停求助資訊。';
 return `<!doctype html><html lang="zh-Hant-TW"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="description" content="${escapeHtml(description)}"><title>${escapeHtml(title)}｜球場邊</title><link rel="stylesheet" href="${prefix}styles.css"><link rel="stylesheet" href="${prefix}sports-theme.css"></head><body class="sports-theme static-page"><a class="skip-link" href="#main-content">跳到主要內容</a><header class="static-reader-header shell"><a class="static-brand" href="${prefix}index.html">球場邊</a><nav aria-label="閱讀導覽"><a href="${article?'../index.html':'index.html'}">責任博彩專區</a><a href="${prefix}index.html#/responsible-gaming">互動閱讀版</a></nav></header>${article?renderResponsibleArticle(article.id,{staticPage:true}):renderResponsibleHub({staticPage:true})}<footer class="shell static-reader-footer">責任博彩宣導・球場邊編輯整理・資料查核 ${RG_REVIEWED_AT}</footer></body></html>\n`;
}
export async function buildResponsibleGaming(){const output=path.resolve(fileURLToPath(new URL('../dist/responsible-gaming',import.meta.url)));await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});await writeFile(path.join(output,'index.html'),responsibleStaticDocument());for(const article of RG_ARTICLES){if(!/^[a-z0-9-]+$/.test(article.id))throw Error('Invalid education article ID');const dir=path.join(output,article.id);await mkdir(dir,{recursive:true});await writeFile(path.join(dir,'index.html'),responsibleStaticDocument(article));}return RG_ARTICLES.length;}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))console.log(`Responsible gambling articles: ${await buildResponsibleGaming()}`);
