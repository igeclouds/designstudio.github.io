"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4732],{5242:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>g});var t=r(3929);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){p(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,p=function(e,n){if(null==e)return{};var r,t,p={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(p[r]=e[r]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(r),g=p,f=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function g(e,n){var r=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2851:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var t=r(6346),p=r(8155),a=(r(3929),r(5242)),i=["components"],o={title:".npmrc"},s=void 0,l={unversionedId:"pages/configs/npmrc",id:"pages/configs/npmrc",title:".npmrc",description:"\u8fd9\u662f rush init \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 .npmrc \u6587\u4ef6\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/npmrc.md",sourceDirName:"pages/configs",slug:"/pages/configs/npmrc",permalink:"/zh-cn/pages/configs/npmrc",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/npmrc.md",tags:[],version:"current",frontMatter:{title:".npmrc"},sidebar:"docsSidebar",previous:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/zh-cn/pages/configs/environment_vars"},next:{title:".npmrc-publish",permalink:"/zh-cn/pages/configs/npmrc-publish"}},c={},m=[{value:".npmrc \u6587\u4ef6\u4f18\u5148",id:"npmrc-\u6587\u4ef6\u4f18\u5148",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:m};function g(e){var n=e.components,r=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u662f ",(0,a.kt)("a",{parentName:"p",href:"../../commands/rush_init"},"rush init")," \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"p"},".npmrc")," \u6587\u4ef6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"common/config/rush/.npmrc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Rush \u4f7f\u7528\u8be5\u6587\u4ef6\u6765\u914d\u7f6e\u5b89\u88c5\u9636\u6bb5\u7684 NPM \u6e90\uff0c\u5b83\u53ef\u4ee5\u7528 PNPM, NPM \u6216\u8005 Yarn. \u5b83\u88ab\u8bf8\u5982 "rush install",\n# "rush update", "install-run.js" \u811a\u672c\u7b49\u4f7f\u7528\u3002\n#\n# \u6ce8\u610f\uff1a "rush publish" \u547d\u4ee4\u4f7f\u7528 .npmrc-publish \u6587\u4ef6\u3002\n#\n# \u5728\u8c03\u7528\u5305\u7ba1\u7406\u5668\u4e4b\u524d\uff0cRush \u4f1a\u62f7\u8d1d\u8be5\u6587\u4ef6\u5230\u6267\u884c\u5b89\u88c5\u547d\u4ee4\u7684\u76ee\u5f55\u4e2d\u3002\u62f7\u8d1d\u7684\u6587\u4ef6\u4f1a\u5ffd\u7565\u6ca1\u6709\u5728\u8be5\u4f1a\u8bdd\u4e2d\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\uff1b\n# \u8fd9\u907f\u514d\u4e86\u4e00\u4e9b\u56e0\u4e3a\u7f3a\u5c11\u53d8\u91cf\u800c\u5bfc\u81f4\u7684\u95ee\u9898\u3002\n#\n# * * * \u5b89\u5168\u8b66\u544a * * *\n#\n# \u4e0d\u5efa\u8bae\u5728\u673a\u5668\u4e0a\u5b58\u50a8\u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\uff0c\u56e0\u4e3a\u5176\u4ed6\u65e0\u5173\u8fdb\u7a0b\u53ef\u80fd\u4f1a\u8bfb\u53d6\u6587\u4ef6\u3002\u540c\u6837\uff0c\u8be5\u6587\u4ef6\u4e5f\u53ef\u80fd\u6c38\u4e45\u5b58\u50a8\uff0c\u4f8b\u5982\u5982\u679c\u673a\u5668\u65ad\u7535\u3002\n# \u66f4\u5b89\u5168\u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6765\u4f20\u9012\u53e3\u4ee4\uff0c\u53ef\u4ee5\u901a\u8fc7 ${} \u6269\u5c55\u5f15\u7528\u5230 .npmrc \u4e2d\u3002\u4f8b\u5982\uff1a\n#\n#   //registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}\n#\nregistry=https://registry.npmjs.org/\nalways-auth=false\n')),(0,a.kt)("h2",{id:"npmrc-\u6587\u4ef6\u4f18\u5148"},".npmrc \u6587\u4ef6\u4f18\u5148"),(0,a.kt)("p",null,"\u666e\u901a Rush \u64cd\u4f5c\u6267\u884c\u5982\u4e0b\u67e5\u627e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u652f\u6301\u4e0d\u89c4\u8303\u7684\u60c5\u51b5\uff0cNPM \u914d\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u4f18\u5148\u4e8e\u4efb\u4f55 ",(0,a.kt)("strong",{parentName:"li"},".npmrc")," \u914d\u7f6e\u3002\u73af\u5883\u53d8\u91cf\u540d\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm_config_")," \u5f00\u5934\uff0c\u4f8b\u5982\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"npm_config_registry")," \u53ef\u4ee5\u8986\u76d6 ",(0,a.kt)("strong",{parentName:"li"},".npmrc")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"registry")," \u8bbe\u7f6e\u3002NPM \u7684\u8bbe\u8ba1\u4e2d\u4e5f\u53ef\u4ee5 i \u63a5\u53d7\u4e0d\u89c4\u8303\u7684\u547d\u540d\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm_config_@example:registry"),"."),(0,a.kt)("li",{parentName:"ol"},"\u901a\u5e38\u7684\u914d\u7f6e\u521a\u6765\u81ea\u4e8e Rush \u62f7\u8d1d\u5230\u5de5\u4f5c\u76ee\u5f55\u7684\u4e34\u65f6\u6587\u4ef6 ",(0,a.kt)("strong",{parentName:"li"},".npmrc"),", \u8fd9\u4e2a\u6587\u4ef6\u62f7\u8d1d\u81ea ",(0,a.kt)("strong",{parentName:"li"},"common/config/rush/.npmrc"),", \u4f46\u662f\u7701\u7565\u4e86\u5f88\u591a\u6ca1\u6709\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\uff08\u89e3\u91ca\u5982\u4e0a\uff09\u3002\u5bf9\u4e8e\u66f4\u591a\u64cd\u4f5c\u3002\u5de5\u4f5c\u76ee\u5f55\u662f ",(0,a.kt)("strong",{parentName:"li"},"common/temp"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5305\u7ba1\u7406\u5668\u6ca1\u6709\u4ece\u65b9\u6cd5 1 \u6216\u65b9\u6cd5 2 \u4e2d\u627e\u5230\u914d\u7f6e\u9879\uff0c\u5c06\u4f7f\u7528\u7528\u6237\u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"li"},"\uff5e/.npmrc"),". \u7528\u6237\u901a\u5e38\u5b58\u50a8\u81ea\u5df1\u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u89c4\u5219\u540c\u6837\u9002\u7528\u4e8e\u8bf8\u5982 ",(0,a.kt)("strong",{parentName:"p"},"install-run.js")," \u7b49\u8f85\u52a9\u811a\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rush publish")," \u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c ",(0,a.kt)("strong",{parentName:"p"},".npmrc-publish"),", \u3002\u8be6\u7ec6\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"../../configs/npmrc-publish"},"\u6b64\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u5f53\u5305\u7ba1\u7406\u5668\u76f4\u63a5\u88ab\u8c03\u7528\u65f6\uff08\u800c\u4e0d\u662f\u901a\u8fc7 Rush\uff09\uff0c\u90a3\u4e48\u4e0a\u8ff0\u89c4\u5219\u4e0d\u9002\u7528\u3002\u4f8b\u5982\uff0c\u4ece shell \u4e2d\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm publish"),", \u4e4b\u540e\u5c06\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/using-npm/config#npmrc-files"},"\u5305\u7ba1\u7406\u5668\u7684\u901a\u5e38\u4f18\u5148\u7ea7"),"\u3002\u901a\u5e38\u4e0d\u9f13\u52b1\u4e0a\u8ff0\u884c\u4e3a\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u989d\u5916\u7684 ",(0,a.kt)("strong",{parentName:"p"},".npmrc")," \u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../maintainer/npm_registry_auth"},"NPM \u6e90\u8ba4\u8bc1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../configs/npmrc-publish"},".npmrc-publish")," \u914d\u7f6e\u6587\u4ef6")))}g.isMDXComponent=!0}}]);