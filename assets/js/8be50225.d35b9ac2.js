"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7784],{7942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7579),a=(n(959),n(7942));const o={sidebar_position:1},i=void 0,l={unversionedId:"LeetCode/\u4e24\u6570\u4e4b\u548c",id:"LeetCode/\u4e24\u6570\u4e4b\u548c",title:"\u4e24\u6570\u4e4b\u548c",description:"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums\xa0 \u548c\u4e00\u4e2a\u6574\u6570\u76ee\u6807\u503c target\uff0c\u8bf7\u4f60\u5728\u8be5\u6570\u7ec4\u4e2d\u627e\u51fa \u548c\u4e3a\u76ee\u6807\u503c target\xa0 \u7684\u90a3 \xa0 \u4e24\u4e2a \xa0 \u6574\u6570\uff0c\u5e76\u8fd4\u56de\u5b83\u4eec\u7684\u6570\u7ec4\u4e0b\u6807\u3002",source:"@site/docs/LeetCode/\u4e24\u6570\u4e4b\u548c.mdx",sourceDirName:"LeetCode",slug:"/LeetCode/\u4e24\u6570\u4e4b\u548c",permalink:"/blog/docs/LeetCode/\u4e24\u6570\u4e4b\u548c",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LeetCode/\u4e24\u6570\u4e4b\u548c.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"this\u6307\u5411",permalink:"/blog/docs/JavaScript/this\u6307\u5411"},next:{title:"\u4fdd\u6301\u7ec4\u4ef6\u4e3a\u7eaf\u51fd\u6570\u7ec4\u4ef6",permalink:"/blog/docs/React/\u4fdd\u6301\u7ec4\u4ef6\u4e3a\u7eaf\u51fd\u6570\u7ec4\u4ef6"}},u={},s=[{value:"\u6211\u7684\u83dc\u9e21\u89e3\u6cd5",id:"\u6211\u7684\u83dc\u9e21\u89e3\u6cd5",level:3},{value:"\u4f18\u8d28\u89e3\u6cd5",id:"\u4f18\u8d28\u89e3\u6cd5",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums\xa0 \u548c\u4e00\u4e2a\u6574\u6570\u76ee\u6807\u503c target\uff0c\u8bf7\u4f60\u5728\u8be5\u6570\u7ec4\u4e2d\u627e\u51fa \u548c\u4e3a\u76ee\u6807\u503c target\xa0 \u7684\u90a3 \xa0 \u4e24\u4e2a \xa0 \u6574\u6570\uff0c\u5e76\u8fd4\u56de\u5b83\u4eec\u7684\u6570\u7ec4\u4e0b\u6807\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5047\u8bbe\u6bcf\u79cd\u8f93\u5165\u53ea\u4f1a\u5bf9\u5e94\u4e00\u4e2a\u7b54\u6848\u3002\u4f46\u662f\uff0c\u6570\u7ec4\u4e2d\u540c\u4e00\u4e2a\u5143\u7d20\u5728\u7b54\u6848\u91cc\u4e0d\u80fd\u91cd\u590d\u51fa\u73b0\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u6309\u4efb\u610f\u987a\u5e8f\u8fd4\u56de\u7b54\u6848\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u8f93\u5165\uff1anums = [2,7,11,15], target = 9\n\u8f93\u51fa\uff1a[0,1]\n\u89e3\u91ca\uff1a\u56e0\u4e3a nums[0] + nums[1] == 9 \uff0c\u8fd4\u56de [0, 1] \u3002\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u8f93\u5165\uff1anums = [3,2,4], target = 6\n\u8f93\u51fa\uff1a[1,2]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3")),(0,a.kt)("p",null,"\u8f93\u5165\uff1anums = ","[3,3]",", target = 6\n\u8f93\u51fa\uff1a","[0,1]"),(0,a.kt)("h3",{id:"\u6211\u7684\u83dc\u9e21\u89e3\u6cd5"},"\u6211\u7684\u83dc\u9e21\u89e3\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function (nums, target) {\n  let store = {};\n  let res = [];\n  nums.forEach((item, index) => {\n    if (store[item] === undefined) {\n      store[item] = {\n        value: item,\n        pos: index,\n      };\n    }\n    if (\n      store[target - item] !== undefined &&\n      store[target - item].value !== undefined\n    ) {\n      if (index !== store[target - item].pos) {\n        res = [store[target - item].pos, index];\n      }\n    }\n  });\n  return res;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"forEach"),"\u4e0d\u53ef\u4e2d\u65ad,\u4e00\u5b9a\u4f1a\u904d\u5386\u5b8c, \u635f\u5931\u6027\u80fd"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u5b58\u50a8\u989d\u5916\u7684 value,\u53ea\u9700\u8981\u5b58\u4e0b\u6807,\u5360\u7528\u5185\u5b58")),(0,a.kt)("h3",{id:"\u4f18\u8d28\u89e3\u6cd5"},"\u4f18\u8d28\u89e3\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function twoSum(nums: number[], target: number): number[] {\n  let map = {};\n  for (let i = 0; i < nums.length; ++i) {\n    const rest = target - nums[i];\n    if (map[rest] !== undefined) {\n      // \u6ce8\u610f\u8fd9\u91ccmap\u91cc\u9762\u7684\u662f\u4e0b\u6807\u6bd4\u8f83\u5c0f\u7684\u503c\u3002\n      return [map[rest], i];\n    }\n    map[nums[i]] = i;\n  }\n  return [];\n}\n")))}c.isMDXComponent=!0}}]);