import{jsx as e}from"@emotion/core";import{createContext as t,useContext as r,createElement as n}from"react";var i={start:{justifyContent:"flex-start",textAlign:"start"},center:{justifyContent:"center",textAlign:"center"},end:{justifyContent:"flex-end"},around:{justifyContent:"space-around"},between:{justifyContent:"space-between"}},o={top:{alignItems:"flex-start"},middle:{alignItems:"center"},bottom:{alignItems:"flex-end"}},s=function(e,t){var r=e.reverse,n=e.breakpoints,s=e.rootEM,a=e.gutter/2*-1,c={};return Object.keys(n).forEach(function(e){var r;if(t[e]){var a=t[e],f=a.align,u=Object.assign({},function(e){return e?i[e]?i[e]:e:{}}(a.justify),f?o[f]?o[f]:f:{});c=0===n[e]?Object.assign({},c,u):Object.assign({},c,((r={})["@media screen and (min-width: "+n[e]/s+")em"]=u,r))}}),Object.assign({},{boxSizing:"border-box",display:"flex",flexWrap:"wrap",marginRight:a,marginLeft:a,flexDirection:r?"row-reverse":"row"},c)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var c={reverse:!1,gutter:10,breakpoints:{xs:0,sm:768,md:1024,lg:1920},rootEM:16,cols:12},f=t(c),u=function(t){return function(i){var o=i.as;void 0===o&&(o="div");var s=i.children,c=i.css;void 0===c&&(c={});var u=a(i,["as","children","css"]);return e(function(e){return n(o,Object.assign({},u,e),s)},{css:Object.assign({},t(r(f),u),c)})}},d=function(t){var n=t.children,i=a(t,["children"]),o=r(f)||c,s=Object.assign({},o,i);return e(f.Provider,{value:{gutter:s.gutter,reverse:s.reverse,breakpoints:s.breakpoints,rootEM:s.rootEM,cols:s.cols}},n)},l=u(function(e,t){var r=e.reverse,n=e.breakpoints,i=e.cols,o=e.rootEM,s=e.gutter,a={};return Object.keys(n).forEach(function(e){var r;if(t[e]){var s=t[e],c=s.span,f=s.order,u=s.offset,d=Object.assign({},c&&{flexBasis:100/i*c+"%"},c&&{maxWidth:100/i*c+"%"},c&&{flexGrow:void 0},f&&{order:f},u&&{marginLeft:100/i*u+"%"});a=0===n[e]?Object.assign({},a,d):Object.assign({},a,((r={})["@media screen and (min-width: "+n[e]/o+"em)"]=d,r))}}),Object.assign({},{boxSizing:"border-box",flex:"0 0 auto",paddingRight:s/2,paddingLeft:s/2,flexDirection:r?"column-reverse":"row",flexGrow:1,flexBasis:0,maxWidth:"100%"},a)}),g=function(t){var r=u(s);return e(d,t,e(r,t))};export{d as GridProvider,l as Col,g as Row};
//# sourceMappingURL=untitled-grid.module.js.map
