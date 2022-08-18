"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="tauOS OEM Configuration",l={unversionedId:"oem",id:"oem",title:"tauOS OEM Configuration",description:"TODO: Fill information",source:"@site/docs/oem.md",sourceDirName:".",slug:"/oem",permalink:"/docs/oem",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/oem.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Settings",id:"settings",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tauos-oem-configuration"},"tauOS OEM Configuration"),(0,o.kt)("p",null,"TODO: Fill information"),(0,o.kt)("h3",{id:"settings"},"Settings"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Details->System")," panel in tauOS System Settings may be configured with OEM-specifc metadata, supplied by a config file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/oem/oem.conf.")),(0,o.kt)("p",null,"This file must have the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="/usr/share/oem/oem.conf"',title:'"/usr/share/oem/oem.conf"'},"[OEM]\n# Device name\nProduct=ThinkBook 13s\n\n# Human-facing model number or version\nVersion=Gen3\n\n# Human-facing OEM Name\nManufacturer=Lenovo\n\n[Logos]\n# Path to a logo or hardware image, expected to be shown on a light background\nLight=/usr/share/oem/light.png\n\n# Path to a logo or hardware image, expected to be shown on a dark background\nDark=/usr/share/oem/dark.png\n\n[URLS]\n# OEM Homepage URL\nHomepage=https://lenovo.com\n\n# OEM Support URL. May be specific to product, may not\nSupport=https://support.lenovo.com\n")),(0,o.kt)("p",null,"All fields are optional, however most fields are recommended.\nAll fields are read as strings, and as such, may contain any valid string characters."),(0,o.kt)("p",null,"The recommended OEM logo size is 252x252px"),(0,o.kt)("p",null,"TODO get banner size"))}u.isMDXComponent=!0}}]);