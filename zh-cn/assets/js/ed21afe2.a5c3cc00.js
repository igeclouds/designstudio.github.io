"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6108],{5242:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>h});var t=r(3929);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,f=m["".concat(i,".").concat(h)]||m[h]||l[h]||o;return r?t.createElement(f,c(c({ref:n},p),{},{components:r})):t.createElement(f,c({ref:n},p))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=r[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7668:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var t=r(394),a=r(1614),o=(r(3929),r(5242)),c=["components"],s={title:"rush change"},i=void 0,u={unversionedId:"pages/commands/rush_change",id:"pages/commands/rush_change",title:"rush change",description:"\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rush_change.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_change",permalink:"/zh-cn/pages/commands/rush_change",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_change.md",tags:[],version:"current",frontMatter:{title:"rush change"},sidebar:"docsSidebar",previous:{title:"rush build",permalink:"/zh-cn/pages/commands/rush_build"},next:{title:"rush check",permalink:"/zh-cn/pages/commands/rush_check"}},p={},l=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:l};function h(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u7528\u6cd5: rush change [-h] [-v] [--no-fetch] [-b BRANCH] [--overwrite]\n                   [--email EMAIL] [--bulk] [--message MESSAGE]\n                   [--bump-type {major,minor,patch,none}]\n\n\u901a\u8fc7\u8be2\u95ee\u4e00\u7cfb\u5217\u7684\u95ee\u9898\u4e4b\u540e\u5728\u516c\u516c\u6587\u4ef6\u89c1\u4e2d\u751f\u6210 <branchname>-<timestamp>.json \u6587\u4ef6\u3002\u5f53\u53d8\u66f4\u7248\n\u672c\u53f7\u65f6\u901a\u8fc7 `publish` \u547d\u4ee4\u6765\u6d88\u8d39\u8fd9\u4e9b\u6587\u4ef6\u3002\u6ce8\u610f\u8fd9\u4e9b\u53d8\u66f4\u65e5\u5fd7\u6700\u7ec8\u4f1a\u88ab\u653e\u5230\u6bcf\u4e2a\u9879\u76ee\u7684 changelog.md\n\u6587\u4ef6\u4e2d\u3002\u53d8\u66f4\u7684\u7c7b\u578b\u6709\uff1aMAJOR - \u5b58\u5728\u7834\u574f\u6027\u53d8\u52a8\u5e76\u4e14\u5411\u540e\u4e0d\u517c\u5bb9\uff0c\u4f8b\u5982\u91cd\u547d\u540d\u4e00\u4e2a\u516c\u5171\u7c7b\uff0c\u5728\u516c\u5171 API \u4e2d\n\u6dfb\u52a0\u6216\u5220\u9664\u4e00\u4e2a\u5fc5\u9009\u53c2\u6570\uff0c\u6216\u8005\u91cd\u547d\u540d\u4e00\u4e2a\u5bfc\u51fa\u7684\u53d8\u91cf\u6216\u51fd\u6570\uff1bMINOR - \u5b58\u5728\u5411\u540e\u517c\u5bb9\uff08\u4f46\u4e0d\u5411\u524d\u517c\u5bb9\uff09\u7684\u53d8\n\u5316\uff0c\u4f8b\u5982\u589e\u52a0\u4e00\u4e2a\u516c\u5171 API \u6216\u8005\u5728\u516c\u5171 API \u4e2d\u589e\u52a0\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\uff1bPATCH - \u5b58\u5728\u5411\u524d\u517c\u5bb9\u3001\u5411\u540e\u517c\u5bb9\u7684\u6539\n\u52a8\uff0c\u4f8b\u5982\u4fee\u6539\u4e00\u4e2a\u79c1\u6709 API \u6216\u8005\u4fee\u590d\u4fee\u590d\u67d0\u4e2a API \u7684\u5de5\u4f5c\u903b\u8f91\u3002 HOTREX\uff08\u5b9e\u9a8c\u6027\u7684\uff09 - \u5728\u67d0\u4e2a\u5b58\u5728\u7684\u7248\n\u672c\u4e0a\u8fdb\u884c\u70ed\u4fee\u590d\u3002\u5f53\u589e\u52a0\u4e00\u4e2a\u70ed\u4fee\u590d\u65f6\uff0c\u5176\u4ed6\u7684\u53d8\u5316\u4e0d\u4f1a\u589e\u52a0\u7248\u672c\u53f7\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728 rush.json \u4e2d\u8bbe\u5b9a\u53c2\u6570\n\'hotfixChangeEnabled\' \u6765\u5f00\u542f\u3002\n\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help            \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\n  -v, --verify          \u9a8c\u8bc1\u662f\u5426\u751f\u6210\u4e86\u6709\u6548\u7684\u53d8\u66f4\u6587\u4ef6\n  --no-fetch            \u5728\u6267\u884c "git diff" \u68c0\u6d4b\u4e4b\u524d\uff0c\u8df3\u8fc7\u83b7\u53d6\u57fa\u51c6\u5206\u652f\n  -b BRANCH, --target-branch BRANCH\n                        \u4e00\u65e6\u6307\u5b9a\u6539\u53c2\u6570\uff0c\u4f1a\u6bd4\u8f83\u5f53\u524d\u5206\u652f\u548c\u76ee\u6807\u5206\u652f\u7684\u5dee\u5f02\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u8be5\n                        \u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u6bd4\u8f83 "main" \u5206\u652f\n  --overwrite           \u5982\u679c\u67d0\u4e2a\u53d8\u66f4\u65e5\u5fd7\u5b58\u5728\uff0c\u5c06\u5728\u6ca1\u6709\u63d0\u793a\u7684\u60c5\u51b5\u4e0b\u5bf9\u8be5\u6587\u4ef6\u8fdb\u884c\u8986\u76d6\uff08\u5f53\n                        --bulk \u53c2\u6570\u5b58\u5728\u65f6\u4f1a\u5bfc\u81f4\u5931\u8d25\uff09\n  --email EMAIL         \u90ae\u7bb1\u5730\u5740\u7528\u4e8e\u53d8\u66f4\u6587\u4ef6\u4e2d\u548c\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u8be5\u53c2\u6570\uff0c\u90a3\u4e48\u4f1a\u5728\u4ea4\u4e92\u6a21\u5f0f\u4e0b\n                        \u68c0\u6d4b\u90ae\u7bb1\u3002\n  --bulk                \u4e00\u65e6\u6267\u884c\u6539\u53c2\u6570\uff0c\u90a3\u4e48\u4f1a\u5c06\u76f8\u540c\u7684\u53d8\u66f4\u4fe1\u606f\u548c\u53d8\u66f4\u7c7b\u578b\u5e94\u7528\u5230\u6240\u6709\u9879\u76ee\u3002\n                        \u4e00\u65e6\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u540c\u65f6\u9700\u8981\u6307\u5b9a --message \u548c --bump-type \u53c2\u6570\u3002\n  --message MESSAGE     \u5f53\u6307\u5b9a --bulk \u53c2\u6570\u65f6\uff0c\u8be5\u53c2\u6570\u4f1a\u9002\u7528\u4e8e\u6240\u6709\u53d8\u5316\u7684\u9879\u76ee\n  --bump-type {major,minor,patch,none}\n                        \u5f53\u6307\u5b9a --bulk \u53c2\u6570\u65f6\uff0c\u53d8\u66f4\u7c7b\u578b\u4f1a\u9002\u7528\u4e8e\u6240\u6709\u53d8\u5316\u7684\u9879\u76ee\n')),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../best_practices/change_logs"},"\u7f16\u5199\u53d8\u66f4\u65e5\u5fd7")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../commands/rush_version"},"rush version"))))}h.isMDXComponent=!0}}]);