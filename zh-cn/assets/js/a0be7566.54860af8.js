"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8508],{5242:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(3929);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var r=t(6346),a=t(8155),l=(t(3929),t(5242)),i=["components"],p={title:"\u589e\u91cf\u6784\u5efa"},o=void 0,s={unversionedId:"pages/advanced/incremental_builds",id:"pages/advanced/incremental_builds",title:"\u589e\u91cf\u6784\u5efa",description:"Rush \u7684\u589e\u91cf\u6784\u5efa\u529f\u80fd\u53ef\u4ee5\u901a\u8fc7\u8df3\u8fc7\u67d0\u4e9b\u5df2\u7ecf\u662f\u6700\u65b0\u7684\u5e93\u6765\u52a0\u901f\u6784\u5efa\uff0c\u5728\u672c\u6587\u4e2d\uff0c\u201c\u5df2\u7ecf\u662f\u6700\u65b0\u7684\u201d\u542b\u4e49\u662f\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/advanced/incremental_builds.md",sourceDirName:"pages/advanced",slug:"/pages/advanced/incremental_builds",permalink:"/zh-cn/pages/advanced/incremental_builds",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/advanced/incremental_builds.md",tags:[],version:"current",frontMatter:{title:"\u589e\u91cf\u6784\u5efa"},sidebar:"docsSidebar",previous:{title:"\u4f18\u5148\u7248\u672c",permalink:"/zh-cn/pages/advanced/preferred_versions"},next:{title:"\u4f7f\u7528\u76d1\u542c\u6a21\u5f0f",permalink:"/zh-cn/pages/advanced/watch_mode"}},u={},c=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:2},{value:"\u53ea\u6784\u5efa\u53d1\u751f\u53d8\u5316\u7684\u9879\u76ee\uff08\u4e0d\u5b89\u5168\uff09",id:"\u53ea\u6784\u5efa\u53d1\u751f\u53d8\u5316\u7684\u9879\u76ee\u4e0d\u5b89\u5168",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rush \u7684",(0,l.kt)("strong",{parentName:"p"},"\u589e\u91cf\u6784\u5efa"),"\u529f\u80fd\u53ef\u4ee5\u901a\u8fc7\u8df3\u8fc7\u67d0\u4e9b\u5df2\u7ecf\u662f\u6700\u65b0\u7684\u5e93\u6765\u52a0\u901f\u6784\u5efa\uff0c\u5728\u672c\u6587\u4e2d\uff0c\u201c\u5df2\u7ecf\u662f\u6700\u65b0\u7684\u201d\u542b\u4e49\u662f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9879\u76ee\u5df2\u7ecf\u5728\u672c\u5730\u6784\u5efa\u8fc7\uff0c\u5e76\u4e14"),(0,l.kt)("li",{parentName:"ol"},"\u5176\u6e90\u7801\u548c NPM \u4f9d\u8d56\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u5e76\u4e14"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u8be5\u9879\u76ee\u4f9d\u8d56\u53e6\u4e00\u4e2a Rush \u9879\u76ee\uff0c\u8fd9\u4e9b\u9879\u76ee\u90fd\u662f\u6700\u65b0\u7684\uff0c\u5e76\u4e14"),(0,l.kt)("li",{parentName:"ol"},"\u547d\u4ee4\u884c\u53c2\u6570\u6ca1\u6709\u53d8\u5316\uff08\u4f8b\u5982\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"rush build")," \u540e\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"rush build --production")," \u9700\u8981\u91cd\u65b0\u6784\u5efa\uff09\u3002")),(0,l.kt)("p",null,"\u8be5\u529f\u80fd\u53ef\u4ee5\u548c",(0,l.kt)("a",{parentName:"p",href:"../../developer/selecting_subsets"},"\u9009\u62e9\u9879\u76ee\u53c2\u6570"),"\u7ed3\u5408\u4f7f\u7528\uff0c\u5176\u4f5c\u7528\u662f\u5f00\u53d1\u8005\u663e\u5f0f\u7684\u544a\u8bc9 Rush \u90a3\u4e9b\u9879\u76ee\u9700\u8981\u88ab\u5904\u7406\u3002\u589e\u91cf\u6784\u5efa\u53ef\u4ee5\u91cd\u65b0\u4f7f\u7528\u672c\u5730\u78c1\u76d8\u4e0a\u5df2\u7ecf\u5b58\u5728\u7684\u8f93\u51fa\uff08\u4e0e",(0,l.kt)("a",{parentName:"p",href:"../../maintainer/build_cache"},"\u6784\u5efa\u6362\u7c97"),"\u5f62\u6210\u9c9c\u660e\u7684\u5bf9\u6bd4\uff0c\u6784\u5efa\u7f13\u5b58\u53ef\u4ee5\u4ece\u4e91\u7aef\u83b7\u53d6\u5230\u4e4b\u524d\u7684\u6784\u5efa\u7f13\u5b58\uff0c\u5b83\u4f9d\u7136\u662f\u5b9e\u9a8c\u6027\u7684\u529f\u80fd\uff0c\u4f46\u662f\u5b83\u53ef\u80fd\u6700\u7ec8\u4f1a\u66ff\u6362\u589e\u91cf\u6784\u5efa\u3002)"),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("p",null,"\u53ea\u9700\u8981\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rush build")," \u4e24\u6b21\u5c31\u80fd\u4f7f\u7528\u589e\u91cf\u6784\u5efa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ rush install\n\n# \u53ef\u80fd\u9700\u8981\u4e00\u70b9\u65f6\u95f4\n$ rush build\n\n# \u7b2c\u4e8c\u6b21\u8017\u65f6\u53ea\u9700\u8981\u51e0\u79d2\u949f\n$ rush build\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rush build")," \u662f\u589e\u91cf\u6784\u5efa\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"rush rebuild")," \u4e0d\u662f\u589e\u91cf\u6784\u5efa\uff09\u3002\u5982\u679c\u662f\u4f60\u81ea\u5b9a\u4e49\u7684",(0,l.kt)("a",{parentName:"p",href:"../../maintainer/custom_commands"},"\u5168\u5c40\u6307\u4ee4"),", \u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("a",{parentName:"p",href:"../../configs/command-line_json"},"command-line.json")," \u4e2d\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},'"incremental"')," \u9009\u9879\u6765\u4f7f\u5176\u6210\u4e3a\u589e\u91cf\u6784\u5efa\u3002"),(0,l.kt)("h2",{id:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"),(0,l.kt)("p",null,"\u4f60\u7684\u9879\u76ee\u6784\u5efa\u811a\u672c\uff08\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"rushx build")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run build")," \u8c03\u7528\uff09\u53ef\u80fd\u81ea\u8eab\u5c31\u6709\u589e\u91cf\u4f18\u5316\u3002\u4f8b\u5982\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/heft/overview/"},"Heft")," \u5bf9\u4e8e\u4e0d\u540c\u7684\u4efb\u52a1\u7ef4\u62a4\u4e86\u591a\u7f13\u5b58\u3002\u7136\u800c\uff0c\u751a\u81f3\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"rushx build")," \u5bf9\u4e00\u4e2a\u9879\u76ee\u65e0\u6548\u65f6\uff0c\u4ecd\u7136\u4f1a\u7531\u4e8e\u5f00\u542f\u4e86 Node \u8fdb\u7a0b\u3001\u8c03\u7528 JavaScript \u6587\u4ef6\uff0c\u6bd4\u8f83\u5355\u4e2a\u6587\u4ef6\u7684\u65f6\u95f4\u6233\u800c\u5bfc\u81f4\u7684\u6602\u8d35\u7684\u5f00\u9500\uff0c\u5047\u8bbe\u4e0a\u8ff0\u64cd\u4f5c\u9700\u8981 500ms, \u5982\u679c\u4f60\u7684 monorepo \u5b58\u5728 100 \u4e2a\u9879\u76ee\uff0c\u90a3\u4e48\u5373\u4f7f\u5728\u9879\u76ee\u90fd\u662f\u6700\u65b0\u7684\u60c5\u51b5\u4e0b\uff0c\u4e0a\u8ff0\u5de5\u4f5c\u8981\u82b1\u8d39 100 ","*"," 0.5 == ",(0,l.kt)("strong",{parentName:"p"},"50 seconds"),"."),(0,l.kt)("p",null,"Rush \u901a\u8fc7\u4e00\u6b21\u641c\u7d22\u6765\u5bf9\u4ed3\u5e93\u8fdb\u884c\u5168\u5c40\u5206\u6790\uff0c\u8fdb\u800c\u6d88\u9664\u4e86\u8fd9\u6b21\u64cd\u4f5c\u8017\u65f6 \u2014\u2014 \u8fd9\u79cd\u65b9\u5f0f\u5728\u6240\u6709\u9879\u76ee\u90fd\u662f\u6700\u65b0\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4e0d\u5524\u9192\u6240\u6709\u9879\u76ee\u3002\u4f5c\u4e3a\u4e00\u4e2a\u989d\u5916\u7684\u4f18\u5316\uff0cRush \u7684\u589e\u91cf\u5206\u6790\u4f9d\u8d56\u6587\u4ef6\u54c8\u5e0c\u800c\u4e0d\u662f\u65f6\u95f4\u6233\u3002\u5982\u679c\u4f60\u5207\u6362\u5230\u4e0d\u540c\u7684\u5206\u652f\uff0c\u6216\u8005\u5207\u6765\u5207\u53bb\uff0c\u8bb8\u591a\u6587\u4ef6\u7684\u65f6\u95f4\u6233\u4f1a\u6539\u53d8\uff0c\u4f46\u662f Rush \u7684\u589e\u91cf\u5206\u6790\u4e0d\u4f1a\u53d7\u5230\u5f71\u54cd\uff0c\u56e0\u4e3a\u6e90\u6587\u4ef6\u6ca1\u6709\u53d1\u751f\u6539\u53d8\u3002\u6587\u4ef6\u54c8\u5e0c\u53d7\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/package-deps-hash"},"@rushstack/package-deps-hash")," \u7ba1\u7406\uff0c\u54c8\u5e0c\u503c\u88ab\u5b58\u50a8\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"<your-project>/.rush/temp/package-deps_<task-name>.json")," \u7684\u6587\u4ef6\u4e2d\uff0c\u76d1\u89c6\u8fd9\u4e2a\u6587\u4ef6\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u6280\u672f\u6307\u6807\u3002"),(0,l.kt)("h2",{id:"\u53ea\u6784\u5efa\u53d1\u751f\u53d8\u5316\u7684\u9879\u76ee\u4e0d\u5b89\u5168"},"\u53ea\u6784\u5efa\u53d1\u751f\u53d8\u5316\u7684\u9879\u76ee\uff08\u4e0d\u5b89\u5168\uff09"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684 monorepo \u6709\u4ee5\u4e0b\u9879\u76ee\uff1a"),(0,l.kt)("img",{src:"/images/docs/selection-intro.svg",alt:"a sample monorepo",style:{height:"150px"}}),(0,l.kt)("p",null,"\u4e0a\u8ff0\u56fe\u4f8b\u4e2d\uff0c\u5706\u5708\u8868\u793a\u672c\u5730\u9879\u76ee\uff0c\u6ca1\u6709\u5916\u90e8\u7684 NPM \u4f9d\u8d56\u3002\u7bad\u5934 ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," \u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"C")," \u8868\u660e ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," \u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"p"},"C"),", \u8fd9\u610f\u5473\u7740 ",(0,l.kt)("inlineCode",{parentName:"p"},"C")," \u5fc5\u987b\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," \u6784\u5efa\u524d\u6784\u5efa\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u6784\u5efa\u5b8c\u6240\u6709\u9879\u76ee\u540e\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"B")," \u9879\u76ee\u4e0b\u6539\u53d8\u4e86\u6e90\u6587\u4ef6\u3002\u9879\u76ee ",(0,l.kt)("inlineCode",{parentName:"p"},"C")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," \u4f9d\u8d56\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"B"),", \u56e0\u6b64\u4e5f\u9700\u8981\u6784\u5efa\uff1a"),(0,l.kt)("img",{src:"/images/docs/selection-impact.svg",alt:"rush build --impacted-by B",style:{height:"150px"}}),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u80fd\u4f1a\u8c03\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8be5\u547d\u4ee4\u4f1a\u91cd\u65b0\u6784\u5efa B, C, D\n$ rush build\n")),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u4f60\u5982\u4f55\u77e5\u9053\u4f60\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"C")," \u7684\u6539\u53d8\u662f\u5426\u4f1a\u5f71\u54cd\u5176 API? \u4f8b\u5982\uff0c\u4e5f\u8bb8\u4f60\u60f3\u66f4\u65b0\u67d0\u4e2a\u63a7\u5236\u6309\u94ae\u7684\u989c\u8272\uff0c\u6216\u8005\u67d0\u4e2a\u9519\u8bef\u4fe1\u606f\u4e2d\u7684\u6587\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--changed-projects-only")," \u53c2\u6570\u544a\u77e5 Rush \u4e4b\u6784\u5efa\u90a3\u4e9b\u6587\u4ef6\u88ab\u66f4\u6539\u7684\u9879\u76ee\uff1a"),(0,l.kt)("img",{src:"/images/docs/selection-only.svg",alt:"rush build --only B",style:{height:"150px"}}),(0,l.kt)("p",null,"\u6211\u4eec\u7684\u8c03\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0b\u9762\u6307\u4ee4\u4f1a\u91cd\u65b0\u6784\u5efa B\uff08\u4f46\u662f\u5ffd\u7565 C \u548c D\uff09\n$ rush build --changed-projects-only\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--changed-projects-only")," \u53c2\u6570\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u56e0\u4e3a\u5f53\u4e0b\u6e38\u9879\u76ee\u91cd\u65b0\u6784\u5efa\u65f6\u53ef\u80fd\u9047\u5230\u9519\u8bef\u3002\u5047\u8bbe\u4f60\u6bd4 Rush \u66f4\u4e86\u89e3\u90a3\u4e9b\u9700\u8981\u91cd\u65b0\u6784\u5efa\uff0c\u90a3\u4e48\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u8282\u7701\u65f6\u95f4\u3002\u5982\u679c\u4f60\u4e0d\u77e5\u9053\uff0c\u90a3\u4e48\u53ef\u4ee5\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"rush build")," \u6765\u4fdd\u8bc1\u6b63\u786e\u6027\u3002"),(0,l.kt)("p",null,"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../developer/selecting_subsets"},"\u9009\u62e9\u90e8\u5206\u9879\u76ee")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../advanced/watch_mode"},"\u4f7f\u7528\u76d1\u542c\u6a21\u5f0f"))))}m.isMDXComponent=!0}}]);