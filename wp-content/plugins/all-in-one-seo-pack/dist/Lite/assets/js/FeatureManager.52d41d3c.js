import{U}from"./constants.24c44c43.js";import{f as E,m as I,l as S,t as O,u as P}from"./index.ae2b6956.js";import{a as q}from"./allowed.97bad57f.js";import{j as z}from"./helpers.c7282833.js";import{u as B}from"./License.cfab7ecf.js";import{c as V}from"./news-sitemap.3092e2bf.js";import{C as G,S as R}from"./Caret.d9cc70ba.js";import{C as D,S as W,a as Z,b as H}from"./SitemapsPro.93d6b930.js";import{C as K}from"./Index.4b4d1967.js";import{C as j}from"./Index.0e872043.js";import{G as Q,a as Y}from"./Row.df38a5f6.js";import{_ as w}from"./_plugin-vue_export-helper.eefbdd86.js";import{o as m,c as v,a as c,C as u,l,k as _,b as y,v as g,x as p,t as d,F as X,J,q as $,E as k}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{S as ee,a as te}from"./ImageSeo.734279d7.js";import"./translations.d159963e.js";import{_ as t,s as A}from"./default-i18n.20001971.js";import"./license.306f6adb.js";import"./upperFirst.eac3a366.js";import"./_stringToArray.f9ddb970.js";import"./toString.a2dfb892.js";import"./addons.2e54f461.js";import"./params.af7ed354.js";import"./Url.e2d414d9.js";import"./Tooltip.73441134.js";const se={},oe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"aioseo-code"},ae=c("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"},null,-1),re=[ae];function ie(a,e){return m(),v("svg",oe,re)}const ne=w(se,[["render",ie]]),le={},ce={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",class:"aioseo-eeat"},de=c("path",{d:"M440.118-560q33.839 0 57.817-24.097t23.978-57.935q0-33.838-23.978-57.696-23.978-23.859-57.817-23.859-33.838 0-57.934 23.859-24.097 23.858-24.097 57.696 0 33.838 24.097 57.935Q406.28-560 440.118-560ZM440-396.413q45.717 0 85.576-19.478 39.859-19.479 69.576-56.152-35.956-23.718-74.935-35.837Q481.239-520 440-520t-80.217 12.12q-38.979 12.119-74.935 35.837 29.717 36.673 69.576 56.152 39.859 19.478 85.576 19.478Zm386.391 286.935L637.913-297.956q-41.717 31.761-91.696 49.402Q496.239-230.913 440-230.913q-137.587 0-233.337-95.75T110.913-560q0-137.587 95.75-233.337T440-889.087q137.587 0 233.337 95.75T769.087-560q0 55.761-17.761 105.978-17.761 50.218-49.521 92.174L890.283-173.37l-63.892 63.892ZM440.113-321.913q99.156 0 168.565-69.522 69.409-69.522 69.409-168.678 0-99.156-69.409-168.565-69.409-69.409-168.565-69.409-99.156 0-168.678 69.409-69.522 69.409-69.522 168.565 0 99.156 69.522 168.678 69.522 69.522 168.678 69.522ZM440-560Z"},null,-1),ue=[de];function me(a,e){return m(),v("svg",ce,ue)}const ge=w(le,[["render",me]]),s="all-in-one-seo-pack",pe={setup(){const{yourLicenseIsText:a}=B();return{UPSELL_FEATURE_LIST:U,addonsStore:E(),licenseStore:I(),links:S,pluginsStore:O(),rootStore:P(),yourLicenseIsText:a}},components:{CoreAlert:G,CoreFeatureCard:D,CoreModal:K,Cta:j,GridColumn:Q,GridRow:Y,SvgClose:R,SvgCode:ne,SvgEeat:ge,SvgImageSeo:ee,SvgLinkAssistant:W,SvgLocalBusiness:te,SvgRedirect:Z,SvgSitemapsPro:H},data(){return{allowed:q,ctaImg:V,showNetworkModal:!1,maybeActivate:!1,maybeDeactivate:!1,search:null,loading:{activateAll:!1,deactivateAll:!1},strings:{videoNewsSitemaps:t("Video and News Sitemaps",s),imageSeoOptimization:t("Image SEO Optimization",s),localBusinessSeo:t("Local Business SEO",s),advancedWooCommerce:t("Advanced WooCommerce",s),customTaxonomies:t("SEO for Categories, Tags and Custom Taxonomies",s),andMore:t("And many more...",s),activateAllFeatures:t("Activate All Features",s),deactivateAllFeatures:t("Deactivate All Features",s),searchForFeatures:t("Search for Features...",s),ctaHeaderText:A(t("Upgrade %1$s to Pro and Unlock all Features!",s),"AIOSEO"),ctaButtonText:t("Unlock All Features",s),aValidLicenseIsRequired:t("A valid license key is required in order to use our addons.",s),enterLicenseKey:t("Enter License Key",s),purchaseLicense:t("Purchase License",s),areYouSureNetworkChange:t("This is a network-wide change.",s),yesProcessNetworkChange:t("Yes, process this network change",s),noChangedMind:t("No, I changed my mind",s)},descriptions:{aioseoEeat:{description:t("Optimize your site for Google's E-E-A-T ranking factor by proving your writer's expertise through author schema markup and new UI elements.",s),version:0},aioseoImageSeo:{description:t("Globally control the Title attribute and Alt text for images in your content. These attributes are essential for both accessibility and SEO.",s),version:0},aioseoIndexNow:{description:t("Add IndexNow support to instantly notify search engines when your content has changed. This helps the search engines to prioritize the changes on your website and helps you rank faster.",s),version:0},aioseoLinkAssistant:{description:t("Super-charge your SEO with Link Assistant! Get relevant suggestions for adding internal links to older content as well as finding any orphaned posts that have no internal links. Use our reporting feature to see all link suggestions or add them directly from any page or post.",s),version:0},aioseoLocalBusiness:{description:t("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",s),version:0},aioseoNewsSitemap:{description:t("Our Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours. In order to submit a News Sitemap to Google, you must have added your site to Google’s Publisher Center and had it approved.",s),version:0},aioseoRedirects:{description:t("Our Redirection Manager allows you to create and manage redirects for 404s or modified posts.",s),version:0},aioseoRestApi:{description:t("Manage your post and term SEO meta via the WordPress REST API. This addon also works seamlessly with headless WordPress installs.",s),version:0},aioseoVideoSitemap:{description:t("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",s),version:0}}}},computed:{upgradeToday(){return A(t("%1$s %2$s comes with many additional features to help take your site's SEO to the next level!",s),"AIOSEO","Pro")},getAddons(){return this.addonsStore.addons.filter(a=>!this.search||a.name.toLowerCase().includes(this.search.toLowerCase()))},networkChangeMessage(){return this.activated?t("Are you sure you want to deactivate these addons across the network?",s):t("Are you sure you want to activate these addons across the network?",s)}},methods:{getAssetUrl:z,closeNetworkModal(a=!1){if(this.showNetworkModal=!1,a){const e=this.maybeActivate?"actuallyActivateAllFeatures":"actuallyDeactivateAllFeatures";this.maybeActivate=!1,this.maybeDeactivate=!1,this[e]()}},getIconComponent(a){return a&&a.startsWith("svg-")?a:"img"},getIconSrc(a,e){return typeof a=="string"&&a.startsWith("svg-")?null:typeof a=="string"?`data:image/svg+xml;base64,${a}`:e},getAddonDescription(a){var h,o;const e=a.sku.replace(/-./g,r=>r.toUpperCase()[1]);return(h=this.descriptions[e])!=null&&h.description&&a.descriptionVersion<=((o=this.descriptions[e])==null?void 0:o.version)?this.descriptions[e].description:a.description},activateAllFeatures(){if(!this.rootStore.isPro||!this.licenseStore.license.isActive)return window.open(S.utmUrl(this.rootStore.aioseo.data.isNetworkAdmin?"network-activate-all-features":"activate-all-features"));if(this.rootStore.aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeActivate=!0;return}this.actuallyActivateAllFeatures()},actuallyActivateAllFeatures(){this.loading.activateAll=!0;const a=this.addonsStore.addons.filter(e=>!e.requiresUpgrade).map(e=>({plugin:e.basename}));this.pluginsStore.installPlugins(a).then(e=>{const h=Object.keys(e.body.completed).map(o=>e.body.completed[o]);this.addonsStore.addons.map(o=>(h.includes(o.basename)&&(o.isActive=!0),o)),this.loading.activateAll=!1})},deactivateAllFeatures(){if(this.rootStore.aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeDeactivate=!0;return}this.actuallyDeactivateAllFeatures()},actuallyDeactivateAllFeatures(){this.loading.deactivateAll=!0;const a=this.addonsStore.addons.filter(e=>!e.requiresUpgrade).filter(e=>e.installed).map(e=>({plugin:e.basename}));this.pluginsStore.deactivatePlugins(a).then(e=>{const h=Object.keys(e.body.completed).map(o=>e.body.completed[o]);this.addonsStore.addons.map(o=>(h.includes(o.basename)&&(o.isActive=!1),o)),this.loading.deactivateAll=!1})}}},he={class:"aioseo-feature-manager"},fe={class:"aioseo-feature-manager-header"},_e={key:0,class:"buttons"},ve={class:"button-content"},ye={class:"search"},we={class:"aioseo-feature-manager-addons"},Se={class:"buttons"},ke=["innerHTML"],Ae={class:"large"},be=["src"],Ce={class:"aioseo-modal-body"},Le={class:"reset-description"};function Ne(a,e,h,o,r,n){const f=g("base-button"),b=g("base-input"),C=g("core-alert"),L=g("core-feature-card"),N=g("grid-column"),x=g("grid-row"),T=g("cta"),M=g("svg-close"),F=g("core-modal");return m(),v("div",he,[c("div",fe,[n.getAddons.filter(i=>i.canActivate===!0).length>0?(m(),v("div",_e,[c("div",ve,[u(f,{size:"medium",type:"blue",loading:r.loading.activateAll,onClick:n.activateAllFeatures},{default:l(()=>[p(d(r.strings.activateAllFeatures),1)]),_:1},8,["loading","onClick"]),o.licenseStore.isUnlicensed?y("",!0):(m(),_(f,{key:0,size:"medium",type:"gray",loading:r.loading.deactivateAll,onClick:n.deactivateAllFeatures},{default:l(()=>[p(d(r.strings.deactivateAllFeatures),1)]),_:1},8,["loading","onClick"]))])])):y("",!0),c("div",ye,[u(b,{modelValue:r.search,"onUpdate:modelValue":e[0]||(e[0]=i=>r.search=i),size:"medium",placeholder:r.strings.searchForFeatures,"prepend-icon":"search"},null,8,["modelValue","placeholder"])])]),c("div",we,[o.rootStore.isPro&&o.licenseStore.isUnlicensed?(m(),_(C,{key:0,type:"red"},{default:l(()=>[c("strong",null,d(o.yourLicenseIsText),1),p(" "+d(r.strings.aValidLicenseIsRequired)+" ",1),c("div",Se,[u(f,{type:"blue",size:"small",tag:"a",href:o.rootStore.aioseo.data.isNetworkAdmin?o.rootStore.aioseo.urls.aio.networkSettings:o.rootStore.aioseo.urls.aio.settings},{default:l(()=>[p(d(r.strings.enterLicenseKey),1)]),_:1},8,["href"]),u(f,{type:"green",size:"small",tag:"a",target:"_blank",href:o.links.getUpsellUrl("feature-manager-upgrade","no-license-key","pricing")},{default:l(()=>[p(d(r.strings.purchaseLicense),1)]),_:1},8,["href"])])]),_:1})):y("",!0),u(x,null,{default:l(()=>[(m(!0),v(X,null,J(n.getAddons,i=>(m(),_(N,{key:i.sku,sm:"6",lg:"4"},{default:l(()=>[u(L,{ref_for:!0,ref:"addons","can-activate":i.canActivate,"can-manage":r.allowed(i.capability),feature:i},{title:l(()=>[(m(),_($(n.getIconComponent(i.icon)),{src:n.getIconSrc(i.icon,i.image)},null,8,["src"])),p(" "+d(i.name),1)]),description:l(()=>[c("div",{innerHTML:n.getAddonDescription(i)},null,8,ke)]),_:2},1032,["can-activate","can-manage","feature"])]),_:2},1024))),128))]),_:1})]),o.licenseStore.isUnlicensed?(m(),_(T,{key:0,class:"feature-manager-upsell",type:2,"button-text":r.strings.ctaButtonText,floating:!1,"cta-link":o.links.utmUrl("feature-manager","main-cta"),"learn-more-link":o.links.getUpsellUrl("feature-manager","main-cta",o.rootStore.isPro?"pricing":"liteUpgrade"),"feature-list":o.UPSELL_FEATURE_LIST},{"header-text":l(()=>[c("span",Ae,d(r.strings.ctaHeaderText),1)]),description:l(()=>[p(d(n.upgradeToday),1)]),"featured-image":l(()=>[c("img",{alt:"Purchase AIOSEO Today!",src:n.getAssetUrl(r.ctaImg)},null,8,be)]),_:1},8,["button-text","cta-link","learn-more-link","feature-list"])):y("",!0),u(F,{show:r.showNetworkModal,"no-header":"",onClose:e[5]||(e[5]=i=>n.closeNetworkModal(!1)),classes:["aioseo-feature-manager-modal"]},{body:l(()=>[c("div",Ce,[c("button",{class:"close",onClick:e[2]||(e[2]=k(i=>n.closeNetworkModal(!1),["stop"]))},[u(M,{onClick:e[1]||(e[1]=k(i=>n.closeNetworkModal(!1),["stop"]))})]),c("h3",null,d(r.strings.areYouSureNetworkChange),1),c("div",Le,d(n.networkChangeMessage),1),u(f,{type:"blue",size:"medium",onClick:e[3]||(e[3]=i=>n.closeNetworkModal(!0))},{default:l(()=>[p(d(r.strings.yesProcessNetworkChange),1)]),_:1}),u(f,{type:"gray",size:"medium",onClick:e[4]||(e[4]=i=>n.closeNetworkModal(!1))},{default:l(()=>[p(d(r.strings.noChangedMind),1)]),_:1})])]),_:1},8,["show"])])}const Je=w(pe,[["render",Ne]]);export{Je as default};
