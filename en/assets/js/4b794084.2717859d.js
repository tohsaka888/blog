"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1145],{7942:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(959);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),b=a,f=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5584:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(7579),a=(t(959),t(7942));const o={},c=void 0,p={unversionedId:"Webpack/sourcemap\u7684\u4f5c\u7528",id:"Webpack/sourcemap\u7684\u4f5c\u7528",title:"sourcemap\u7684\u4f5c\u7528",description:"\u5f53 webpack \u6253\u5305\u6e90\u4ee3\u7801\u65f6\uff0c\u53ef\u80fd\u4f1a\u5f88\u96be\u8ffd\u8e2a\u5230 error(\u9519\u8bef) \u548c warning(\u8b66\u544a) \u5728\u6e90\u4ee3\u7801\u4e2d\u7684\u539f\u59cb\u4f4d\u7f6e\u3002JavaScript \u63d0\u4f9b\u4e86 source maps \u529f\u80fd\uff0c\u53ef\u4ee5\u5c06\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u6620\u5c04\u56de\u539f\u59cb\u6e90\u4ee3\u7801\u3002\u5982\u679c\u4e00\u4e2a\u9519\u8bef\u6765\u81ea\u4e8e b.js\uff0csource map \u5c31\u4f1a\u660e\u786e\u7684\u544a\u8bc9\u4f60\u3002",source:"@site/docs/Webpack/sourcemap\u7684\u4f5c\u7528.md",sourceDirName:"Webpack",slug:"/Webpack/sourcemap\u7684\u4f5c\u7528",permalink:"/blog/en/docs/Webpack/sourcemap\u7684\u4f5c\u7528",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Webpack/sourcemap\u7684\u4f5c\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Webpack\u70ed\u66f4\u65b0\u539f\u7406",permalink:"/blog/en/docs/Webpack/Webpack\u70ed\u66f4\u65b0\u539f\u7406"},next:{title:"\u5757\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587",permalink:"/blog/en/docs/css/\u5757\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587"}},i={},s=[],l={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53 webpack \u6253\u5305\u6e90\u4ee3\u7801\u65f6\uff0c\u53ef\u80fd\u4f1a\u5f88\u96be\u8ffd\u8e2a\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"(\u9519\u8bef) \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"warning"),"(\u8b66\u544a) \u5728\u6e90\u4ee3\u7801\u4e2d\u7684\u539f\u59cb\u4f4d\u7f6e\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"source maps")," \u529f\u80fd\uff0c\u53ef\u4ee5\u5c06\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u6620\u5c04\u56de\u539f\u59cb\u6e90\u4ee3\u7801\u3002\u5982\u679c\u4e00\u4e2a\u9519\u8bef\u6765\u81ea\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"b.js"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"source map")," \u5c31\u4f1a\u660e\u786e\u7684\u544a\u8bc9\u4f60\u3002"))}u.isMDXComponent=!0}}]);