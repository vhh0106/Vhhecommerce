"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Edit=void 0;const core_data_1=require("@wordpress/core-data"),element_1=require("@wordpress/element"),block_templates_1=require("@woocommerce/block-templates"),catalog_visibility_1=require("../../../components/catalog-visibility");function Edit({attributes:e}){const{label:t,visibility:i}=e,o=(0,block_templates_1.useWooBlockProps)(e),[l,r]=(0,core_data_1.useEntityProp)("postType","product","catalog_visibility");return(0,element_1.createElement)("div",{...o},(0,element_1.createElement)(catalog_visibility_1.CatalogVisibility,{catalogVisibility:l,label:t,visibility:i,onCheckboxChange:r}))}exports.Edit=Edit;