"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[3423],{5242:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var r=t(3929);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),f=p(t),m=o,y=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return t?r.createElement(y,i(i({ref:e},u),{},{components:t})):r.createElement(y,i({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5581:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=t(394),o=t(1614),a=(t(3929),t(5242)),i=["components"],s={title:"artifactory.json\uff08\u5b9e\u9a8c\u6027\uff09"},c=void 0,p={unversionedId:"pages/configs/artifactory_json",id:"pages/configs/artifactory_json",title:"artifactory.json\uff08\u5b9e\u9a8c\u6027\uff09",description:"\u8fd9\u662f rush init \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 artifactory.json \u6587\u4ef6\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/artifactory_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/artifactory_json",permalink:"/zh-cn/pages/configs/artifactory_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/artifactory_json.md",tags:[],version:"current",frontMatter:{title:"artifactory.json\uff08\u5b9e\u9a8c\u6027\uff09"},sidebar:"docsSidebar",previous:{title:".npmrc-publish",permalink:"/zh-cn/pages/configs/npmrc-publish"},next:{title:"build-cache.json\uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/zh-cn/pages/configs/build-cache_json"}},u={},l=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],f={toc:l};function m(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u662f ",(0,a.kt)("a",{parentName:"p",href:"../../commands/rush_init"},"rush init")," \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"p"},"artifactory.json")," \u6587\u4ef6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"common/config/rush/artifactory.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * \u8be5\u914d\u7f6e\u9879\u7528\u4e8e\u7ba1\u7406 Rush \u548c JFrog Artifactory \u670d\u52a1\u96c6\u6210\u3002\n * \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 Rush \u5b98\u7f51\uff1a https://rushjs.io\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/artifactory.schema.json",\n\n  "packageRegistry": {\n    /**\n     * (Required) Set this to "true" to enable Rush to manage tokens for an Artifactory NPM registry.\n     * When enabled, "rush install" will automatically detect when the user\'s ~/.npmrc\n     * authentication token is missing or expired.  And "rush setup" will prompt the user to\n     * renew their token.\n     * \uff08\u5fc5\u987b\uff09\u8bbe\u5b9a\u8be5\u503c\u4e3a "true" \u6765\u4f7f\u5f97 Rush \u7ba1\u7406 Artifactory NPM \u7684\u53e3\u4ee4\u3002\u5f53\u5f00\u542f\u540e\uff0c"rush install" \u4f1a\u81ea\u52a8\u68c0\u6d4b\n     * \u7528\u6237\u7684 ~/.npmrc \u8ba4\u8bc1\u4ee4\u724c\u662f\u5426\u7f3a\u5931\u6216\u8fc7\u671f\uff0c\u5e76\u4e14 "rush setup" \u5c06\u4f1a\u63d0\u793a\u7528\u6237\u66f4\u65b0\u4ee4\u724c\u3002\n     *\n     * \u9ed8\u8ba4\u503c\u4e3a false.\n     */\n    "enabled": false,\n\n    /**\n     * \uff08\u5fc5\u987b\uff09\u7ed9 NPM \u6e90\u6307\u5b9a URL, \u5b83\u4e0e .npmrc \u6587\u4ef6\u4e2d\u7684 URL \u76f8\u540c\uff0c\u5e94\u8be5\u50cf\u8fd9\u6837\uff1a\n     *\n     *   https://your-company.jfrog.io/your-project/api/npm/npm-private/\n     */\n    // "registryUrl": "",\n\n    /**\n     * \u4e00\u7cfb\u5217\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\uff0c\u5f53\u53e3\u4ee4\u66f4\u65b0\u540e "rush setup" \u5c06\u5176\u6dfb\u52a0\u5230\u7528\u6237\u7684 ~/.npmrc \u6587\u4ef6\u4e2d\u3002\u4f8b\u5982\uff0c\u8fd9\u53ef\u4ee5\u914d\u7f6e\u516c\u53f8\u6e90\uff0c\u4ee5\u4fbf\n     * NPM \u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u547d\u4ee4\uff08\u4f46\u662f\u5bf9\u4e8e "rush add" \u548c "rush install" \u7b49\u64cd\u4f5c\u6ca1\u6709\u5fc5\u8981\uff0c\u56e0\u4e3a\u5b83\u4eec\u4f1a\u4ece monorepo \u7684\n     * common/config/rush/.npmrc \u83b7\u53d6\uff09\n     *\n     * \u6ce8\u610f\uff1a ~/.npmrc \u8bbe\u5b9a\u5728\u7ed9\u5b9a\u673a\u5668\u4e0a\u662f\u5168\u5c40\u7684\uff0c\u6240\u4ee5\u6dfb\u52a0\u8bbe\u5b9a\u65f6\u8981\u5c0f\u5fc3\uff0c\u9632\u6b62\u4e0e\u5176\u4ed6\u5de5\u4f5c\u533a\u51b2\u7a81\u3002\n     */\n    "userNpmrcLinesToAdd": [\n      // "@example:registry=https://your-company.jfrog.io/your-project/api/npm/npm-private/"\n    ],\n\n    /**\n     * \uff08\u5fc5\u987b\uff09\u6307\u5b9a Artifactory \u63a7\u5236\u9762\u677f\u7684 URL, \u7528\u6237\u5728\u6b64\u5904\u751f\u6210\u4e00\u4e2a API \u5bc6\u94a5\u3002\n     * \u8be5 URL \u5728 "visitWebsite" \u540e\u6253\u5370\u3002\u5176\u793a\u4f8b\u5982\uff1a https://your-company.jfrog.io/\n     * \u6307\u5b9a\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u6765\u8986\u76d6\u8fd9\u4e00\u884c\u3002\n     */\n    // "artifactoryWebsiteUrl": "",\n\n    /**\n     * \u8be5\u914d\u7f6e\u9879\u5141\u8bb8\u81ea\u5b9a\u4e49 "rush setup" \u4ea4\u4e92\uff0c\u4f8b\u5982\u4e3a\u60a8\u7684\u56e2\u961f\u6216\u914d\u7f6e\u63d0\u4f9b\u6d88\u606f\u3002\n     * \u6307\u5b9a\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u6765\u8986\u76d6\u8fd9\u4e00\u884c\u3002\n     */\n    "messageOverrides": {\n      /**\n       * \u8986\u76d6\u901a\u5e38\u6240\u8f93\u51fa\u7684\u6d88\u606f\uff1a\n       * \u201c\u8fd9\u4e2a monorepo \u4f7f\u7528\u6765\u81ea Artifactory \u79c1\u6709 NPM \u6e90\u7684\u5305\u201d\n       */\n      // "introduction": "",\n\n      /**\n       * \u8986\u76d6\u901a\u5e38\u6240\u8f93\u51fa\u7684\u6d88\u606f\uff1a\n       * \u201c\u8bf7\u8054\u7cfb\u7248\u672c\u5e93\u7ef4\u62a4\u8005\uff0c\u4ee5\u83b7\u5f97\u8bbe\u7f6e Artifactory \u7528\u6237\u8d26\u6237\u7684\u5e2e\u52a9\u3002\u201d\n       */\n      // "obtainAnAccount": "",\n\n      /**\n       * \u8986\u76d6\u901a\u5e38\u6240\u8f93\u51fa\u7684\u6d88\u606f\uff1a\n       * \u201c\u8bf7\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u8fd9\u4e2a URL\uff1a\u201d\n       *\n       * \u8fd9\u6761\u4fe1\u606f\u540e\uff0c"artifactoryWebsiteUrl" \u4f1a\u6253\u5370\u3002\n       */\n      // "visitWebsite": "",\n\n      /**\n       * \u8986\u76d6\u901a\u5e38\u6240\u8f93\u51fa\u7684\u6d88\u606f\uff1a\n       * \u201c\u60a8\u7684\u7528\u6237\u540d\u51fa\u73b0\u5728 JFrog \u7f51\u7ad9\u7684\u53f3\u4e0a\u89d2\u201d\n       */\n      // "locateUserName": "",\n\n      /**\n       * \u8986\u76d6\u901a\u5e38\u6240\u8f93\u51fa\u7684\u6d88\u606f\uff1a\n       *\n       * \u201c\u5728 JFrog \u7f51\u7ad9\u4e0a\u70b9\u51fb \u201c\u7f16\u8f91\u8d44\u6599\u201d\u3002 \u5982\u679c\u8fd8\u6ca1\u751f\u6210\u7c73\u8981\u7684\u8bdd\uff0c\n       * \u8bf7\u70b9\u51fb\u201c\u751f\u6210API\u5bc6\u94a5\u201d\u6309\u94ae\u3002\u201d\n       *\n       */\n      // "locateApiKey": ""\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../maintainer/npm_registry_auth"},"NPM \u6e90\u8ba4\u8bc1"))))}m.isMDXComponent=!0}}]);