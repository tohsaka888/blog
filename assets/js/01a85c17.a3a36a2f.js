"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4013],{2876:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(959),n=a(7772),r=a(4319),s=a(9171),c=a(6806),i=a(1629);const m="sidebar_Gn2N",o="sidebarItemTitle_fwzm",u="sidebarItemList_GcIk",g="sidebarItem_z_7J",b="sidebarItemLink_iAGn",E="sidebarItemLinkActive_V22_";function d(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:g},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:b,activeClassName:E},e.title)))))))}var p=a(9967);function k(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function N(e){return l.createElement(p.Zo,{component:k,props:e})}function h(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(N,{sidebar:t}):l.createElement(d,{sidebar:t}):null}function v(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},721:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(959),n=a(7772),r=a(1629);var s=a(7343),c=a(1190),i=a(2876),m=a(1390);const o="tag_OiUj";function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(m.Z,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}var b=a(2271);function E(e){let{tags:t,sidebar:a}=e;const m=(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(s.d,{title:m}),l.createElement(b.Z,{tag:"blog_tags_list"}),l.createElement(i.Z,{sidebar:a},l.createElement("h1",null,m),l.createElement(g,{tags:t})))}},1390:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(959),n=a(7772),r=a(6806);const s="tag_CqTz",c="tagRegular_wiil",i="tagWithCount_TYdU";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,m?i:c)},a,m&&l.createElement("span",null,m))}}}]);