"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[312],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5518:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:2},l="App Bar",c={unversionedId:"hig/patterns/app-bars",id:"hig/patterns/app-bars",title:"App Bar",description:"App Bar",source:"@site/docs/hig/patterns/app-bars.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/app-bars",permalink:"/docs/hig/patterns/app-bars",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/docs/hig/patterns/app-bars.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"hig",previous:{title:"Windows",permalink:"/docs/hig/patterns/windows"},next:{title:"Sidebars",permalink:"/docs/hig/patterns/sidebars"}},u={},d=[{value:"Flat App Bar",id:"flat-app-bar",level:2}],s={toc:d};function f(e){var t=e.components,p=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app-bar"},"App Bar"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Bar",src:n(8826).Z,width:"435",height:"69"})),(0,o.kt)("p",null,"App bars\u2014internally, headerbars\u2014appear at the top of apps. They include the title of the app or page, the main functions available from that location, and navigation options."),(0,o.kt)("p",null,"App Bars depend on context for their styling. For Primary Windows without Sidebars, an App Bar displays itself with a solid gray background, and a bottom separator. But, with the context of a Primary Window or section without scroll, it will show itself with a lighter background, and no separator."),(0,o.kt)("p",null,"No actions, unless needed, should be text-form instead of an icon in an App Bar. And they should always be on the right of the App Bar."),(0,o.kt)("p",null,"The most common actions you'll find in one are the app name, search, an optional specific action, and then the App Menu, in that order. The app name should only be shown once in the entire app, and always be on the left of the App Bar. Centered title position is reserved for other custom functionality such as View Switchers, if the layout demands it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If more actions are needed to be here, put them on the Menu.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If there's more than one App Bar (such as in Sidebared Apps), the other App Bars should use a Secondary Menu which uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"view-more")," symbolic."))),(0,o.kt)("h2",{id:"flat-app-bar"},"Flat App Bar"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Bar (flat)",src:n(6101).Z,width:"326",height:"52"})),(0,o.kt)("p",null,"A flat App Bar is used when the content below it doesn't scroll. It is made to be flush with the content below by being transparent in its background, and usually accompanies a View Title or View Switcher below it."),(0,o.kt)("p",null,"Content may be positioned below the app bar while in flat form, to make the layout more utilized properly, such as image headers, or watching a video. In those cases, the app bar should be flat, and the media should extend to the top of the Primary Window."),(0,o.kt)("p",null,"A Flat App Bar, if needed, can be shown only on mouse hover, if the functionality of it being in-view is not needed."))}f.isMDXComponent=!0},6101:function(e,t){t.Z="data:image/png;base64,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"},8826:function(e,t){t.Z="data:image/png;base64,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"}}]);