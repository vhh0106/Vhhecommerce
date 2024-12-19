import{G as v}from"./constants.24c44c43.js";import{b as I,u as R,l as C}from"./index.ae2b6956.js";import{S as G,a as w,u as B}from"./SearchConsoleInline.2863b3ef.js";import{B as V}from"./Checkbox.6db0b9ed.js";import{C as M}from"./Card.109b77eb.js";import{C as N}from"./PostTypeOptions.ea1ca999.js";import{C as D}from"./SettingsRow.9f92e269.js";import{S as O}from"./External.c9d4f255.js";import"./translations.d159963e.js";import{_ as E}from"./_plugin-vue_export-helper.eefbdd86.js";import{_ as o}from"./default-i18n.20001971.js";import{c as H,k as d,b as _,C as i,l as a,v as n,o as m,a as r,x as c,t as p}from"./runtime-dom.esm-bundler.5c3c7d72.js";import"./helpers.c7282833.js";import"./GoogleSearchConsole.33614a4b.js";import"./params.af7ed354.js";import"./Actionable.e791ec7e.js";import"./Caret.d9cc70ba.js";import"./CheckSolid.a0a6d7e0.js";import"./ExclamationSolid.4ca1f801.js";import"./WpTable.3bd76eb9.js";import"./ScrollTo.81bea8a7.js";import"./index.8c70464a.js";import"./Index.4b4d1967.js";import"./Table.dec4729d.js";import"./numbers.9fc174f3.js";import"./Tooltip.73441134.js";import"./Slide.39c07c03.js";import"./Download.17eb5e1f.js";import"./Checkmark.e40641dd.js";import"./PostTypes.dafa8837.js";import"./HighlightToggle.3168783f.js";import"./Radio.7b47f2fa.js";import"./Row.df38a5f6.js";const t="all-in-one-seo-pack",U={setup(){const{validateLinksPerIndex:y}=B();return{optionsStore:I(),rootStore:R(),validateLinksPerIndex:y,GLOBAL_STRINGS:v,links:C}},components:{BaseCheckbox:V,CoreCard:M,CorePostTypeOptions:N,CoreSettingsRow:D,SearchConsole:G,SearchConsoleInline:w,SvgExternal:O},data(){return{pagePostOptions:[],strings:{rss:o("RSS Sitemap",t),description:o("This option will generate a separate RSS Sitemap which can be submitted to Google, Bing and any other search engines that support this type of sitemap. The RSS Sitemap contains an RSS feed of the latest updates to your site content. It is not a full sitemap of all your content.",t),enableSitemap:o("Enable Sitemap",t),sitemapSettings:o("Sitemap Settings",t),enableSitemapIndexes:o("Enable Sitemap Indexes",t),sitemapIndexes:o("Organize sitemap entries into distinct files in your sitemap. We recommend you enable this setting if your sitemap contains more than 1,000 URLs.",t),linksPerSitemap:o("Number of Posts",t),noIndexDisplayed:o("Noindexed content will not be displayed in your sitemap.",t),doYou404:o("Do you get a blank sitemap or 404 error?",t),openSitemap:o("Open RSS Sitemap",t),maxLinks:o("Allows you to specify the maximum number of posts for the RSS Sitemap. We recommend an amount of 50 posts.",t),automaticallyPingSearchEngines:o("Automatically Ping Search Engines",t),postTypes:o("Post Types",t),taxonomies:o("Taxonomies",t),dateArchiveSitemap:o("Date Archive Sitemap",t),includeDateArchives:o("Include Date Archives in your sitemap.",t),authorSitemap:o("Author Sitemap",t),includeAuthorArchives:o("Include Author Archives in your sitemap.",t),includeAllPostTypes:o("Include All Post Types",t),selectPostTypes:o("Select which Post Types appear in your sitemap.",t),includeAllTaxonomies:o("Include All Taxonomies",t),selectTaxonomies:o("Select which Taxonomies appear in your sitemap.",t)}}},computed:{getExcludedPostTypes(){return["attachment"]}}},z={class:"aioseo-rss-sitemap"},K={class:"aioseo-settings-row aioseo-section-description"},W=["innerHTML"],Y={class:"aioseo-sitemap-preview"},j={class:"aioseo-description"},q=["innerHTML"],F={class:"aioseo-description"},J=["innerHTML"],Q={class:"aioseo-description"},X=["innerHTML"];function Z(y,l,$,e,s,h){const x=n("search-console"),f=n("base-toggle"),T=n("search-console-inline"),S=n("core-settings-row"),b=n("svg-external"),k=n("base-button"),g=n("core-card"),L=n("base-input"),A=n("base-checkbox"),P=n("core-post-type-options");return m(),H("div",z,[e.optionsStore.options.sitemap.rss.enable?(m(),d(x,{key:0})):_("",!0),i(g,{slug:"rssSitemap","header-text":s.strings.rss},{default:a(()=>[r("div",K,[c(p(s.strings.description)+" ",1),r("span",{innerHTML:e.links.getDocLink(e.GLOBAL_STRINGS.learnMore,"rssSitemaps",!0)},null,8,W)]),i(S,{name:s.strings.enableSitemap},{content:a(()=>[i(f,{modelValue:e.optionsStore.options.sitemap.rss.enable,"onUpdate:modelValue":l[0]||(l[0]=u=>e.optionsStore.options.sitemap.rss.enable=u)},null,8,["modelValue"]),e.optionsStore.options.sitemap.rss.enable?(m(),d(T,{key:0})):_("",!0)]),_:1},8,["name"]),e.optionsStore.options.sitemap.rss.enable?(m(),d(S,{key:0,name:e.GLOBAL_STRINGS.preview},{content:a(()=>[r("div",Y,[i(k,{size:"medium",type:"blue",tag:"a",href:e.rootStore.aioseo.urls.rssSitemapUrl,target:"_blank"},{default:a(()=>[i(b),c(" "+p(s.strings.openSitemap),1)]),_:1},8,["href"])]),r("div",j,[c(p(s.strings.noIndexDisplayed)+" "+p(s.strings.doYou404)+" ",1),r("span",{innerHTML:e.links.getDocLink(e.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,q)])]),_:1},8,["name"])):_("",!0)]),_:1},8,["header-text"]),e.optionsStore.options.sitemap.rss.enable?(m(),d(g,{key:1,slug:"rssSitemapSettings","header-text":s.strings.sitemapSettings},{default:a(()=>[i(S,{name:s.strings.linksPerSitemap},{content:a(()=>[i(L,{modelValue:e.optionsStore.options.sitemap.rss.linksPerIndex,"onUpdate:modelValue":l[1]||(l[1]=u=>e.optionsStore.options.sitemap.rss.linksPerIndex=u),class:"aioseo-links-per-site",type:"number",size:"medium",min:1,max:5e4,onKeyup:e.validateLinksPerIndex},null,8,["modelValue","onKeyup"]),r("div",F,[c(p(s.strings.maxLinks)+" ",1),r("span",{innerHTML:e.links.getDocLink(e.GLOBAL_STRINGS.learnMore,"maxLinksRss",!0)},null,8,J)])]),_:1},8,["name"]),i(S,{name:s.strings.postTypes},{content:a(()=>[i(A,{size:"medium",modelValue:e.optionsStore.options.sitemap.rss.postTypes.all,"onUpdate:modelValue":l[2]||(l[2]=u=>e.optionsStore.options.sitemap.rss.postTypes.all=u)},{default:a(()=>[c(p(s.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.optionsStore.options.sitemap.rss.postTypes.all?_("",!0):(m(),d(P,{key:0,options:e.optionsStore.options.sitemap.rss,type:"postTypes",excluded:h.getExcludedPostTypes},null,8,["options","excluded"])),r("div",Q,[c(p(s.strings.selectPostTypes)+" ",1),r("span",{innerHTML:e.links.getDocLink(e.GLOBAL_STRINGS.learnMore,"selectPostTypesRss",!0)},null,8,X)])]),_:1},8,["name"])]),_:1},8,["header-text"])):_("",!0)])}const Be=E(U,[["render",Z]]);export{Be as default};
