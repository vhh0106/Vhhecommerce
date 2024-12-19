import{z as A,A as y,B as k,e as v,C as D,D as B,E as $,F as T,u as w,b as h,k as U}from"./index.ae2b6956.js";import{a as L,b as N,d as M,e as R,c as F,f as q}from"./helpers.979ce6ae.js";import"./translations.d159963e.js";import{g as I,f as P}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{_ as c}from"./default-i18n.20001971.js";const z=()=>{var a;let t=0;return(A()||y())&&(t=parseInt((a=document.getElementById("post_author_override"))==null?void 0:a.value)),k()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("author")),t||(t=v().currentPost.postAuthor),t},V=()=>{const t=document.querySelector("#set-post-thumbnail img");return t?t.getAttribute("src"):""},x=async(t=!1)=>{var e;const a=window.wp.data.select("core/editor"),r=t&&a?a==null?void 0:a.getEditedPostAttribute("featured_media"):(e=a==null?void 0:a.getCurrentPost())==null?void 0:e.featured_media;return typeof r>"u"?new Promise(o=>setTimeout(()=>o(x(t)),1e3)):r},O=async()=>{if(A()||y())return V();if(k()){const t=await x(!0).then(r=>r);return isNaN(t)||t===0?"":v().getMediaData({mediaId:t}).then(r=>r.source_url)}return D()?L().featuredImage:B()?N().featuredImage:$()?M().featuredImage:T()?R().featuredImage:""},d="all-in-one-seo-pack",C=()=>{let t=null;const a=/<img.*?src=['"](.*?)['"].*?>/i.exec(q());return a&&a[1]&&(t=a[1]),t},j=async(t,a,r)=>{let e=F(t[`${r}image_custom_fields`]);return e||await O().then(o=>{e=o}),e||await v().getFirstAttachedImage({postId:t.id}).then(p=>{e=p}),e||(e=C()),e||(e=h().options.social[a].homePage.image),e},G=async()=>{let t="";const a=z();return await v().getUserImage({userId:a}).then(e=>{t=e}),t},te=()=>{const t=I(["featured","content","author"]),a=I(["auto"]),r=I(["featured","attach","content","author","auto"]),e=I(""),o=I(!1),p=P(()=>[{label:c("Default Image (Set Below)",d),value:"default"},{label:c("Featured Image",d),value:"featured"},{label:c("Attached Image",d),value:"attach"},{label:c("First Image in Content",d),value:"content"},{label:c("Image from Custom Field",d),value:"custom"},{label:c("Post Author Image",d),value:"author"},{label:c("First Available Image",d),value:"auto"}]),_=P(()=>{var l,u,m;const n=v(),s=p.value.map(i=>(i.value==="default"&&(i.label=c("Default Image Source (Set in Social Networks)",d)),i)).concat({label:c("Custom Image",d),value:"custom_image"});if(((l=n.currentPost)==null?void 0:l.context)==="term")return s.filter(i=>!r.value.includes(i.value));if(((u=n.currentPost)==null?void 0:u.context)==="post"&&((m=n.currentPost)==null?void 0:m.postType)==="attachment")return s.filter(i=>!t.value.includes(i.value));const g=w(),S=h();return g.aioseo.integration?((g.aioseo.integration==="seedprod"||g.aioseo.integration==="wpbakery"&&window.vc_mode==="admin_frontend_editor")&&a.value.push("featured"),g.aioseo.integration==="siteorigin"&&!S.options.searchAppearance.advanced.runShortcodes&&a.value.push("content"),s.filter(i=>!a.value.includes(i.value))):s});return{getImageSourceOption:n=>p.value.find(s=>s.value===n),getImageSourceOptionFiltered:n=>_.value.find(s=>s.value===n),getTermImageSourceOptions:()=>p.value.filter(n=>!r.value.includes(n.value)),imageSourceOptions:p,imageSourceOptionsFiltered:_,imageUrl:e,loading:o,setImageUrl:async(n="")=>{var E;const s=h(),g=v(),S=U(),l=g.currentPost,u=n||((E=S.metaBoxTabs)==null?void 0:E.social)||"facebook",m=u==="facebook"||u==="twitter"&&l.twitter_use_og?"og_":"twitter_";let i=l[`${m}image_type`]||"default";switch(i==="default"&&(i=s.options.social[u].general.defaultImageSourcePosts),e.value="",i){case"featured":o.value=!0,await O().then(f=>{e.value=f,o.value=!1});break;case"attach":o.value=!0,await g.getFirstAttachedImage({postId:l.id}).then(f=>{e.value=f,o.value=!1});break;case"content":e.value=C();break;case"author":o.value=!0,await G().then(f=>{e.value=f,o.value=!1});break;case"auto":o.value=!0,await j(l,u,m).then(f=>{e.value=f,o.value=!1});break;case"custom":e.value=F(l[`${m}image_custom_fields`]);break;case"custom_image":e.value=l[`${m}image_custom_url`];break;case"default":default:e.value=s.options.social[u].general.defaultImagePosts;break}!e.value&&s.options.social[u].general.defaultImagePosts&&(e.value=s.options.social[u].general.defaultImagePosts);const b=w();!e.value&&b.aioseo.urls.siteLogo&&(e.value=b.aioseo.urls.siteLogo),window.aioseoBus.$emit("updateSocialImagePreview",{social:u,image:e.value})}}};export{te as u};
