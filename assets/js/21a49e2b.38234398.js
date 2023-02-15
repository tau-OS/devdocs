"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[278],{3905:(t,e,i)=>{i.d(e,{Zo:()=>p,kt:()=>f});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(i),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return i?n.createElement(m,r(r({ref:e},p),{},{components:i})):n.createElement(m,r({ref:e},p))}));function f(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=i.length,r=new Array(o);r[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},1608:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const o={},r="Notifications",l={unversionedId:"notifications",id:"notifications",title:"Notifications",description:"Notifications are a way to update someone about the state of your app. For example, they can inform the user that a long running background process has been completed or a new message has arrived.",source:"@site/docs/notifications.md",sourceDirName:".",slug:"/notifications",permalink:"/docs/notifications",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/notifications.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Sending Notifications",id:"sending-notifications",level:2},{value:"Buttons and Actions",id:"buttons-and-actions",level:2},{value:"Notification Priority",id:"notification-priority",level:2},{value:"Stale Notifications",id:"stale-notifications",level:2}],p={toc:c};function d(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notifications"},"Notifications"),(0,a.kt)("p",null,"Notifications are a way to update someone about the state of your app. For example, they can inform the user that a long running background process has been completed or a new message has arrived."),(0,a.kt)("p",null,"Notifications should not be intrusive, or distracting."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember that users can disable notifications for specific applications, or globally. You should not rely exclusively on notifications.")),(0,a.kt)("p",null,"To add the ability to disable notifications, as well as insure delivery, add the following line to your desktop file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="my-app.desktop"',title:'"my-app.desktop"'},"X-GNOME-UsesNotifications=true\n")),(0,a.kt)("p",null,"When using notifications, it's important that your desktop file has the same name as your application's ID. This is because the desktop file provide notification persistence, allowing the desktop to associate the notification to the application even if the application is not running."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you don't have a desktop file whose name matches the application id, your notification might not be displayed.")),(0,a.kt)("h2",{id:"sending-notifications"},"Sending Notifications"),(0,a.kt)("p",null,"To send a notification, first create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"GNotification")," object, and add your notification data to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vala",metastring:'title="application.vala"',title:'"application.vala"'},'var notification = new Notification ("Hello World");\nnotification.set_body ("This is my first notification!");\n\n// Optional: Add an icon. By default, your app icon will be used\nvar file = new File.for_path ("an-image.png");\nvar icon = new FileIcon (file);\nnotification.set_icon (icon);\n')),(0,a.kt)("p",null,"To show your notification, just use the ",(0,a.kt)("inlineCode",{parentName:"p"},"send_notification")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vala",metastring:'title="application.vala"',title:'"application.vala"'},'application.send_notification ("my-app", notification);\n')),(0,a.kt)("p",null,"You need to provide an id for your notification here. This can be used if you want to make updates to an existing notification: simply send a notification with the same id."),(0,a.kt)("p",null,"Note that the title should be short; the body can be longer, say a paragraph. The icon may be displayed at a small size (say, 24\xd724), so choose an icon that is remains readable at small size."),(0,a.kt)("h2",{id:"buttons-and-actions"},"Buttons and Actions"),(0,a.kt)("p",null,"You can also add buttons to notifications that will trigger actions defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," namespace. To learn more about creating actions, visit ",(0,a.kt)("a",{parentName:"p",href:"https://developer.gnome.org/documentation/tutorials/actions.html"},"the GNOME documentation"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vala",metastring:'title="application.vala"',title:'"application.vala"'},'notification.add_button ("View More Details", "app.do_a_thing");\n')),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Notifications can't trigger actions defined in other namespaces, like ",(0,a.kt)("inlineCode",{parentName:"p"},"win"),".")),(0,a.kt)("h2",{id:"notification-priority"},"Notification Priority"),(0,a.kt)("p",null,"Notifications also have priority. For example, when a notification is set as ",(0,a.kt)("inlineCode",{parentName:"p"},"URGENT")," it will stay on the screen until either the user interacts with it, or you withdraw it. To make an urgent notification, add the following line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vala",metastring:'title="application.vala"',title:'"application.vala"'},"notification.set_priority (NotificationPriority.URGENT);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"URGENT")," notifications should really only be used on the most extreme cases."),(0,a.kt)("p",null,"There are also other notification priorities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vala",metastring:'title="application.vala"',title:'"application.vala"'},"// Used for notifications that do not require immediate attention - typically used for contextual background information, such as contact birthdays or local weather\nnotification.set_priority (NotificationPriority.LOW);\n\n// The default priority, to be used for the majority of notifications (for example email messages, software updates, completed download/sync operations)\nnotification.set_priority (NotificationPriority.NORMAL);\n\n// Used for events that require more attention, usually because responses are time-sensitive (for example chat and SMS messages or alarms)\nnotification.set_priority (NotificationPriority.HIGH);\n")),(0,a.kt)("h2",{id:"stale-notifications"},"Stale Notifications"),(0,a.kt)("p",null,"Sometimes notifications no longer become relevant. In that scenario, you can explicitly withdraw it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vala",metastring:'title="application.vala"',title:'"application.vala"'},'application.withdraw_notification ("my-app");\n')))}d.isMDXComponent=!0}}]);