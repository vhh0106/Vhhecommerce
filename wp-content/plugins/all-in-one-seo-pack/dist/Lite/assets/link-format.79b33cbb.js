import{v as e,o as m,c as p,C as a,a as k,E as r,b as f,Y as _}from"./js/runtime-dom.esm-bundler.5c3c7d72.js";import{l as h}from"./js/index.7c01c5f2.js";import{l as L}from"./js/index.8c70464a.js";import{l as S}from"./js/index.d80c2c2c.js";import{m as g,e as w,u as A,l as y,c as v}from"./js/index.ae2b6956.js";import{e as C}from"./js/elemLoaded.2921fc72.js";import{G as F}from"./js/constants.24c44c43.js";import{a as E}from"./js/addons.2e54f461.js";import{u as x}from"./js/url.3d170601.js";import{S as V}from"./js/Information.13e8cece.js";import{S as P}from"./js/Caret.d9cc70ba.js";import"./js/translations.d159963e.js";import{_ as D}from"./js/_plugin-vue_export-helper.eefbdd86.js";import{s as I,_ as N}from"./js/default-i18n.20001971.js";import"./js/helpers.c7282833.js";import"./js/upperFirst.eac3a366.js";import"./js/_stringToArray.f9ddb970.js";import"./js/toString.a2dfb892.js";const U="all-in-one-seo-pack",b={setup(){return{licenseStore:g(),postEditorStore:w(),rootStore:A()}},components:{SvgCircleInformation:V,SvgClose:P},data(){return{linkFormatValue:{},disabled:!1,url:null,strings:{upsell:I(N("Did you know you can automatically add internal links using Link Assistant? %1$s",U),y.getPlainLink(F.learnMore,this.rootStore.aioseo.urls.aio.linkAssistant,!0))}}},computed:{canShowUpsell(){const o=E.getAddon("aioseo-link-assistant"),{options:t}=this.postEditorStore.currentPost,i=t.linkFormat.internalLinkCount,n=t.linkFormat.linkAssistantDismissed;return(this.licenseStore.isUnlicensed||!o||!o.isActive||o.requiresUpgrade)&&2<i&&!n&&!this.disabled&&this.linkFormatValue.url&&this.isInternalLink(this.linkFormatValue.url)}},methods:{async linkAdded(o){var s;await this.$nextTick();const{options:t}=this.postEditorStore.currentPost,i=t.linkFormat.internalLinkCount,n=t.linkFormat.linkAssistantDismissed;2<i||n||this.isInternalLink(o.url||((s=o.suggestion)==null?void 0:s.url)||null)&&this.postEditorStore.incrementInternalLinkCount()},async setLinkFormatValue(){await this.$nextTick();const o=document.querySelector("#aioseo-link-assistant-education input");!this.linkFormatValue.url&&(o!=null&&o.value)&&(this.linkFormatValue=JSON.parse(o.value))},isInternalLink(o){const t=x.parse(o,!1,!0);return o.indexOf("//")===-1&&o.indexOf("/")===0?!0:o.indexOf("#")===0?!1:t.host?t.host===this.rootStore.aioseo.urls.domain:!0}},created(){this.setLinkFormatValue();const{addAction:o,hasAction:t}=window.wp.hooks;t("aioseo-link-format-link-added","aioseo")||o("aioseo-link-format-link-added","aioseo",this.linkAdded)}},B={key:0,class:"aioseo-link-assistant-did-you-know"},O=["innerHTML"];function T(o,t,i,n,s,u){const c=e("svg-circle-information"),d=e("svg-close");return u.canShowUpsell?(m(),p("div",B,[a(c),k("span",{onClick:t[0]||(t[0]=r(Y=>s.disabled=!0,["stop"])),innerHTML:s.strings.upsell},null,8,O),a(d,{onClick:r(n.postEditorStore.disableLinkAssistantEducation,["stop"])},null,8,["onClick"])])):f("",!0)}const M=D(b,[["render",T]]),l=()=>{let o=_({...M,name:"Standalone/LinkFormat"});o=h(o),o=L(o),o=S(o),v(o),o.mount("#aioseo-link-assistant-education-mount")};window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&(document.getElementById("aioseo-link-assistant-education")?l():(C("#aioseo-link-assistant-education","aioseoLaDidYouKnow"),document.addEventListener("animationstart",function(t){t.animationName==="aioseoLaDidYouKnow"&&l()},{passive:!0})));