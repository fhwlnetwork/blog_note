import{_ as p}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as h,D as r,o as t,c as o,I as k,w as c,k as e,a as d,R as g,b as F,e as m}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const B=JSON.parse('{"title":"为指定Git仓库单独配置用户名和邮箱","description":"","frontmatter":{"title":"为指定Git仓库单独配置用户名和邮箱","author":"吴建华","date":"2022/03/28 21:29","categories":["杂碎逆袭史"],"tags":["Git"]},"headers":[],"relativePath":"categories/fragments/2022/03/28/为指定Git仓库单独配置用户名和邮箱.md","filePath":"categories/fragments/2022/03/28/为指定Git仓库单独配置用户名和邮箱.md","lastUpdated":1702565418000}'),u={name:"categories/fragments/2022/03/28/为指定Git仓库单独配置用户名和邮箱.md"},_=e("h1",{id:"为指定git仓库单独配置用户名和邮箱",tabindex:"-1"},[d("为指定Git仓库单独配置用户名和邮箱 "),e("a",{class:"header-anchor",href:"#为指定git仓库单独配置用户名和邮箱","aria-label":'Permalink to "为指定Git仓库单独配置用户名和邮箱"'},"​")],-1),y=g(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>C：</strong> 在前几天里，笔者一直给大家分享关于如何在 Git 仓库中 “销赃匿迹”，究其原因是笔者最近业余时间用的是工作用笔记本来“干活”，工作用笔记本里的全局用户名和邮箱肯定是公司 GitLab 的信息了。</p><p>周末和工作日切换的时候，有时候兴致上来，没有及时修改全局用户名等信息，就直接 commit ，push 了，等到发现时那肯定就要用前几天的几个法子来挽救一下了。</p><p>可能会有同学问，你怎么不为指定仓库做一下局部用户名配置呢？是的，没错，有全局配置就会有局部配置，但笔者之所以还会出这种问题，主要有两点：</p><ol><li>clone 了不知道多少个仓库，不是只在操作一个仓库的时候，每个都要配置，很是麻烦，直接一个全局配置搞定，多么简单</li><li>兴致上来，有一两个仓库就忘了配置</li></ol><p>当然，如果后面笔者长期用工作用笔记本在业余时间“干活”的话，也完全可以将工作 Git 仓库们进行局部配置，毕竟相较来讲，工作仓库是稳定的。</p><p>闲话少说，下面贴一下为指定 Git 仓库做局部用户名和邮箱配置的方法。</p><h2 id="全局配置用户名和邮箱" tabindex="-1">全局配置用户名和邮箱 <a class="header-anchor" href="#全局配置用户名和邮箱" aria-label="Permalink to &quot;全局配置用户名和邮箱&quot;">​</a></h2><p>我们先一起回忆下全局配置用户名和邮箱的方法，在任意 Git 仓库里进行如下配置即可：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 全局配置用户名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;Charles7c&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 全局配置邮箱</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;charles7c@126.com&quot;</span></span></code></pre></div><h2 id="局部配置用户名和邮箱" tabindex="-1">局部配置用户名和邮箱 <a class="header-anchor" href="#局部配置用户名和邮箱" aria-label="Permalink to &quot;局部配置用户名和邮箱&quot;">​</a></h2><p>局部配置的方法也是非常简单，首先进入指定的 Git 仓库，然后进行如下配置即可：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 进入指定 Git 仓库</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> HelloWorld</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 局部配置用户名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;Charles7c&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 局部配置邮箱</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;charles7c@126.com&quot;</span></span></code></pre></div><p>没错，只需要在配置时去掉 <code>--global</code> 这个参数就可以了，配置完成后，你可以通过命令查看下配置是否成功。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>当然了，你也可以去其他没进行局部配置的仓库看看，看看它们的用户名和邮箱有没有受到影响。</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 查看所在 Git 仓库配置的用户名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> user.name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 查看所在 Git 仓库配置的邮箱</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> user.email</span></span></code></pre></div>`,16);function D(s,C,b,f,v,G){const n=p,l=r("ClientOnly");return t(),o("div",null,[_,k(l,null,{default:c(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),F(n,{key:0,article:s.$frontmatter},null,8,["article"])):m("",!0)]}),_:1}),y])}const N=h(u,[["render",D]]);export{B as __pageData,N as default};
