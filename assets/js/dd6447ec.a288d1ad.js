"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[582],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,h=u["".concat(p,".").concat(b)]||u[b]||d[b]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},p="Sidebars",c={unversionedId:"hig/patterns/sidebars",id:"hig/patterns/sidebars",title:"Sidebars",description:"A sidebar is a complementary component in your app, and it has an App Bar of its own on top, and elements below it. It also has a obligatory Sidebar Title using View Title typography rules.",source:"@site/docs/hig/patterns/sidebars.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/sidebars",permalink:"/docs/hig/patterns/sidebars",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/docs/hig/patterns/sidebars.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"hig",previous:{title:"App Bar",permalink:"/docs/hig/patterns/app-bars"}},l={},d=[{value:"Secondary Sidebar",id:"secondary-sidebar",level:2}],u={toc:d};function b(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sidebars"},"Sidebars"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7224).Z,width:"313",height:"640"})),(0,i.kt)("p",null,"A sidebar is a complementary component in your app, and it has an App Bar of its own on top, and elements below it. It also has a obligatory Sidebar Title using View Title typography rules."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5748).Z,width:"313",height:"640"})),(0,i.kt)("p",null,"When using one, the app's Main Menu (1) goes here, on the right position of the App Bar of the Sidebar. When there's a Sidebar in an app, other App Bars have the view-more symbolic icon (2) instead, as they're Complementary Menus, that act on that side of the app, and not the app as a whole."),(0,i.kt)("p",null,"The Main Search of the app goes here if your app has a Sidebar, below the Sidebar Title."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Elements on the sidebar have 18dp spacing on the sides."),(0,i.kt)("li",{parentName:"ul"},"The Main Search has 12dp spacing on top and on bottom."),(0,i.kt)("li",{parentName:"ul"},"Elements below the Sidebar have 6dp spacing between them, irregardless if they're Items or Mini Content Blocks.")),(0,i.kt)("h2",{id:"secondary-sidebar"},"Secondary Sidebar"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8053).Z,width:"381",height:"640"})),(0,i.kt)("p",null,"If one Sidebar isn't enough, you can add no more than one Sidebar, this being the Secondary Sidebar. This Sidebar doesn't have a Search widget, only a Sidebar Title and elements. This Sidebar, if it has a Menu, uses the Secondary Menu visuals."))}b.isMDXComponent=!0},5748:function(e,t,n){t.Z=n.p+"assets/images/main_sidebar-4ab9239a26b67cb91c3b861b57d60669.png"},8053:function(e,t,n){t.Z=n.p+"assets/images/secondary_sidebar-bdd4ffb356929b049f5dd114aeb0a747.png"},7224:function(e,t,n){t.Z=n.p+"assets/images/sidebar-b738e18f76425fc14207f4c0ef6e9a68.png"}}]);