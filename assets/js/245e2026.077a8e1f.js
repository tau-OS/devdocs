"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[24],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>Y});var n=i(7294);function M(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){M(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,M=function(e,t){if(null==e)return{};var i,n,M={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(M[i]=e[i]);return M}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(M[i]=e[i])}return M}var w=n.createContext({}),c=function(e){var t=n.useContext(w),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},m=function(e){var t=c(e.components);return n.createElement(w.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var i=e.components,M=e.mdxType,r=e.originalType,w=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),l=c(i),Y=M,p=l["".concat(w,".").concat(Y)]||l[Y]||s[Y]||r;return i?n.createElement(p,a(a({ref:t},m),{},{components:i})):n.createElement(p,a({ref:t},m))}));function Y(e,t){var i=arguments,M=t&&t.mdxType;if("string"==typeof e||M){var r=i.length,a=new Array(r);a[0]=l;var o={};for(var w in t)hasOwnProperty.call(t,w)&&(o[w]=t[w]);o.originalType=e,o.mdxType="string"==typeof e?e:M,a[1]=o;for(var c=2;c<r;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}l.displayName="MDXCreateElement"},2765:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>w,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(7462),M=(i(7294),i(3905));const r={sidebar_position:5},a="Views",o={unversionedId:"hig/patterns/views",id:"hig/patterns/views",title:"Views",description:"A View is the main door to your app's content. It displays what the app's aim is for. Views should contain a label that titles it, using the View Title typography style. This Title should be concise and not go over 3 words. Views can also contain a simple description below the View Title, spaced by 6 units, and styled with View Subtitle typography style.",source:"@site/docs/hig/patterns/views.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/views",permalink:"/docs/hig/patterns/views",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/hig/patterns/views.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"hig",previous:{title:"Sidebars",permalink:"/docs/hig/patterns/sidebars"},next:{title:"View Switcher",permalink:"/docs/hig/patterns/view_switcher"}},w={},c=[],m={toc:c};function s(e){let{components:t,...r}=e;return(0,M.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("h1",{id:"views"},"Views"),(0,M.kt)("p",null,(0,M.kt)("img",{src:i(5386).Z,width:"1126",height:"366"})),(0,M.kt)("p",null,"A View is the main door to your app's content. It displays what the app's aim is for. Views should contain a label that titles it, using the View Title typography style. This Title should be concise and not go over 3 words. Views can also contain a simple description below the View Title, spaced by 6 units, and styled with View Subtitle typography style."),(0,M.kt)("p",null,"There are 3 types of Views we suggest to follow:"),(0,M.kt)("ol",null,(0,M.kt)("li",{parentName:"ol"},(0,M.kt)("p",{parentName:"li"},"Monoview"),(0,M.kt)("p",{parentName:"li"},"This type of View contains one space for content. It pairs well with a View Switcher. It's the default View type.")),(0,M.kt)("li",{parentName:"ol"},(0,M.kt)("p",{parentName:"li"},"Dualview"),(0,M.kt)("p",{parentName:"li"},"This type of View is usually used when there's a details portion and a main portion in a View. Both sides should be equally important to the View.")),(0,M.kt)("li",{parentName:"ol"},(0,M.kt)("p",{parentName:"li"},"View + Auxiliary Sidebar"),(0,M.kt)("p",{parentName:"li"},"This is a special type of View where there's an Auxiliary Sidebar with transient information that isn't details of the main portion of the View. The Auxiliary Sidebar should be toggle-able, and show itself separated with a separator from the rest of the View. The Auxiliary Sidebar should not exceed 200 units in width."))))}s.isMDXComponent=!0},5386:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGYAAAFuCAMAAAD0/O4LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABIFBMVEUAAAD////////////////////////////////////////////////+/v74+Pj09PXy8vPw8PLx8fP4+Pn9/f79/f329vf5+fn19ff39/jy8vTZ2dnu8PLk8fPe8fPb8fPY8fPZ8fPl8PLt8PLw7vLx5PPx3vPx2/Px2PPx2fPw5fLw7fLu8PDl8ebf8eDc8d3Z8dra8dvm8Ojt8O/h8fPx4fPi8ePl8fPx5fPm8eja8dzm8Ofk8PLw5PLk8Obe8PLw3vLe8ODv8PDh8PLw4fLh8OPb8PLw2/Lb8N3z8/X4+Pr39/ny8vKwsLB8fHxUVFQ6OjotLS17e3vl5eWIiIiJiYlHR0fY2NjX19eWlpbKyspvb29hYWGjo6O9vb3Ly8u+/cmZAAAADHRSTlMAEH+/3+9vIJ9woIAhI4uaAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+YFHhMYDg8sVZQAAAzISURBVHja7d1tWxNnHsbhUURKHWUD0oddxZUoAlEE0meft+22ViCJSBQL9ft/iw3V7QFkiJmZ+87C7Pl72Rc9utf8j5NMytoked+582MXUkkK1PjYxYnkcBNjRpEUuk8OQXNx3B6SInykmfyvMueNISlO5z98lrGEpFj9+XlmwhuTpHjvTQffz3xqB0nxGut9mLGCpJidSyaNIClmlxK/MSMp8luTL4AlRe1CYgNJccOMJMxIwowkYUYSZiRhRpIwI+lMMXP5ytTfagrT9NTM1Y89CIMbvLqDZzMzO2W5wH028DEY3OBVHjyTmc+njRYe/JmTn4LBDV7pwbOYuWKxKF056SEY3ODVHjyDmc/NFakTtDe4was9eAYzsz5PRvtUmfn2anCDV3vwLGa+MFa0prIegcENXu3BM5iZNVXELmf8bLWKwSs9eBYzM5aK2Jf9T8DgBq/24FnM+H2CEX+mNLjBK//W1MeMr8di9vf+J2Bwg1d78CxmDBW1/idgE4NXe3DMuHqDCzOuXgbHjFy9wYUZV29wg2PG1cvgmJGrN7gw4+plcMzI1RscMx6Cqze4MOPqZXDMyNUb3OCYcfUGF2ZcvQyOGbl6gwszrl4Gx4yHYHCDY0au3uDCjKuXwTEjV29wzAzHzD9CZP/hr97gBseMh+DqDW5wzLh6gxscMx6CwQ2OGQ/B1Rvc4Jhx9QY3OGY8BFdvcMxgxtUb3OCYcfUGNzhmPARXb3CDY8bVG9zgmHH1Bjc4ZjwEV29wg2PG1Rvc4JiRqzc4ZjwEV29wg2PG1Rvc4NVkRiO+ehkcM3L1BhdmXL0MjhkPweAGx4xcvcGFGVcvg2NGrt7gmMGMqze4MOPqZXDMyNUbXJhx9QY3OGZcvQyOGbl6gwszrl4Gx4xcvcEx4yG4eoMLM65eBseMXL3BDV6cmWvX5278Ux/r5tx8PczV37q9cGfxtNT3T3cq/qmWFpYb4Zi5e2/l/mo1O/o/tPjfZ21lvRmTmfocQYbuq3r5q28sLJ6mTiczB33dCMNMc2W1uoVi5qBvmtGY+fYmPPJ8pJkve/XfLS1iZsiPNMshmPl+bRUzw/XDg0jMXCdHzq6Xu/rbi4uYGbrb5Zm5t7qKmaG7F4WZb7GRu/kyV//dImbytFyWme9XMZOnBxGYqXtjKvDeVC9+9Y0lzOR7b2qUY6a5hpl8703N8Mx8BY0CzRW/+q8XMZOvhXLMfLOKmXytBGemjoxCXSt69Y1FzOTtVhlmmquYydvd0MzME6NQD4te/TJmcveoDDPrmMnd49DM+I2ZcG9NQ139AmaCvTUNNfgKZoK9NRVmxhfAxbpR9OqXMJO7O2WYWcNM7u6HZgYYBSt69YuYCfAPmGPwVcyU/VtiBjOYwQxmMIMZzGBGmMEMZjCDGcxgBjOYwQxmMIMZzGAGM5jBDGYwgxlhBjOYwQxmMIMZzGAGM5jBjDCDGcxgBjOYwQxmMIMZzGAGM5jBDGYwgxnMYAYzmMEMZjCDGcxgBjOYwQxmMIMZYQYzmMEMZjCDGcxgBjOYwYwwgxnMYAYzmMEMZjCDGcxgBjOYwQxmMIMZzGAGM8IMZjCDGcxgBjOYwQxmMIMZYQYzmMEMZjCDGcxgBjOYwQxmMIMZzGAGM5jBDGYwgxnMYAYzmMEMZjCDGcxgBjPCDGYwgxnMYAYzmMEMZjCDGWEGM5jBDGYwgxnMYAYzmMEMZjCDGcxgBjOYwQxmhBnMYAYzmMEMZjCDGcxgBjPCDGYwgxnMYAYzmMEMZjCDGcxgBjOYwQxmMIMZzGAGM5jBDGYwgxnMYAYzmMEMZoQZzGAGM5jBDGYwgxnMYAYzwgxmMIMZzGAGM5jBDGYwgxnMYAYzmMEMZjCDGcwIM5jBDGYwgxnMYAYzmMEMZoQZzGAGM5jBDGYwgxnMYAYzmMEMZjCDGcxgBjOYwQxmMIMZzGAGM5jBDGYwgxnMCDOYwQxmMIMZzGAGM5jBDGaEGcxgBjOYwQxmMIMZzGAGM5jBDGYwgxnMYAYzmBFmMIMZzGAGM5jBDGYwgxnMCDOYwQxmMIMZzGAGM5jBDGYwgxnMYAYzmMEMZjCDGcxgBjOYwQxmMIMZzGAGM5gRZjCDGcxgBjOYwQxmMIMZzAgzmMEMZjCDGcxgBjOYwQxmMIMZzGAGM5jBDGYwI8xgBjOYwQxmMIMZzGAGM5gRZjCDGcxgBjOYwQxmMIMZzGAGM5jBDGYwgxnMYAYzmMEMZjCDGcxgBjOYwQxmMCPMYAYzmMEMZjCDGcxgBjOYEWYwgxnMYAYzmMEMZjCDGcxgBjOYwQxmMIMZzGBGmMEMZjCDGcxgBjOYwQxmMCPMYAYzmMEMZjCDGcxgBjOYwQxmMIMZzGAGM5jBDGYwgxnMYAYzmMEMZjCDGcxgRpjBDGYwgxnMYAYzmMEMZjAjzGAGM5jBDGYwgxnMYAYzmMEMZjCDGcxgBjOYwYwwgxnMYAYzmMEMZjCDGcxgRpjBDGYwgxnMYAYzmMEMZjBz0A1gFOpm0au/g5ncLZVh5j5mcvdDaGbmiFGoJ0WvfgEzuXtahpkVzOTuWWhmHhKjUPNFr/4RZnK3XIaZx5jJ3YPQzFwjRqHqRa/+FmZy1yjDzL8wk7tmaGa8NRXqx8JXfxrfmk45Mz/VyjBT/bem4Mz8XAvOTP0mNPJ/AVwvfvWNJczk+wK4UY6Z5hpmcrXWDM9MbZ4aQb6ZGfbqa8uYCfLNzNCDr2MmyDczpZjxLXDuHpa6+tP3LfCpZuZRrSwzVf8WODAzj2tRmKnNe2/K9cY0X/Lqa8tLmBn2jenkzzI5Bl9fw8ywb0wPapGYqdV/hMfwvzFTL331tcZPmBnuN2YatRDM1Jo/Y2a435hp1qIx04Nm/omPNB/v308eXgtx9T1olp8uYWZgvzx9dKtWC8NMD5r1Z2uYGdivzx7fzTt4PmYUoDxXL4NXYXDMuHqDCzOuXgbHjFy9wYUZV29wg2PG1cvgmJGrN7gw4+plcMzI1RscM++bNlTEpvufgMENXu3Bs5iZslTEnvc/AYMbvNqDZzHzpaUiNtP/BAxu8GoPnsXMZUtF7Gr/EzC4was9eBYzPlNG7LOsR2Bwg1d78CxmZn1FFqvpTOoNbvBqD57FTPqbtSL1W/YzMLjBqz14FjPpC3NF6cUJz8DgBq/44Emm9j5VRvg8eZL0Bjd41QfPZCad/cJogXt+NR2QwQ1e5cGTkx7DzHPgB2P++YvL6UcyuMGrO3iSSlLUMCMJM5IwI0mYkYQZSZiRJMxIwowkzEgSZiRhRpIwIwkzkjAjSZiRhBlJmJEkzEjCjCTMmEASZiRhRpIwIwkzkjAjSZiRhJmQbWxutdqdTrv1cnPDc7S4wTETvO1Xvf3/6uW2m7S4wTETlvmdzrFe+flqcYNjJqTz3U5fXT9eLW5wzATrdcYj6D2EN47T4gbHTDzo/XS1uMExE/Cl9YRH0HsIvi2wuMExE6Kdzom9cqEWNzhmAnye7AzIh3iLGxwz5Xs56Bn44Wpxg2Om/GvroEfQafuuIOri7d3ewG+7Fh/Zib/qfXp5/fuZH/ysMbN5hJW9N9v7R/7CpiuNufhmuvFmI91uW3xEg++m6ZseNHtnffCzxszhD5TtP/rc2XKlERfvpmnr4F927Fh8RCe+fbD1uyNHvoWZ+LUOf5ZJ3747xkzLlUZcvLu72zm4+l2Lj+jEu932weeXP8764GeNmcOf11s7vSdwlJm2K425+IePNHsWH9ng3a39o79H08ZM/I7d/HFmOq408uLd7XTf4qMbfC89/ns0mMFM1a++p4zFRzl4e+/lsckxM/KP8F6aRrt4q08Zi0ccvN09eF36/ehfw0z8WoOZ8YVk1MVbG8eVsXjMwd9/D7Z7hBlfAY+grcHM+NerMRc/+EG63Wvf4iM68Xdp+vZ1mu77F9qjbXMwM35ZLObi3YyHYPGYJ97e3EjTjd2OX88bbRvtgcxsuNLIix/P4pEH73YrMPiZ+79O7gy6eZ/gLW5wzJTPH0tgcYNj5n9ovT+VwOIGx0yQV1d/ZKTFDY6Z2J8p/QHYFjc4ZiJ3wn9d4rXztLjBMRMTez9ZLW5wzAR9efWfWrW4wTETXfvDv5Ld3vGD1eIGx0wE7je3Wu3e/q2tTT9XLW5wzEj6Pw4zkjAjCTOShBlJmJGEGUnCjCTMSMKMJGFGEmYkCTOSMCMJM5KEGUmYkYQZScKMJMxIwowJJGFG0tlm5oINJMVsPBkzgqSYjSWXjCApZpPJOSNIitlE4q1JUsw+SZJkYtwOkmI13vswkySThpAUq8nkz3wLLClSl5IPTXpvkhTjjWky+auJT+0hKXRjE8nhJi6O+UgjKVgXxi6d+8DLfwCJ8hR12BKTqgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNS0zMFQxOToyMzozMSswMDowMM7lnEcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDUtMzBUMTk6MjM6MzErMDA6MDC/uCT7AAAAAElFTkSuQmCC"}}]);