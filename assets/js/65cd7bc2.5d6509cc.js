"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8764],{158:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(6393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,d=m["".concat(c,".").concat(u)]||m[u]||h[u]||i;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7328:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>p,default:()=>m});var r=t(1731),a=t(396),i=(t(6393),t(158)),o=["components"],s={title:"rush change"},c=void 0,l={unversionedId:"pages/commands/rush_change",id:"pages/commands/rush_change",title:"rush change",description:"See also",source:"@site/docs/pages/commands/rush_change.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_change",permalink:"/pages/commands/rush_change",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_change.md",tags:[],version:"current",frontMatter:{title:"rush change"},sidebar:"docsSidebar",previous:{title:"rush build",permalink:"/pages/commands/rush_build"},next:{title:"rush check",permalink:"/pages/commands/rush_check"}},p=[{value:"See also",id:"see-also",children:[],level:2}],h={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'usage: rush change [-h] [-v] [--no-fetch] [-b BRANCH] [--overwrite]\n                   [--email EMAIL] [--bulk] [--message MESSAGE]\n                   [--bump-type {major,minor,patch,none}]\n\n\nAsks a series of questions and then generates a <branchname>-<timestamp>.json\nfile in the common folder. The `publish` command will consume these files and\nperform the proper version bumps. Note these changes will eventually be\npublished in a changelog.md file in each package. The possible types of\nchanges are: MAJOR - these are breaking changes that are not backwards\ncompatible. Examples are: renaming a public class, adding/removing a\nnon-optional parameter from a public API, or renaming an variable or function\nthat is exported. MINOR - these are changes that are backwards compatible\n(but not forwards compatible). Examples are: adding a new public API or\nadding an optional parameter to a public API PATCH - these are changes that\nare backwards and forwards compatible. Examples are: Modifying a private API\nor fixing a bug in the logic of how an existing API works. HOTFIX\n(EXPERIMENTAL) - these are changes that are hotfixes targeting a specific\nolder version of the package. When a hotfix change is added, other changes\nwill not be able to increment the version number. Enable this feature by\nsetting \'hotfixChangeEnabled\' in your rush.json.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -v, --verify          Verify the change file has been generated and that it\n                        is a valid JSON file\n  --no-fetch            Skips fetching the baseline branch before running\n                        "git diff" to detect changes.\n  -b BRANCH, --target-branch BRANCH\n                        If this parameter is specified, compare the checked\n                        out branch with the specified branch to determine\n                        which projects were changed. If this parameter is not\n                        specified, the checked out branch is compared against\n                        the "master" branch.\n  --overwrite           If a changefile already exists, overwrite without\n                        prompting (or erroring in --bulk mode).\n  --email EMAIL         The email address to use in changefiles. If this\n                        parameter is not provided, the email address will be\n                        detected or prompted for in interactive mode.\n  --bulk                If this flag is specified, apply the same change\n                        message and bump type to all changed projects. The\n                        --message and the --bump-type parameters must be\n                        specified if the --bulk parameter is specified\n  --message MESSAGE     The message to apply to all changed projects if the\n                        --bulk flag is provided.\n  --bump-type {major,minor,patch,none}\n                        The bump type to apply to all changed projects if the\n                        --bulk flag is provided.\n')),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../best_practices/change_logs"},"Authoring change logs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../commands/rush_version"},"rush version"))))}m.isMDXComponent=!0}}]);