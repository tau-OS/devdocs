"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[838],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),u=a,b=h["".concat(p,".").concat(u)]||h[u]||d[u]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const i={sidebar_position:4},o="Sidebars",s={unversionedId:"hig/patterns/sidebars",id:"hig/patterns/sidebars",title:"Sidebars",description:"A sidebar is a complementary component in your app, and it has an App Bar of its own on top, and elements below it. It also has a obligatory Sidebar Title using View Title typography rules.",source:"@site/docs/hig/patterns/sidebars.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/sidebars",permalink:"/docs/hig/patterns/sidebars",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/hig/patterns/sidebars.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"hig",previous:{title:"Bottom Bar",permalink:"/docs/hig/patterns/bottom_bar"},next:{title:"Views",permalink:"/docs/hig/patterns/views"}},p={},l=[{value:"Secondary Sidebar",id:"secondary-sidebar",level:2}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,a.yg)("wrapper",(0,n.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sidebars"},"Sidebars"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(7787).A,width:"278",height:"614"})),(0,a.yg)("p",null,"A sidebar is a complementary component in your app, and it has an App Bar of its own on top, and elements below it. It also has a obligatory Sidebar Title using View Title typography rules."),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(8857).A,width:"313",height:"640"})),(0,a.yg)("p",null,"When using one, the app's Main Menu (1) goes here, on the right position of the App Bar of the Sidebar. When there's a Sidebar in an app, other App Bars have the view-more symbolic icon (2) instead, as they're Complementary Menus, that act on that side of the app, and not the app as a whole."),(0,a.yg)("p",null,"The Main Search of the app goes here if your app has a Sidebar, below the Sidebar Title."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Elements on the sidebar have 18dp spacing on the sides."),(0,a.yg)("li",{parentName:"ul"},"The Main Search has 12dp spacing on top and on bottom."),(0,a.yg)("li",{parentName:"ul"},"Elements below the Sidebar have 6dp spacing between them, irregardless if they're Items or Mini Content Blocks.")),(0,a.yg)("h2",{id:"secondary-sidebar"},"Secondary Sidebar"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(9804).A,width:"381",height:"640"})),(0,a.yg)("p",null,"If one Sidebar isn't enough, you can add no more than one Sidebar, this being the Secondary Sidebar. This Sidebar doesn't have a Search widget, only a Sidebar Title and elements. This Sidebar, if it has a Menu, uses the Secondary Menu visuals."))}d.isMDXComponent=!0},8857:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/main_sidebar-6d42c97fa0fc19bf7f7ab242608766e4.png"},9804:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/secondary_sidebar-42f450c741b9ac955d3951b2155ed562.png"},7787:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/sidebar-80035bace5c268e973ee107f598a5579.png"}}]);