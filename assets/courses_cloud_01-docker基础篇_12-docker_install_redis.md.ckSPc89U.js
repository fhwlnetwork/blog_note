import{_ as n}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as l,D as o,o as i,c,I as p,w as h,k as t,a as k,R as u,b as g,e as m}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const A=JSON.parse('{"title":"安装redis","description":"","frontmatter":{"title":"安装redis","author":"吴建华","date":"2022/10/22 21:25","categories":["docker基础篇"],"tags":["docker","Linux","redis"]},"headers":[],"relativePath":"courses/cloud/01-docker基础篇/12-docker_install_redis.md","filePath":"courses/cloud/01-docker基础篇/12-docker_install_redis.md","lastUpdated":1702605175000}'),_={name:"courses/cloud/01-docker基础篇/12-docker_install_redis.md"},b=t("h1",{id:"安装redis",tabindex:"-1"},[k("安装redis "),t("a",{class:"header-anchor",href:"#安装redis","aria-label":'Permalink to "安装redis"'},"​")],-1),f=u(`<h2 id="从docker-hub上-阿里云加速器-拉取redis镜像到本地标签为6-0-8" tabindex="-1">从docker hub上(阿里云加速器)拉取redis镜像到本地标签为6.0.8 <a class="header-anchor" href="#从docker-hub上-阿里云加速器-拉取redis镜像到本地标签为6-0-8" aria-label="Permalink to &quot;从docker hub上(阿里云加速器)拉取redis镜像到本地标签为6.0.8&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # docker pull redis:6.0.8</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/fhwlnetwork/blos_imgs/img/202202042137189.png" alt=""></p><h2 id="在centos宿主机下新建目录-app-redis" tabindex="-1">在CentOS宿主机下新建目录/app/redis <a class="header-anchor" href="#在centos宿主机下新建目录-app-redis" aria-label="Permalink to &quot;在CentOS宿主机下新建目录/app/redis&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[root@wjh conf]# mkdir -p /app/redis/</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/fhwlnetwork/blos_imgs/img/202202042144521.png" alt=""></p><h3 id="app-redis目录下修改redis-conf文件" tabindex="-1">/app/redis目录下修改redis.conf文件 <a class="header-anchor" href="#app-redis目录下修改redis-conf文件" aria-label="Permalink to &quot;/app/redis目录下修改redis.conf文件&quot;">​</a></h3><blockquote><p>内容件<a href="./redis.conf">conf</a></p></blockquote><h2 id="创建容器" tabindex="-1">创建容器 <a class="header-anchor" href="#创建容器" aria-label="Permalink to &quot;创建容器&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># docker run  -p 6379:6379 --name myr3 --privileged=true -v /app/redis/redis.conf:/etc/redis/redis.conf -v /app/redis/data:/data -d redis:6.0.8 redis-server /etc/redis/redis.conf</span></span></code></pre></div><h2 id="测速redis-cli链接" tabindex="-1">测速redis-cli链接 <a class="header-anchor" href="#测速redis-cli链接" aria-label="Permalink to &quot;测速redis-cli链接&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">redis]#</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -it</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 9</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">d8321580455</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">root@9d8321580455:/data#</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> redis-cli</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/fhwlnetwork/blos_imgs/img/202202042158484.png" alt=""></p>`,13);function v(e,C,y,F,D,q){const r=n,d=o("ClientOnly");return i(),c("div",null,[b,p(d,null,{default:h(()=>{var s,a;return[(((s=e.$frontmatter)==null?void 0:s.aside)??!0)&&(((a=e.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(i(),g(r,{key:0,article:e.$frontmatter},null,8,["article"])):m("",!0)]}),_:1}),f])}const B=l(_,[["render",v]]);export{A as __pageData,B as default};
