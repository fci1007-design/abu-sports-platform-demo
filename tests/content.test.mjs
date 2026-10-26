import test from 'node:test';
import assert from 'node:assert/strict';
import {parseYouTubeUrl,renderYouTubeBlock} from '../src/content.js';
const id='M7lc1UVf-VE';
test('支援 YouTube 正式、短網址、Shorts 及直播並正規化',()=>{
  for(const url of [`https://www.youtube.com/watch?v=${id}&t=30`,`https://youtu.be/${id}?si=abc`,`https://www.youtube.com/shorts/${id}`,`https://www.youtube.com/live/${id}`]){
    const p=parseYouTubeUrl(url);assert.equal(p.id,id);assert.equal(p.url,`https://www.youtube.com/watch?v=${id}`);assert.equal(new URL(p.embed).hostname,'www.youtube-nocookie.com');
  }
});
test('拒絕假網域、非 HTTPS、憑證、任意 iframe 與無效 ID',()=>{
  for(const url of ['javascript:alert(1)',`https://www.youtube.com.evil.test/watch?v=${id}`,`https://evil.test/?v=${id}`,`http://youtu.be/${id}`,`https://u:p@youtu.be/${id}`,`https://youtu.be:444/${id}`,'<iframe src="https://evil.test"></iframe>','https://youtube.com/watch?v=abc','https://youtube.com/redirect?v='+id])assert.equal(parseYouTubeUrl(url),null,url);
});
test('影片區塊預設不建立外部 iframe 並跳脫使用者標題',()=>{
  const html=renderYouTubeBlock(`https://youtu.be/${id}`,'<img src=x onerror=alert(1)>');assert.ok(!html.includes('<iframe'));assert.ok(!html.includes('<img'));assert.ok(html.includes('&lt;img'));assert.ok(html.includes('data-video="'+id+'"'));assert.equal(renderYouTubeBlock('https://evil.test/x'),'');
});
