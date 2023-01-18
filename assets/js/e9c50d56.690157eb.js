"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="App Bar",p={unversionedId:"hig/patterns/app-bars",id:"hig/patterns/app-bars",title:"App Bar",description:"App Bar",source:"@site/docs/hig/patterns/app-bars.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/app-bars",permalink:"/docs/hig/patterns/app-bars",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/hig/patterns/app-bars.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"hig",previous:{title:"Windows",permalink:"/docs/hig/patterns/windows"},next:{title:"Bottom Bar",permalink:"/docs/hig/patterns/bottom_bar"}},s={},c=[],l={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"app-bar"},"App Bar"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App Bar",src:r(8826).Z,width:"456",height:"323"})),(0,a.kt)("p",null,"App Bars appear at the top of apps. They include the title of the app or page, the main functions available from that location, and navigation options."),(0,a.kt)("p",null,"Using text in place of an icon in your App Bar should be avoided. Additionally, icons should always be on the right side of the App Bar."),(0,a.kt)("p",null,"The most common actions you'll find in an App Bar are search, an optional app-specific action, and the App Menu, in that order. The center is reserved for other custom functionality such as View Switchers or View Choosers, if the layout demands it."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If more actions are needed, place them here."),(0,a.kt)("li",{parentName:"ul"},"If there's more than one App Bar (in apps with Sidebars,)the other App Bars should use a Secondary Menu which uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"view-more-symbolic")," icon."),(0,a.kt)("li",{parentName:"ul"},"Add a scroller to your App Bar with the ",(0,a.kt)("inlineCode",{parentName:"li"},"scroller")," property to enable compacting the App Bar to a single-line, darker background, on scroll.")))}u.isMDXComponent=!0},8826:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/appbar_normal-c458d80842d9614ec514a1b563c6f2b7.png"}}]);