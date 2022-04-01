"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8557],{5242:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(3929);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||c;return t?n.createElement(h,i(i({ref:r},l),{},{components:t})):n.createElement(h,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6737:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=t(6346),a=t(8155),c=(t(3929),t(5242)),i=["components"],o={title:"rush write-build-cache (experimental)"},s=void 0,u={unversionedId:"pages/commands/rush_write-build-cache",id:"pages/commands/rush_write-build-cache",title:"rush write-build-cache (experimental)",description:"\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rush_write-build-cache.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_write-build-cache",permalink:"/zh-cn/pages/commands/rush_write-build-cache",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_write-build-cache.md",tags:[],version:"current",frontMatter:{title:"rush write-build-cache (experimental)"},sidebar:"docsSidebar",previous:{title:"rush version",permalink:"/zh-cn/pages/commands/rush_version"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/zh-cn/pages/configs/environment_vars"}},l={},p=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u7528\u6cd5\uff1a rush write-build-cache [-h] -c COMMAND [-v]\n\n\uff08\u5b9e\u9a8c\u6027\uff09\u5982\u679c\u914d\u7f6e\u4e86\u6784\u5efa\u7f13\u5b58\uff0c\u90a3\u4e48\u5728\u67d0\u4e2a\u9879\u76ee\u4e0b\u6267\u884c\u8be5\u547d\u4ee4\uff0c\u4f1a\u5c06\u9879\u76ee\n\u7684\u5f53\u524d\u72b6\u6001\u5199\u5165\u5230\u7f13\u5b58\u4e2d\u3002\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help            \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u63a8\u51fa\u3002\n  -c COMMAND, --command COMMAND\n                        \uff08\u5fc5\u987b\uff09\u5728\u5f53\u524d\u9879\u76ee\u4e0b\u6267\u884c\u7684\u547d\u4ee4\uff0c\u4f1a\u4ea7\u751f\u5f53\u524d\u72b6\u6001\u4fe1\u606f\u3002\n  -v, --verbose         \u663e\u793a\u5197\u957f\u7684\u65e5\u5fd7\u4fe1\u606f\u3002\n")),(0,c.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"../../maintainer/build_cache"},"\u542f\u7528\u6784\u5efa\u7f13\u5b58"))))}d.isMDXComponent=!0}}]);