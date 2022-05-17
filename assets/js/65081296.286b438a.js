"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[432],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(n),g=r,c=m["".concat(p,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8450:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:4},p="Typography",d={unversionedId:"hig/guidelines/typography",id:"hig/guidelines/typography",title:"Typography",description:"An app's interface is nothing without text. Size, position, among other things deliver a great experience in conveying information. Well written and placed text is important to the success of your app.",source:"@site/docs/hig/guidelines/typography.md",sourceDirName:"hig/guidelines",slug:"/hig/guidelines/typography",permalink:"/docs/hig/guidelines/typography",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/hig/guidelines/typography.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"hig",previous:{title:"Colors",permalink:"/docs/hig/guidelines/colors"},next:{title:"Patterns",permalink:"/docs/category/patterns"}},s={},u=[{value:"General Rules",id:"general-rules",level:2},{value:"Geometry",id:"geometry",level:2},{value:"Standard Font Styles",id:"standard-font-styles",level:2},{value:"Unicode Advantage",id:"unicode-advantage",level:2}],m={toc:u};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"typography"},"Typography"),(0,l.kt)("p",null,"An app's interface is nothing without text. Size, position, among other things deliver a great experience in conveying information. Well written and placed text is important to the success of your app."),(0,l.kt)("h2",{id:"general-rules"},"General Rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use the system font wherever possible. tauOS uses ",(0,l.kt)("inlineCode",{parentName:"li"},"Manrope")," at 10pt size."),(0,l.kt)("li",{parentName:"ul"},"Don't place text over a busy background like an image or a gradient.")),(0,l.kt)("h2",{id:"geometry"},"Geometry"),(0,l.kt)("p",null,"Font weights, colors and sizes determine the hierarchy of your app's information. Having too many varying colors and weights makes your app look messy. Make an effort to use only the tauOS Typography font sizes and weights for consistency and to make information easier to read."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use lighter text for unimportant information."),(0,l.kt)("li",{parentName:"ul"},"Use darker text for more important information."),(0,l.kt)("li",{parentName:"ul"},"Avoid the use of italics or oblique faces, as they are visually complex and are a distraction."),(0,l.kt)("li",{parentName:"ul"},"Do ",(0,l.kt)("strong",{parentName:"li"},"Not")," Use Header or Title Case for Everything like This."),(0,l.kt)("li",{parentName:"ul"},"Don't do custom font sizes or styles, as this interferes with accessibility. Use the standard font styles, or use relative font sizes.")),(0,l.kt)("h2",{id:"standard-font-styles"},"Standard Font Styles"),(0,l.kt)("p",null,"These are the recommended font styles for use in tauOS apps."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Specs"),(0,l.kt)("th",{parentName:"tr",align:null},"CSS Class"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Display"),(0,l.kt)("td",{parentName:"tr",align:null},"Light 40px"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".display")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Used for very large text, such as timers or text that needs to be big.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Title"),(0,l.kt)("td",{parentName:"tr",align:null},"Light 24px"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".view-title")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Used for view titles, it's big enough to title an app's view.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Subtitle"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular 20px"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".view-subtitle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Used for subtitles within a View.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Header"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ALL-CAPS BOLD 15px")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".header")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Used for headings in a Sidebar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content Block Title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Bold 18px")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".title")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Used for the titles on Content Blocks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content Block Subtitle"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular 15px"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".subtitle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Used for the subtitles on Content Blocks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Body"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular 10px"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".body")," (is the default)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Used for all the text on the interface.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caption"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Bold 10px")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".caption")),(0,l.kt)("td",{parentName:"tr",align:"left"},"For sub-text that accompanies a text body.")))),(0,l.kt)("p",null,"Note: These CSS classes are available on both GTK4 and GTK3."),(0,l.kt)("h2",{id:"unicode-advantage"},"Unicode Advantage"),(0,l.kt)("p",null,"Unicode provides a wide variety of symbols which, when used correctly, can improve the aesthetics given by your app. These Unicode characters are recommended:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Use"),(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Unicode Code to Use"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Quotations"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201cquote\u201d"),(0,l.kt)("td",{parentName:"tr",align:null},"U+201C Left double quotation mark,<br",">","U+201D Right double quotation mark")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"4\u223620"),(0,l.kt)("td",{parentName:"tr",align:null},"U+2236 Ratio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,l.kt)("td",{parentName:"tr",align:null},"1024\xd7768"),(0,l.kt)("td",{parentName:"tr",align:null},"U+00D7 Multiplication sign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ellipsis"),(0,l.kt)("td",{parentName:"tr",align:null},"Introducing\u2026"),(0,l.kt)("td",{parentName:"tr",align:null},"U+2026 Horizontal ellipsis")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Apostrophe"),(0,l.kt)("td",{parentName:"tr",align:null},"The user\u2019s preferences"),(0,l.kt)("td",{parentName:"tr",align:null},"U+2019 Right single quotation mark")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bullet List"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2022 One"),(0,l.kt)("td",{parentName:"tr",align:null},"U+2022 Bullet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ranges"),(0,l.kt)("td",{parentName:"tr",align:null},"June\u2013July 1967"),(0,l.kt)("td",{parentName:"tr",align:null},"U+2013 En dash")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Units"),(0,l.kt)("td",{parentName:"tr",align:null},"32\u202fGB"),(0,l.kt)("td",{parentName:"tr",align:null},"U+202F Narrow no-break space")))))}g.isMDXComponent=!0}}]);