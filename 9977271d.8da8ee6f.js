(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||b[h]||i;return n?a.a.createElement(m,r(r({ref:t},s),{},{components:n})):a.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),i=(n(0),n(100)),c={title:"Lock mechanism",sidebar_label:"Lock mechanism",slug:"lock-mechanism"},r={unversionedId:"technical/special-functionality/lock-mechanism",id:"technical/special-functionality/lock-mechanism",isDocsHomePage:!1,title:"Lock mechanism",description:"What is lock mechanism",source:"@site/docs/technical/special-functionality/lock-mechanism.md",slug:"/technical/special-functionality/lock-mechanism",permalink:"/docs/technical/special-functionality/lock-mechanism",version:"current",sidebar_label:"Lock mechanism",sidebar:"someSidebar",previous:{title:"Content re/loading",permalink:"/docs/technical/content-re-loading"},next:{title:"Session",permalink:"/docs/technical/special-functionality/session"}},l=[{value:"What is lock mechanism",id:"what-is-lock-mechanism",children:[]},{value:"How does it work",id:"how-does-it-work",children:[]},{value:"How to unlock/show records",id:"how-to-unlockshow-records",children:[]},{value:"How to add lock for module",id:"how-to-add-lock-for-module",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-lock-mechanism"},"What is lock mechanism"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Lock mechanism")," can be simply called ",Object(i.b)("inlineCode",{parentName:"p"},"second level authentication"),". The logic behind this relies on special, session based\nmechanisms which allow storing use roles in session and invalidate the session data after given amount of time. More about\nsession mechanisms ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/technical/special-functionality/session"}),"here"),"."),Object(i.b)("h2",{id:"how-does-it-work"},"How does it work"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"lock mechanism")," is flexible and adjustable for all modules, either the existing or new ones. Entries about locked resources\nare stored in the database via the ",Object(i.b)("inlineCode",{parentName:"p"},"LockedResource")," entity. Each such entry consist of type (for example a single file/folder or entity),\nthe target identifier (module or any special string by which it can be identified what kind of data is being locked), and naturally a record\nidentifier which in case of Entity is an id, and in case of file it's a path."),Object(i.b)("h2",{id:"how-to-unlockshow-records"},"How to unlock/show records"),Object(i.b)("p",null,"If records are locked then initially upon logging into the system, this will be hidden from the view. It's possible to show the hidden\nentries by clicking the ",Object(i.b)("inlineCode",{parentName:"p"},"locked/unlocked")," button in the user menu - this will trigger validation which requires second password (lockPassword)."),Object(i.b)("p",null,"Upon unlocking the whole system the locked resources will be shown and can be removed from the lock table to be visible after\npassing the login form without the need to login with second security layer."),Object(i.b)("h2",{id:"how-to-add-lock-for-module"},"How to add lock for module"),Object(i.b)("p",null,"First of all special action must be added in the template, either using ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/technical/actions/binding-in-templates"}),"actions component"),", or custom\ncode like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<span class="fas fa-lock {{ getClassForLockedResource(lock_record, lock_type, lock_target) }} align-self-center action-lock-record"\n      data-lock-resource-record ="{{ lock_record }}"\n      data-lock-resource-type   ="{{ lock_type }}"\n      data-lock-resource-target ="{{ lock_target }}"\n></span>\n')),Object(i.b)("p",null,"In this case all the ",Object(i.b)("inlineCode",{parentName:"p"},"data attributes")," must be provided alongside with the class ",Object(i.b)("inlineCode",{parentName:"p"},"action-lock-record"),"."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Upon extending the logic to other types it's required to provide the handling in ",Object(i.b)("inlineCode",{parentName:"p"},"LockedResourceController::isResourceLocked"),"."))),Object(i.b)("p",null,"The last thing that remains is adding check in the template:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"{% if isAllowedToSeeResource(lock_record, lock_type, lock_target) %}\n...\n{% endif %}\n")))}d.isMDXComponent=!0}}]);