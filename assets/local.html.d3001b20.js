import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as u,c as m,a as s,b as n,w as o,d as e,e as t}from"./app.edb8dacd.js";const b={},h={class:"custom-container info"},v=s("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F",-1),_=e("\u672C\u6559\u7A0B\u6765\u6E90\u4E8E "),g={href:"https://github.com/Le-niao/Yunzai-Bot/issues/3",target:"_blank",rel:"noopener noreferrer"},k=e("Linux \u73AF\u5883\u642D\u5EFA \xB7 Le-niao/Yunzai-Bot"),f={class:"custom-container tip"},x=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),y=e("\u7531\u4E8E Yunzai-Bot \u539F\u4F5C\u8005 "),L=s("a",{href:"Le-niao"},"Le-niao",-1),z=e(" \u4E0D\u518D\u7EF4\u62A4"),B={href:"https://github.com/Le-niao/Yunzai-Bot",target:"_blank",rel:"noopener noreferrer"},X=e("\u539F\u4ED3\u5E93"),C=e("\uFF0C\u56E0\u6B64\u66F4\u6362\u4E3A\u7531 "),Y={href:"https://github.com/yoimiya-kokomi",target:"_blank",rel:"noopener noreferrer"},N=e("yoimiya-kokomi"),S=e(" \u7EF4\u62A4\u7684"),V={href:"https://github.com/yoimiya-kokomi/yunzai-bot",target:"_blank",rel:"noopener noreferrer"},w=e("\u4ED3\u5E93"),E=e("\u3002"),T=t(`<div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u672C\u6559\u7A0B\u57FA\u4E8E CentOS\uFF0C\u4F7F\u7528\u524D\u8BF7\u786E\u4FDD\u62E5\u6709\u4E00\u5B9A\u7684 Linux \u57FA\u7840\uFF0C\u9047\u5230\u95EE\u9898\u8BF7\u5584\u7528 Google/Bing/\u767E\u5EA6\u3002</p><p>\u82E5\u5BF9 Linux \u4E86\u89E3\u7A0B\u5EA6\u4E0D\u591F\uFF0C\u8BF7\u5C3D\u91CF\u4F7F\u7528\u4E00\u4E2A\u5E72\u51C0\u7684\u7CFB\u7EDF\u90E8\u7F72\u3002\u5982\u679C\u60A8\u7684\u7CFB\u7EDF\u4E2D\u8FD8\u6709\u5176\u4ED6\u670D\u52A1\u8FD0\u884C\uFF0C\u6211\u4EEC\u63A8\u8350 docker \u90E8\u7F72\u3002</p></div><p>\u5207\u6362 root \u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5 nodejs</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y dnf
dnf module <span class="token function">install</span> nodejs:16 -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 git</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5E76\u8FD0\u884C redis</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> redis <span class="token operator">&amp;&amp;</span> redis-server --daemonize <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u514B\u9686\u9879\u76EE</p>`,10),j=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"git"),e(` clone https://gitee.com/yoimiya-kokomi/yunzai-bot

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"git"),e(` clone https://github.com/yoimiya-kokomi/yunzai-bot
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),G=t(`<p>\u5B89\u88C5\u6A21\u5757</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> Yunzai-Bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5 cnpm</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cnpm -g --registry<span class="token operator">=</span>https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7528 cnpm \u5B89\u88C5\u4F9D\u8D56</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cnpm <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5 chrome \u4F9D\u8D56\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> libdrm libgbm libxshmfence -y <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> nss -y <span class="token operator">&amp;&amp;</span> yum update nss -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u4E2D\u6587\u5B57\u4F53</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum groupinstall fonts -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u540E\u53F0\u8FD0\u884C or \u505C\u6B62</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> start / <span class="token function">npm</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14);function I(O,q){const a=i("ExternalLinkIcon"),l=i("CodeTabs");return u(),m("div",null,[s("div",h,[v,s("p",null,[_,s("a",g,[k,n(a)])])]),s("div",f,[x,s("p",null,[y,L,z,s("a",B,[X,n(a)]),C,s("a",Y,[N,n(a)]),S,s("a",V,[w,n(a)]),E])]),T,n(l,{data:[{title:"\u56FD\u5185\u673A\u5668"},{title:"\u6D77\u5916\u673A\u5668"}],"tab-id":"shell"},{tab0:o(({title:c,value:d,isActive:r})=>[j]),tab1:o(({title:c,value:d,isActive:r})=>[A]),_:1}),G])}var H=p(b,[["render",I],["__file","local.html.vue"]]);export{H as default};