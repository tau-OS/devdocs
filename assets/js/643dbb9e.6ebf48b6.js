"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[673],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6081:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},u="tauOS OEM Configuration",l={unversionedId:"oem",id:"oem",title:"tauOS OEM Configuration",description:"TODO: Fill information",source:"@site/docs/oem.md",sourceDirName:".",slug:"/oem",permalink:"/docs/oem",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/oem.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Settings",id:"settings",level:3}],m={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tauos-oem-configuration"},"tauOS OEM Configuration"),(0,a.kt)("p",null,"TODO: Fill information"),(0,a.kt)("h3",{id:"settings"},"Settings"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Details->System")," panel in tauOS System Settings may be configured with OEM-specifc metadata, supplied by a config file in ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/oem/oem.conf.")),(0,a.kt)("p",null,"This file must have the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[OEM]\n# Device name\nProduct=MyProduct 15"\n\n# Human-facing model number or version\nVersion=Gen3\n\n# Human-facing OEM Name\nManufacturer=Fyra Labs\n\n[Logos]\n# Path to a logo or hardware image, expected to be shown on a light background\nLight=/usr/share/oem/light.png\n\n# Path to a logo or hardware image, expected to be shown on a dark background\nDark=/usr/share/oem/dark.png\n\n[URLS]\n# OEM Homepage URL\nHomepage=https://tauos.co\n\n# OEM Support URL. May be specific to product, may not\nSupport=https://fyralabs.com/\n')),(0,a.kt)("p",null,"All fields are optional, however most fields are recommended.\nAll fields are read as strings, and as such, may contain any valid string characters."),(0,a.kt)("p",null,"The recommended OEM logo size is 252x252px"),(0,a.kt)("p",null,"TODO get banner size"))}f.isMDXComponent=!0}}]);