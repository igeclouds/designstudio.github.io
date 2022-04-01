"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8791],{5242:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(3929);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||s;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1353:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=t(6346),o=t(8155),s=(t(3929),t(5242)),a=["components"],i={title:"rush link"},l=void 0,u={unversionedId:"pages/commands/rush_link",id:"pages/commands/rush_link",title:"rush link",description:"See also",source:"@site/docs/pages/commands/rush_link.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_link",permalink:"/pages/commands/rush_link",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_link.md",tags:[],version:"current",frontMatter:{title:"rush link"},sidebar:"docsSidebar",previous:{title:"rush install",permalink:"/pages/commands/rush_install"},next:{title:"rush list",permalink:"/pages/commands/rush_list"}},c={},p=[{value:"See also",id:"see-also",level:2}],m={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'usage: rush link [-h] [-f]\n\nCreate node_modules symlinks for all projects. This operation is normally\nperformed automatically as part of "rush install" or "rush update". You\nshould only need to use "rush link" if you performed "rush unlink" for some\nreason, or if you specified the "--no-link" option for "rush install" or\n"rush update".\n\nOptional arguments:\n  -h, --help   Show this help message and exit.\n  -f, --force  Deletes and recreates all links, even if the filesystem state\n               seems to indicate that this is unnecessary.\n')),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../commands/rush_unlink"},"rush unlink"))))}f.isMDXComponent=!0}}]);