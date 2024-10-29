"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[188],{5680:(t,e,a)=>{a.d(e,{xA:()=>u,yg:()=>y});var n=a(6540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),p=s(a),y=r,m=p["".concat(o,".").concat(y)]||p[y]||g[y]||i;return a?n.createElement(m,l(l({ref:e},u),{},{components:a})):n.createElement(m,l({ref:e},u))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=p;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},404:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(8168),r=(a(6540),a(5680));const i={sidebar_position:4},l="Typography",d={unversionedId:"hig/guidelines/typography",id:"hig/guidelines/typography",title:"Typography",description:"An app's interface is nothing without text. Size, position, among other things deliver a great experience in conveying information. Well written and placed text is important to the success of your app.",source:"@site/docs/hig/guidelines/typography.md",sourceDirName:"hig/guidelines",slug:"/hig/guidelines/typography",permalink:"/docs/hig/guidelines/typography",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/hig/guidelines/typography.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"hig",previous:{title:"Colors",permalink:"/docs/hig/guidelines/colors"},next:{title:"Standard Keyboard Shortcuts",permalink:"/docs/hig/guidelines/standard_keyboard_shortcuts"}},o={},s=[{value:"General Rules",id:"general-rules",level:2},{value:"Geometry",id:"geometry",level:2},{value:"Standard Font Styles",id:"standard-font-styles",level:2},{value:"Unicode Advantage",id:"unicode-advantage",level:2}],u={toc:s};function g(t){let{components:e,...i}=t;return(0,r.yg)("wrapper",(0,n.A)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"typography"},"Typography"),(0,r.yg)("p",null,"An app's interface is nothing without text. Size, position, among other things deliver a great experience in conveying information. Well written and placed text is important to the success of your app."),(0,r.yg)("h2",{id:"general-rules"},"General Rules"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use the system font wherever possible. tauOS uses Manrope (by Mikhail Sharanda designed in 2018 and updated frequently.) at 10pt size."),(0,r.yg)("li",{parentName:"ul"},"Don't place text over a busy background like an image or a gradient, without proper protection with a scrim.")),(0,r.yg)("h2",{id:"geometry"},"Geometry"),(0,r.yg)("p",null,"Font weights, colors and sizes determine the hierarchy of your app's information. Having too many varying colors and weights makes your app look messy. Make an effort to use only the tauOS Typography font sizes and weights for consistency and to make information easier to read."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use lighter text for unimportant information."),(0,r.yg)("li",{parentName:"ul"},"Use darker text for more important information."),(0,r.yg)("li",{parentName:"ul"},"Avoid the use of italics or oblique faces, as they are visually complex and are a distraction."),(0,r.yg)("li",{parentName:"ul"},"Do ",(0,r.yg)("strong",{parentName:"li"},"Not")," Use Header or Title Case for Everything like This."),(0,r.yg)("li",{parentName:"ul"},"Don't do custom font sizes or styles, as this interferes with accessibility. Use the standard font styles, or use relative font sizes.")),(0,r.yg)("h2",{id:"standard-font-styles"},"Standard Font Styles"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(7112).A,width:"315",height:"532"})),(0,r.yg)("p",null,"These are the recommended font styles for use in tauOS apps."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Specs"),(0,r.yg)("th",{parentName:"tr",align:null},"CSS Class"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Usage"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Big Display"),(0,r.yg)("td",{parentName:"tr",align:null},"Regular 57px"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},".big-display")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Used for very large text, such as timers or text that needs to be big.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Display"),(0,r.yg)("td",{parentName:"tr",align:null},"Light 40px"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},".display")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Relatively large text on the screen, display is reserved for short, important text.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"View Title"),(0,r.yg)("td",{parentName:"tr",align:null},"Light 24px"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},".view-title")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Used for view titles, it's big enough to title an app's view.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"View Subtitle"),(0,r.yg)("td",{parentName:"tr",align:null},"Regular 20px"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},".view-subtitle")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Used for subtitles within a View.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Content Block Title"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Bold 18px")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},".cb-title")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Used for the titles on Content Blocks.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Content Block Subtitle"),(0,r.yg)("td",{parentName:"tr",align:null},"Regular 15px"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},".cb-subtitle")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Used for the subtitles on Content Blocks.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Header"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"ALL-CAPS BOLD 10px")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},".header")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Used for headings in a Sidebar.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Body"),(0,r.yg)("td",{parentName:"tr",align:null},"Regular 10px"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},".body")," (is the default)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Used for all the text on the interface.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Caption"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Bold 9px")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},".caption")),(0,r.yg)("td",{parentName:"tr",align:"left"},"For sub-text that accompanies a text body or an image.")))),(0,r.yg)("p",null,"Note: These CSS classes are available on both GTK4 and GTK3."),(0,r.yg)("h2",{id:"unicode-advantage"},"Unicode Advantage"),(0,r.yg)("p",null,"Unicode provides a wide variety of symbols which, when used correctly, can improve the aesthetics given by your app. These Unicode characters are recommended:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Use"),(0,r.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,r.yg)("th",{parentName:"tr",align:null},"Unicode Code to Use"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Quotations"),(0,r.yg)("td",{parentName:"tr",align:null},"\u201cquote\u201d"),(0,r.yg)("td",{parentName:"tr",align:null},"U+201C Left double quotation mark,<br",">","U+201D Right double quotation mark")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Time"),(0,r.yg)("td",{parentName:"tr",align:null},"4\u223620"),(0,r.yg)("td",{parentName:"tr",align:null},"U+2236 Ratio")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Multiplication"),(0,r.yg)("td",{parentName:"tr",align:null},"1024\xd7768"),(0,r.yg)("td",{parentName:"tr",align:null},"U+00D7 Multiplication sign")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Ellipsis"),(0,r.yg)("td",{parentName:"tr",align:null},"Introducing\u2026"),(0,r.yg)("td",{parentName:"tr",align:null},"U+2026 Horizontal ellipsis")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apostrophe"),(0,r.yg)("td",{parentName:"tr",align:null},"The user\u2019s preferences"),(0,r.yg)("td",{parentName:"tr",align:null},"U+2019 Right single quotation mark")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bullet List"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2022 One"),(0,r.yg)("td",{parentName:"tr",align:null},"U+2022 Bullet")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Ranges"),(0,r.yg)("td",{parentName:"tr",align:null},"June\u2013July 1967"),(0,r.yg)("td",{parentName:"tr",align:null},"U+2013 En dash")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Units"),(0,r.yg)("td",{parentName:"tr",align:null},"32\u202fGB"),(0,r.yg)("td",{parentName:"tr",align:null},"U+202F Narrow no-break space")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Links"),(0,r.yg)("td",{parentName:"tr",align:null},"Link \u2192"),(0,r.yg)("td",{parentName:"tr",align:null},"U+2192 Rightwards Arrow")))))}g.isMDXComponent=!0},7112:(t,e,a)=>{a.d(e,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAAIUCAMAAABSEHuLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAvVBMVEUAAADv7+/x8fPw8PLw8PHw8PLx8fPv7+/x8fLv7/Hv7/Hv7/Hw8PLw8PHv7+/x8fHw8PKbm5xeXl6np6i/v8FGRkZSUlKCgoPLy8wtLS3X19l2dnaOjo9FRUZdXV6Pj4/Y2Nl2dndFRUWbm5s5OTm/v8Bqamo5OTrj4+Wzs7Sampzk5OaDg4OampumpqhqamvLy82OjpBRUVLk5OVpaWqzs7WPj5DMzM2CgoR1dXZ3d3fY2NpRUVHAwMH///9F4FAVAAAAEHRSTlMAEH+/3+9vIJ9woIDf73BvwqJ27wAAAAFiS0dEPklkAOMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmBR4TGA4PLFWUAAAar0lEQVR42u3dW2ObSLYFYM309GR6LudsVZWNV0FhoAt0IXEQiuykT8///1vnoSgoJCTbakex3Xs/dNu6YPSJuqFoMZu5+stff/obcT1eP//09w+zsD78xCjPqH8Een//mT2ed/D94un+yhjPrr92Rx1LnFG/zGaz2QdusGc12w+z2eyf7HBW/TSbfWCFM+svs18Y4cz614xnduc3Wh4pzq1/z9jg7GI7tmM7tmM7LrZjO7ZjOy62Yzu2Yzu242I7tmM7tuNiO7ZjO7ZjOy62Yzu2YzsutmM7tmM7tuNiO7YjorkQ8j3ZqatRXYtofnPwIAD6BXYsBpJ3ZYfDMlKz3Zl2gJFs9zQ77UspJaMUAHDLdk+y27spyw/wXqb+BHZEWQHgV7Y7x46yArCa7c6xo8wCgu3OsqM5gJLtzrIjERx4Wo/bbxlVVwssrsV4Hu0ftpy7u/PVI3bLeXx1BVyJaEXH/lZ/6/Lt2K0B1JNzlNV1MBO8liNuTbT8eGyeuGenRTij9OO6BT4d7o0B5Nuxqy1wN2G3/Lw3j871yK4x43vrY3bzxd583G1nM9XRKsC+oTZLAogn7FoAdqO2RNTIL8GLdnbNwt/d7HIAuK6n7e4BIN0oTaRVVAAwNRFRPdXR5kD+luzWgDm0uwcQbcczQTHYKRPenRUIX3RoVwKw6+GvbfrtCCDabwPfYeD6rna7ocMb7Gq739/nwzRaANfju+sKwGrKzgD2IdzOV++jAFuPd0UCxVsaZykD8LBvtzvoeOqiPz4FsC9bF74tju0kgPVB/xodGS0mDsXXbUfoB4vBLgHSqbMJvV0xca88tKsOH7nx78HBaKEBZG/LzkzbtQcDcvst6+3kiXlieNx9sZ8m9mR6tJCHb9gbsEv27eRhZzRiwsGdcrhxPEfZTgwIerKJXmpy953tagBVfdzu8Pioh6b/yJrM+v51b7RoLtdkv6sdfQVg5PKY3YRN2x9Fp+2Wpm+q7Wi0uNjk7mXtPh3Ojb8CwCKf4hPBfGS0mqhO2S1v5DyurhYYurnxaGEmN/vqx9nVxHpWFm4NJaLy0G5iBpv0c5gDOy2j6ipcl5XDfKUM5pkFvTG7YLjb+7xCpt1LXVRyz06fWp+M7Za3IZs1aQAWBaPFJZvsS9mpqXWFnzf3fGY4FXDETk7b+VMB5ks03+mta5tlsPavh7fw4a3ZrYclxOTnZG4BH34qNG033WZ/AwAbqe2oXyuDTX269HrsBe2qvo8/+hljNi8QrPaP9nfpgd1HAIU66F/L4I0T/Ublm7Ozw06f+Hx2V4zOBdydeg8GOwUg3544WdKPFhdcj72cnQx2+tRn2/V137anl+xtLzbY5RMNUY2WYn60WF9uPfZyduEi4eS/CxidCzg85auHqc5gN7XKWo/s/GhhLtpkX8ZOhuv60/+mon/NT1/PTp3LFOMb3SJFnVo/v1I7bcJW1dvpeSxO2yUTq5OcJuz0xPEZ2q2B9sKTu5exW7ajLrp/qc3EAdOM7CZO+fbPGOzs4TIr37Nzo4W51Mn2F7PT7fgIGg4TEXy0Myxwh7FimNcMx29LB3bi4HC6x54dRUB10fXYS9gtbxcYv7bBTmEfrxkeK4Bi/A+otAmP38FuDaDZoyv2pocPgL3cyfY/bLfUejWvFtijC7unfPyJ9fIWgM2GxUABVL1taUbH72BXF4AZoEoBYBXvtU/30Xf2uu0Oy67piF1duZMA87K8KWW0wHBqkwRwlxUAqnmp9ep2/7OfYF2hACBf3SyX+mYu3Eb27XbAZSd3L2Fno4yO2blPUkePVsGBcuc+kx1qTZN2tLOjhxUPdGBXW1x2cvcH7Yz5Eu22E7OQoI/L8oDHbrY0siPaDHenGR2x6/51qat20909HlM3F2+yl/h+hZp/S9P0y7e52uugXPPdRWmapt/m25MbyeQ39zB15AHR/qj9Luzo2DLu7iW3d8mT7e/MTl16cveO7C69HntHdqMPfNjuWSV/QJN9L3Zi8h/Pst0TSl9+cvdu7NYXX4+9Hztz8fXYu7G79Mn292T3IyZ378XO/IDJHXFOBduxHduxHRfbsR3bsR0X27Ed27Ed23GxHduxHdtxsR3bsR3bsR0X27Ed27EdF9uxHduxHdtxsR3bsR3bcbEd27Ed23GxHdux3Z/K7uUuyLQ8DBzUyeqd2MV733eTyCk76yu/5iAYKSGKfZrP8Hao/hpAb91u/5UIlGfaVamrAm33kwzshk2+Hzuyo+/3ahREtWr+wN8eHckPPqzoXdpFoy+8yj8e1BdPfuv1XdqpUahu+8eDIf5EdmSDUF3tkjnLvs2WUSX6SyUON+vSP2dZNqfsdFkT3ZRlibYsy7KsR3Zu6+XbtdsE+S0RJNEwVvSXS3T5ntYOY+qnvpF/OmUXQ49GYB3YNeOtv0W7sNEaZIGdNkjVlkjlsE2ooof07Org6giHdjspJVoppZTBcdcskKotbf3W3+TcWPSJisqheTsTXIfN1kQ7P5Cs0Y/OtqBH7Sb7Oz1sfTNc++2t2W36F5G7LJfOTgYRG1+RENW2v/pd0kX6qcMYjifa5cEz89d0Qd9n2dV9dLNrst7OBM2xhiUi4W7RqLKu4eWHg+oT7Uwwoj+8/MWpL7WeFd2rVV22prNrRvlpAg9Ea3d8SEhq3bhhLJ1np0ZrFwP9Ru06Esq7hujsdqOU0gh3RLU7PipktEE53WSfaLceTcJjrN6oXe0mH7Wfgzg7CSOGcj27QE1ENiVSiPo5zTl2yd7W796oXddo+7HB2a1hTVhzPxfc4RMRWUNE7eHFKp5sN976Wz3uusmH7/b64y6angvmyIgogiY9dcLlqXavaGj9I3a1tbU7hXK0v/Oduq3JFI4gITmVT/c0O/lqV7XPtKMIZTCdc3b11HXVI5Sup6PaChJTZw6eZpf1V/J+63YKlZ+8DfM7ESJ8lnX3wqPu5gr/d3AR3xN27d78rh1dmUe+XTuyNpjOdXYqWCrd+3utbQu/TmsnT/ZN2w3nETo7iWsatp6/YbsI7XBCxK9nc1y7V7782F/cI+7DEI9dtX7aTvQXU/HnAoS/QsjyI4rsDdupMA7X29UCyOdSRovhYvZyCKcX08HN03YKEEkSBedRsgImlysZLV4V3RmfMZpgujF81tNdh8IOF/8LRpD1dEubtnNXHhydv+u3vtnSm7Y7ekDOk/nuZV7bVik9sXX1quT43wWwHduxHdtxsR3bsR3bcbEd27Ed27EdF9uxHduxHRfbsR3bsR3bcbEd27Ed23GxHduxHduxHRfbsR3bsR0X27Ed27EdF9uxHduxHdtxsR3bsd2f1W6dNMFvSVLX8bPTUstIXIlKHonDSo6HyETxXqxPdaXfkN0mzMdRKJ4fXDIEW/46eT+wd8Mq9okDXfyYin3Eh8BbslMhVY5PVH973nG3NLAbvdW7L+ijKE7bDXFG0beaKMzoeVt2ZIJoBHNGQu+8T5nYTGd+nLDr6s3abYaAGDWZs/NIiSET6utkfOI7tnsYQjtySKJ+rNDRFXCdayKi2Mfq+p5pFZeHx20GW1MT9xk1mzhzdmV8hYXLLZJx3KKN4zjuxopVHKcw3Q3ebnkrFlhU5Su3C2KfLLIh5Gq+AIwB8GvwmMhDD+FRIjiKNI3CKN2zgDlgDYCIiOI+6rgbK5Lwhs5OG8AYiz8ekP6d7fpGu0NKvd0K2GyJaA6Uw2hsui5tyHujjdMNBp8DO/yuiEhaRERbrSNEWmvd2W21nqPqbnB22uBzQ0S74kfgPccu88dS3oVqG6e09p2R6fOjNa7dq5GjgF2YvDxlV2y7e9xRNfR33Rxlv7/r43sz+wP6v2etK7oGWaML1TZEJIcDS6AkMqiJaA3pIo5H8W6yALDwc+MJOz+YVA7tMTs9RFNtfsCB9yy7tQ9V60K1DY3SmjeIiCJ8IiKBOoY+jBVUUQsA+ZH+zi8edm4cf8xuF+YMtq/broatiajyodqGiARy2VWOqmu0GqnLvp+Is8xk6kLtD+3M0DvgKXYJhP/b86nsx1d1LkCgHFqKsxtdfCcld3kVCUm1FX12+T5fATFllz7TLh5d9OeV261REck+VNvZbVRfDbn05gqZizg2qKdHHdQvcNxF+Dz8bfXK7WrYul8fOLtq/7IUEjF1scd3YZ64lipc3z1QM1i5SE8EaZX2KXbrqYDbV3v+TuBO+y7d2W2G5dXS+7pM6BoiTNNeh+swiweq+7FBoxsr/JgcOZTH7BT6yy8t9au3W0MEodrGTVgaf57ElO5lXbsOUdjwlEFth7MnbmLTLzTuvV13GGnjzJN+4nFkflf0s+2PkK/drrb22sd4dnPjr92VYHTbzfTWGH5oR+dRcOuOjtUCayKSsKUT8XZOd+m3pPqLzHR2DawO7VS3VAkiWl+vHQn0vVJnV18DVZJUfZBp5leX2d4ycwMsqiSJr3wCbQWIJBIo8m6cvYZJkiEStS5gqjge7Ej4G7r17Aa4jpJ4AXv36tssSQSh2l1f75JMbbQd9fz7iwoiUmk3lVn156IAIM2Szq72N/g/kQbnAoiIsnx8LsAtVYD04fWPFcfOKUv5tJjUTEm5C7r1rdp7YraTo48ztqoZb3irmvGw0Oyk/DEhqjPiYju2Yzu242I7tmM7tuNiO7ZjO7ZjOy62Yzu2YzsutmM7tmM7tuNiO7ZjO7bjYju2Yzu2YzsutmM7tmM7LrZjO7ZjO7bjYju2Yzu243pBu6WM4jhZLb/fDt2Urm7cryru8wOP7lNZNpObcFXTJo6z0QPk/g2XsJsvuuDE26c8en0ihDKoJAnTGnw2I0xDRCSBxzaiECQ6EO3FjkCTcF8L10nSvQ3xdP7ed7X7bdij/AkPN0/LLMEo+1IMf6N8WTsFnzbwA+w+AsiV1irHk0LTzrW7lVLOC0CcabdzIUH4LKWUsqat1tsfbKcBHzk2R//X9Wo12g+9Wt1M2C1vZBl+3zr49cDOBXZZQI/sbla+Exxv8MCOphv7lN3yRpbLC9jlQUvNu/0oRdD9CaSN+10TZX2/RUTL2wUACO2s4tXCJ2rJMA4ptOt+6AlcV2u6JI9wg53d0gCfJ+0EUA75R3eDXbeVXH93O4s+QpGajSIiuh91fwKFH0vqkd2y7X62DREB3aNwfcJuaYBsIOi72lsiF7fYb7Czy9FnsT7Rrt+K0d/ZrsFB1FcDIJ3Pc7j9FAAK/2utlAFcRlQOFHOlcncQwj2rBSApUwqwXZRU90IjKeW8dSIdwT2AXM7Trq/IARvJvICLK0TqupGMjts9qDkglFLb3q7qd0t8Z7uJbkXAhyvC1kSiC078Cp/ICN9RuiPCHVPo2pbocniOjbNF1hPUtutqv8JFxLkmkFngwe1Y0BlP2x32d2q8W5e1q/u3WgB3RKILTqzhkp68XeI7yh0QEXUvnFSHdnSOctsT7HzCT22BOtig3Lod02Z/5H/cLvJPecJY/sft2mO3uN0QvkM0Lq/T21XA4urq6urqCkiJfFRd3f0wOUeR8wKQ/nUlvUwLrKhCGH6mgDTHEJ35VDsR7Fb8fe2yg/5u1x+JCRATiS7ilNqxnRinC/Yxf8fsSk8iPEHcQwjgrjvMAzuLg2b3uF0b7Fb1ncdZE+yfFEkzPu6SwE4cHHd9ruXqyXbu6fvHnR8zx3ZpBZj6+XaR363/fme7TTAeGSDv+zUiAayO2/UdyzIke9TODnbS/2kNIKONVyhvOru62D92HrfrD+ZzJ8fPsKv7+Orlb4DNhnG2mx/s27VdNJ5CF732eVGpKTtbT9jdA204zsrhRgW3ZW2wKN0gltm9ixNM2om9cdZqIlq2i7z53uvZOQATSRktugmBAlDNZTTM70Z2FWBWK3dA2lzOhSPetzNAtVqp4YW2QgixQDBW0AZALqVwN5IATC7nBij8BGCHcWz3oV0GIF9J3c/vBGAiOW9xZnjes86jbIbOdT2+IaUJO+XXFXXhH5dMtNn5/roi3KgnqMItUOY3aLN+8rQZjxeHdt2mh3VFvxXc0Xe36/LogNQfJS5+zm5oys7da4io/mqHp+3bufy8A7t0MyJwIXuFz3zMh9g7Nbx1Vp+yc08K1rPhVi5wzn2rpBwl0jU72RyPn9NKd3cqKY+vGpv+YacmmFI2ox3ZPXsZum32wvO2J3eLP6/gz3rYju242I7t2I7t2I6L7diO7diOi+3Yju3Yju242I7t2I7tuNiO7diO7diOi+3Yju3Yjovt2I7t2I7tuNiO7diO7bjYju3euF0ZxSKSL/W3lfs2siYiasTxL3X133Ec9iJO9GOPIiLajZKm5A+0W36GbdMW5mQymDwdmDEf8l/iIFNBnYiKMKNv8y8FbJrufVuWiESYBBG5L/rGhohq4fb3vECFF7Jrsd4SUVacjMRITodAxWbvx+0Gvz7HLseaiLKvo2/L7tt1v2w1EWXdVzx/pJ30ASR10X03fxk2nOWh3dTdB3ZEog3sdPANdD1l54OVhK0P7PodCiH37fTy8namj/hQWBGRvAYWuSYi+VmLhfs5EgZCiAeiRvjAJhlpscAiqolisbDu7sCuMt5uGS36zCctAIjS2y2ryln51AX1rfZNk4QkEmkpumgq4f4K0fwzKXGNVojI290unhrf94J2TZBJorZE90ilnBdGEyXWpFLmuCaSiUCSJBk1i9+l2rUoiZLC3S2I1sm1TZIkC+2WJu3stLEbKXPcEpFeFPPdvIDs7D77MKo2SG/yhxcSImGR71SOnChJTJEkCVFsqEkiVEkiO7sWm+5Bl7TbjXsk3X373AqixH1xeg45tFlTbImIhCFK3K5+RbnfZsuyLGXrvrheEuUu5ucrSiJTZERUX9uaTEz0W/+99Mai8t8XHtm5Hdq4KIB0eHfCNitdZMPuwvl3EnrcZbuDJ0JNSbcrNu7tXLN2Jok7ZGob7dkFIWYKJdXd4VDbiBr3IinbEpmY7oOv9Gd5AVzf6n27ontydcKu7Z7QVj/Szu/FDitKupiUqu3tEqzKsizLFT71o0db7R93WmvdSFs5O+9NwtB6yIsjE9/vjZHNPIWVe3bV0HsetUPuAlSFuXCbHU3rTOXHjbseJzaB3RAskZighU2MsworUihJ+pYUG0qCd8osJjKHsmtbj+18cIw9bpcNIRgXtauH915XikxKQaOcsBtmEI/ZkY1JoRzeHdHSOrSLv0IeTHYU7ibtTh139YvO8Z4xRxkmVPfI3NtLRGtkU3Yy6I1HdtGUXdT1d90rsxWpoIMzMW36ZcS9f1MarPxONEjcqERE7k091maN+DF2yo/sJXIi5eb12qQ0tlujJqLaur28Nw9ju8Qe2N1DunFWuHyTOSSRvXZD0rWbo/R4yrffe2S0du9Q7sbZlXvTpO95/V/oJldIiDYuZUmbXy+8JtvAyBtd3rq4why3N7psbbZnp1CVNzXNUZW6/Iho77hTuC1v6q5nklLKucDv3RylsWal9S0+E9EOotRljqSb3/V43V7kSIjqwsqbm48wCZGwVmp9u/jdPejXmxtvJ0x50zi7ujDyRs9NmAx6mfMou9al8LgcmK99ps3IjjbWJcQWAOx6v80G2UPdHMVstn5d4VKGoi1R+Hy3JuvxuiygNfknFEokRCLeAEC6JSKqcwB+h7LC5e4l5KN40owubUeUKTWk8GyVms600V3wsJpO7NEnknAapfrnHHs+NUO0KjXDj6Md2oZJPzr4JTu213zuk88bsx3bcbEd27Ed27EdF9uxHduxHRfbsR3bsR0X27Ed27Ed23GxHduxHdtxsR3bsR3bsR0X27Ed27EdF9uxHduxHds9UrVsuv+upJTucsEr2RCR9kkdWkoppSLVR3ewHRERZe57MUiGa35rd9V5CQCI/MXJ0+4LO7dsN2FntNZ6SyTRoiaSWOkmx6+ksNJaa4qN1k0FzXYTdt1NVaHwyX/fU9g+qCM2RLQ788rz79Pus5RyjoSEjeN4RVQjJyu8XQStkMZx3NnNXyTP4L3Y+e+wCxhj5i7tIbJ1Z5dAKxhjDFFshbhGwf3d8TabI0kq3HV2Oeq+zSJNbbFlu+N2FgAQOztt2lF/t3n3TfY8O5skSdK4SI7Y1hJ5EhkoUsiTJJEUm+FL72w3Nb/LURPRDqUEgFQF8ztDf4YDj9dkbMd2bMd2XGzHdmzHdlxsx3Zsx3Zsx8V2bMd2bMfFdmzHdmzHdlxsx3Zsx3ZcbMd2bMd2bMfFdmzHdmzHxXZs90bttJ66sJhmuycUjDE22r/VaLZ7gh0R1SJhuzPtSMZEOhJCEtHyVlQro5W7/mbGdo/YfZakTaR2xa9Ebb5T19DKEpEu+Lg7ZSeEWBiiPCeizNa7gohqaBIl0Tpnu1N2SilVRdSWRESmTCIiolbTThCZB7Z7rM3WtjYlEZEoo4SISGiqba1aHisetSOrq09ERPZhLfw4u0lyyXaP2S0/FqSMJrpvqbYl0T00UW1NxnYn7fzVljcQV2lGtCvEdSo0EYmK53dPrK2/6rL/v1ix3Zn1Z5zcvZSdzNnu3PpvxnZcbMd2bMd2XGzHdmzHdmzHxXZsx3Zsx8V2bMd2bMd2TMB2bMd2bMfFdmzHdmzHxXZsx3Zsx3ZcbMd278JOVtfi8DsouiSiecR2p+oeafLl8Iq8iSGiHX+v51QpJET0FSU1UTzX1HyScaRJCptI2kkiHcWJJkpUFEu2G1WEmojqhvTCfrGCJOyXwtTr3+23hOKUtLFpYWoC2hYJ24UV+6sdZ3K7jEASGWVIXJuNU8ptRhk+EXIarozMds7Odj8sb68AkDREZOLeTqTud3wiithuPMqiJKLVdRPZuV6DpCUiO9hVLRHZiHDXjR9s11ddGHkjTUFxS9qAJG71R0hKUC4pTkni9uYjSrabqqxy3wFtCtgKJFEACVFWIKU4JfoK2DWx3XRt9Xb4nwS5X/3//N08v3tC/8drsnNrZ9iOi+3Yju3Yjovt2I7t2I6L7diO7diO7bjYju1erd2/2eDM+nn2EyOcWT/N/sUIZ9Yvs78wwpn1YcaN9sz6x2w2+/AzO5xR//kwm81m/8MQZ/V2s9lsxsPFGfWvWVf/w832mQ32l1lfH/7JHs+Z2X2YhfXhf3/6D6M8of7207/+0pn9PwUth25OYUolAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA1LTMwVDE5OjIzOjMxKzAwOjAwzuWcRwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNS0zMFQxOToyMzozMSswMDowML+4JPsAAAAASUVORK5CYII="}}]);