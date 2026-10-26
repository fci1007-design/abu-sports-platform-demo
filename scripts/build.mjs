import {readFile,writeFile,cp,mkdir,rm,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(fileURLToPath(new URL('..',import.meta.url)));
const dist=path.join(root,'dist');
await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});
for(const name of ['index.html','styles.css','sports-theme.css','src','assets'])await cp(path.join(root,name),path.join(dist,name),{recursive:true});
const html=await readFile(path.join(root,'index.html'),'utf8');
const css=(await readFile(path.join(root,'styles.css'),'utf8'))+'\n'+(await readFile(path.join(root,'sports-theme.css'),'utf8'));
let script='';for(const name of ['data.js','catalog.js','workspace-data.js','workspace-core.js','core.js','ads.js','content.js','editorial.js','expert-tools.js','workspace-ui.js','workspace-controller.js','app.js'])script+=(await readFile(path.join(root,'src',name),'utf8')).replace(/^import .*;\s*$/gm,'').replace(/^export /gm,'')+'\n';
let standalone=html.replace('<link rel="stylesheet" href="sports-theme.css">','').replace('<link rel="stylesheet" href="styles.css">',()=>`<style>${css}</style>`).replace('<script type="module" src="src/app.js"></script>',()=>`<script>(()=>{\n${script.replace(/<\/script/gi,'<\\/script')}\n})();</script>`);
for(const name of await readdir(path.join(root,'assets'))){if(!name.endsWith('.webp'))continue;const b64=(await readFile(path.join(root,'assets',name))).toString('base64');standalone=standalone.replaceAll(`assets/${name}`,`data:image/webp;base64,${b64}`);}
const output=path.join(root,'球場邊示範網站.html');await writeFile(output,standalone);console.log(`Static site: ${dist}\nOffline HTML: ${output}\nOffline size: ${(Buffer.byteLength(standalone)/1024/1024).toFixed(2)} MiB`);
await import('./build-design-preview.mjs');

const {buildArticles}=await import('./build-articles.mjs');const articleManifest=await buildArticles();console.log(`Public article pages: ${articleManifest.articles.length} (noindex demo)`);
