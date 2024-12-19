(()=>{var w={calculateEventPosition:(c,t)=>{if(t==="viewport")return c.target.getBoundingClientRect();if(t==="body"){let e=function(r,n){var a=0;do isNaN(r?.["offset"+n])||(a+=r?.["offset"+n]);while(r=r?.offsetParent);return a};return{top:e(c.target,"Top"),left:e(c.target,"Left"),right:e(c.target,"Right"),bottom:e(c.target,"Bottom"),width:c.target.getBoundingClientRect().width,height:c.target.getBoundingClientRect().height}}},insertContextMenu:c=>{let t=!wp.data.select("getgenie").contextMenu().open;wp.data.dispatch("getgenie").setContextMenu({open:t,buttonEvent:c})},showSidebar:c=>{let t=wp.data.select("getgenie").sidebar().existingInputValue||"",e="WriteTemplatesScreen",i=c.slug;i==="list"&&(e="TemplateListScreen"),wp.data.dispatch("getgenie").setContextMenu({open:!1}),wp.data.dispatch("getgenie").setSidebar({open:!0,currentWritingMode:c?.mode,component:e,currentTemplate:i,existingInputValue:t.replace(/<br\s*[\/]?>/g,"")})}},f=w;var T=`${window.getGenie.config.assetsUrl}dist/admin/images/genie-dark.svg`,p=class{getUpperSiblingsWithInnerText=t=>{let e=[],i=t.previousSibling;for(;i;)i.nodeType===Node.ELEMENT_NODE&&!i.classList.contains("blog-title")&&e.unshift(i.innerText+" "),i=i.previousSibling;return e.join("")};triggerBtnHtml=(t,e)=>{let i=document.createElement("button"),r=window.getComputedStyle(e),n=parseInt(r.paddingBottom)||0,a=parseInt(r.marginBottom)||0,o=parseInt(r.borderBottomWidth)||0;return t?.includes("bricks")&&(i.style.top=`-${a+o+n+38}px`),(t?.includes("oxygen")||t?.includes("cpt"))&&(i.style.top=`-${a+o+n+25}px`),t?.includes("elementor")&&elementor.settings.editorPreferences.model.get("ui_theme")==="auto"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&i.classList.add("dark"),i.classList.add("getgenie-trigger-btn",t),i.innerHTML=`<img src=${T} alt="GetGenie" />`,i};checkVisibility=t=>{let e=window.getComputedStyle(t),i=e.display,r=e.visibility;return!(i==="none"||r==="hidden")};addGetGenieTriggerBtn=(t,e,i=!0)=>{if(!t)return;setTimeout(()=>{let n=jQuery(t).find(".mce-container");if(n?.length){if(this.checkVisibility(n[0])){n.parent().find(`.${e}`).length&&n.parent().find(`.${e}`).remove();let o=n.find("iframe");o[0].insertAdjacentElement("afterend",this.triggerBtnHtml(`${e}`,o[0]))}let a=n.parent().find("textarea");if(!a?.length||!this.checkVisibility(a[0]))return;a.parent().find(`.${e}`).length&&(a.parent().find(`.${e}`).remove(),a[0].insertAdjacentElement("afterend",this.triggerBtnHtml(`${e}`,a[0])))}},500);let r=i?jQuery(t).find("textarea"):jQuery(t);!r?.length||r.parent().find(`.${e}`).length||r.each((n,a)=>{!this.checkVisibility(a)||a.insertAdjacentElement("afterend",this.triggerBtnHtml(`${e}`,a))})};addGetGenieTriggerBtnForOxygen=t=>{if(!t)return;let e=jQuery(t).find(".textarea");if(!e.length&&jQuery(t).find("#wp-oxygen_vsb_tinymce-wrap").length){let i=jQuery(t).find("textarea.wp-editor-area"),r=jQuery(t).find(".mce-container");if(r?.length&&this.checkVisibility(r[0])){let n=r.find("iframe");r.parent().find(".getGenie-oxygen-iframe").length&&r.parent().find(".getGenie-oxygen-iframe").remove(),n[0].insertAdjacentElement("beforeBegin",this.triggerBtnHtml("getGenie-oxygen-iframe",n[0]))}i?.length&&this.checkVisibility(i[0])&&(i.parent().find(".getGenie-oxygen-iframe").length&&i.parent().find(".getGenie-oxygen-iframe").remove(),i[0].insertAdjacentElement("beforeBegin",this.triggerBtnHtml("getGenie-oxygen-iframe",i[0])))}!e?.length||e.parent().find(".getGenie-oxygen-textarea").length||e.each((i,r)=>{!this.checkVisibility(r)||r.insertAdjacentElement("afterend",this.triggerBtnHtml("getGenie-oxygen-textarea",r))})};addGetGenieTriggerBtnForFluentCRM=(t,e)=>{if(!t)return;if(t.querySelector(".getGenie-fluent-editorField")||t.appendChild(this.triggerBtnHtml(`${e}`,t)),t.className==="wp-editor-container"){let r=jQuery(t).find(".mce-container");if(r?.length&&this.checkVisibility(r[0])){let n=r.find("iframe");r.parent().find(".getGenie-fluent-iframe").length&&r.parent().find(".getGenie-fluent-iframe").remove(),n[0].insertAdjacentElement("beforeBegin",this.triggerBtnHtml("getGenie-fluent-iframe",n[0]))}}};insertTextToInputs=(t,e)=>{let i=t.replace(/<br\s*[\/]?>/g,`
`),r=new KeyboardEvent("keydown",{key:"Shift",bubbles:!0,cancelable:!0});if(wp.data.select("getgenie").sidebar().currentTemplate==="expandOutline")if(e?.tagName==="TEXTAREA"||e?.tagName==="DIV")e.value=i,r=new Event("input",{bubbles:!0,cancelable:!0});else{let a=t.replace(/(\<br[\s]*\/?\>[\s]*)+/g,"<br>").split("<br>");for(let o of a){let l=document.createElement("p");l.textContent=o,e.insertAdjacentElement("afterend",l),e=e.nextElementSibling}}else["INPUT","TEXTAREA"].includes(e?.tagName)?(e.value=i,r=new Event("input",{bubbles:!0,cancelable:!0})):e?.tagName==="DIV"?(e.innerText=i,r=new Event("input",{bubbles:!0,cancelable:!0})):e.innerText=i;e.dispatchEvent(r)};contextMenuCallback={continueWriting:(t,e,{beforeCaret:i,selectedText:r,afterCaret:n})=>{let a=this.getUpperSiblingsWithInnerText(e);a?.length&&(i=a+i);let o=t;r[r?.length-1]!==" "&&(o=" "+o),this.insertTextToInputs(i+r+o+n,e)},expandOutline:(t,e,{beforeCaret:i,selectedText:r,afterCaret:n})=>{let a;e?.tagName==="DIV"||e?.tagName==="TEXTAREA"?a=i+r+" "+t+`
`+n:a=t,this.insertTextToInputs(a,e)},rewrite:(t,e,{beforeCaret:i,afterCaret:r})=>{let n=i;i&&(n+=" "),n+=t+" "+r,this.insertTextToInputs(n,e)}};genieHeadClickHandler=(t,e,i=null)=>{jQuery(document).on("click",".getgenie-trigger-btn",function(r){r.preventDefault();let n=jQuery(this).siblings("textarea").length?jQuery(this).siblings("textarea"):jQuery(this).siblings("iframe");if(i=="oxygen"&&(n=jQuery(this).siblings(".textarea")?.find('[contenteditable="true"]'),!n?.length&&jQuery(this).parents(".oxygen-tinymce-dialog-wrap").length&&(n=jQuery(this).siblings("textarea").length?jQuery(this).siblings("textarea"):jQuery(this).siblings("iframe"))),i=="cpt"&&(n=jQuery(this).siblings("textarea,  input[type=text]").length?jQuery(this).siblings("textarea,  input[type=text]"):jQuery(this).siblings("iframe")),jQuery(this)?.[0]?.id==="genie-head-cpt"&&(n=jQuery(this).closest("#wp-content-editor-tools").siblings("#wp-content-editor-container")),i=="fluent-crm"&&(n=jQuery(this).children(".is-root-container")),n.length==0)return;let a=n[0]?.value;n=n?.[0];let o=(a||"").substring(0,n?.selectionStart),l=(a||"").substring(n?.selectionEnd),u,g,s=window.getSelection(),d=s.toString(),h=n.tagName.toLowerCase();if(n?.id==="wp-content-editor-container")if(jQuery(n).find("textarea").css("display")==="none"){let m=document.querySelector("#content_ifr").contentWindow,S=m.document.querySelector("body :first-child");s=m.document.getSelection(),d=s.toString(),s?.focusNode&&(n=s.focusNode.parentNode,a=n.innerText,u=Math.min(s?.focusOffset,s?.baseOffset),g=Math.max(s?.focusOffset,s?.baseOffset),o=a.substring(0,u),l=a.substring(g))}else n=jQuery(n).find("textarea")[0],a=n.value,d=s.toString(),o=(a||"").substring(0,n?.selectionStart),l=(a||"").substring(n?.selectionEnd);else if(h==="div"||h==="iframe"){if(h==="iframe"){let b=n.contentWindow,m=b.document;jQuery(m).on("click",function(x){x.preventDefault(),wp.data.select("getgenie").contextMenu()?.open&&wp.data.dispatch("getgenie").setContextMenu({open:!1})}),s=b.getSelection()}d=s?.toString(),s?.focusNode&&(n=s.focusNode.parentNode,a=n.innerText,u=Math.min(s?.focusOffset,s?.baseOffset),g=Math.max(s?.focusOffset,s?.baseOffset),o=a?.substring(0,u),l=a?.substring(g))}else h=="textarea"&&(a=n?.value,o=(a||"").substring(0,n?.selectionStart),l=(a||"").substring(n?.selectionEnd),d=s.toString());let y=f.calculateEventPosition(r,"viewport");f.insertContextMenu(y),s?.focusNode&&(wp.data.dispatch("getgenie").setSidebar({insertTextCallback:e,insertTextField:n,existingInputValue:d}),wp.data.dispatch("getgenie").setContextMenu({inputContent:{beforeCaret:o,selectedText:d,afterCaret:l},insertionField:n,contextMenuCallback:t}))})};genieHeadClickHandlerForWebview=(t,e)=>{setTimeout(()=>{let i=document.querySelector(".ql-editor");i&&(wp.data.dispatch("getgenie").setContextMenu({insertionField:i.firstChild,contextMenuCallback:t}),this.webviewScriptHandler.searchCallback(i.firstChild))},2e3),jQuery(document).on("click",".getgenie-trigger-btn",function(i){i.preventDefault();let r,n=f.calculateEventPosition(i,"viewport");f.insertContextMenu(n);let a,o,l=window.getSelection();l?.focusNode?r=l.focusNode?.nodeName==="#text"?l.focusNode.parentNode:l.focusNode:r=document.querySelector(".ql-editor").lastChild;let u=r.textContent,g="",s="",d="";l?.focusNode&&(g=l.toString(),a=Math.min(l?.focusOffset,l?.baseOffset),o=Math.max(l?.focusOffset,l?.baseOffset),s=u.substring(0,a),d=u.substring(o)),wp.data.dispatch("getgenie").setSidebar({insertTextCallback:e,insertTextField:r,existingInputValue:g}),wp.data.dispatch("getgenie").setContextMenu({inputContent:{beforeCaret:s,selectedText:g,afterCaret:d},insertionField:r,contextMenuCallback:t})})};webviewSearchCallback=(t,e)=>{wp.data.dispatch("getgenie").setSidebar({insertTextCallback:e,insertTextField:t,existingInputValue:""})};bricksScriptHandler={init:(t,e)=>{this.addGetGenieTriggerBtn(t,e)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs)};oxygenScriptHandler={init:t=>{this.addGetGenieTriggerBtnForOxygen(t)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs,"oxygen")};elementorScriptHandler={init:(t,e)=>{this.addGetGenieTriggerBtn(t,e)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs)};tmceBtnClickHandler=(t,e,i)=>{document.querySelector("#content-tmce")&&(document.querySelector("#content-tmce").addEventListener("click",function(){t(e,i)}),document.querySelector("#content-html").addEventListener("click",function(){t(e,i)}))};cptScriptHandler={init:(t,e,i=!0)=>{this.addGetGenieTriggerBtn(t,e,i),this.tmceBtnClickHandler(this.addGetGenieTriggerBtn,t,e)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs,"cpt")};webviewScriptHandler={clickHandler:()=>this.genieHeadClickHandlerForWebview(this.contextMenuCallback,this.insertTextToInputs),searchCallback:t=>this.webviewSearchCallback(t,this.insertTextToInputs)};fluentcrmScriptHandler={init:(t,e)=>{this.addGetGenieTriggerBtnForFluentCRM(t,e)},clickHandler:()=>this.genieHeadClickHandler(this.contextMenuCallback,this.insertTextToInputs,"fluent-crm")}};var C=new p;jQuery(document).ready(function(c){document.querySelector(".webview")&&C.webviewScriptHandler.clickHandler()});})();
