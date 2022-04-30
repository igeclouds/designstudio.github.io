"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8277],{5242:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>u});var t=n(3929);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?t.createElement(f,s(s({ref:r},c),{},{components:n})):t.createElement(f,s({ref:r},c))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6622:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(394),o=n(1614),a=(n(3929),n(5242)),s=["components"],i={title:"Preferred versions"},p=void 0,l={unversionedId:"pages/advanced/preferred_versions",id:"pages/advanced/preferred_versions",title:"Preferred versions",description:"Background",source:"@site/docs/pages/advanced/preferred_versions.md",sourceDirName:"pages/advanced",slug:"/pages/advanced/preferred_versions",permalink:"/pages/advanced/preferred_versions",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/advanced/preferred_versions.md",tags:[],version:"current",frontMatter:{title:"Preferred versions"},sidebar:"docsSidebar",previous:{title:"NPM doppelgangers",permalink:"/pages/advanced/npm_doppelgangers"},next:{title:"Incremental builds",permalink:"/pages/advanced/incremental_builds"}},c={},d=[{value:"Background",id:"background",level:2},{value:"Preferred Versions",id:"preferred-versions",level:2},{value:"Implicitly Preferred Versions",id:"implicitly-preferred-versions",level:2}],m={toc:d};function u(e){var r=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"Rush performs a single install for all your projects by creating a fake ",(0,a.kt)("strong",{parentName:"p"},"rush-common")," project in your common folder that references tarballs containing the dependencies for each project. For example, suppose your ",(0,a.kt)("strong",{parentName:"p"},"rush.json"),' has two projects "',(0,a.kt)("strong",{parentName:"p"},"project1"),'" and "',(0,a.kt)("strong",{parentName:"p"},"project2"),'". The generated file might look like this:'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"common/temp/package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "rush-common",\n  "description": "Temporary file generated by the Rush tool",\n  "private": true,\n  "version": "0.0.0",\n  "dependencies": {\n    "@rush-temp/project1": "file:./projects/project-1.tgz",\n    "@rush-temp/project2": "file:./projects/project-2.tgz"\n  }\n}\n')),(0,a.kt)("p",null,'The package manager considers each of these "',(0,a.kt)("strong",{parentName:"p"},"@rush-temp"),'" scoped projects to be a direct dependency for the ',(0,a.kt)("strong",{parentName:"p"},"rush-common")," project. In general NPM installs a project's direct dependencies first (at the root of the ",(0,a.kt)("strong",{parentName:"p"},"node_modules")," tree), and only then proceed to download the indirect dependencies. But since your real project's direct dependencies are now indirect dependencies for the ",(0,a.kt)("strong",{parentName:"p"},"rush-common")," project, the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," behavior could be different."),(0,a.kt)("p",null,"Suppose ",(0,a.kt)("strong",{parentName:"p"},"project-1/package.json")," looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "project-1",\n  "version": "1.0.0",\n  "dependencies": {\n    "library-a": "1.0.1",\n    "library-b": "1.1.3"\n  }\n}\n')),(0,a.kt)("p",null,"And let's say ",(0,a.kt)("strong",{parentName:"p"},"library-a")," (from the internet) looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "library-a",\n  "version": "1.0.1",\n  "dependencies": {\n    "library-b": "^1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,"If you ran a normal ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," in for ",(0,a.kt)("strong",{parentName:"p"},"project-1"),", you would expect to have a ",(0,a.kt)("strong",{parentName:"p"},"node_modules")," folder which looks like this, even if ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:library-b@1.4.4"},"library-b@1.4.4"))," exists in the NPM registry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node_modules/\n  library-a/ (1.0.1)\n  library-b/ (1.1.3)\n")),(0,a.kt)("p",null,"Even though ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:library-b@1.4.4"},"library-b@1.4.4"))," matches the ",(0,a.kt)("inlineCode",{parentName:"p"},'"^1.0.0"')," SemVer pattern, NPM doesn't install it because 1.1.3 (installed by ",(0,a.kt)("inlineCode",{parentName:"p"},"project-1"),") already satisfies it."),(0,a.kt)("p",null,"But the ",(0,a.kt)("strong",{parentName:"p"},"common/temp/package.json")," described above would not guarantee this. Instead, depending on the dependencies of ",(0,a.kt)("strong",{parentName:"p"},"project-2"),", you could end up with this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node_modules/\n  project-1/\n    library-b/ (1.1.3)\n  library-a/ (1.0.1)\n  library-b/ (1.4.4)\n")),(0,a.kt)("p",null,"... which is also a valid solution to the SemVer equation. Similar problems can arise when using Rush with NPM's ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/npm/peer-dependencies/"},"peer dependencies"),"."),(0,a.kt)("h2",{id:"preferred-versions"},"Preferred Versions"),(0,a.kt)("p",null,'To control these effects Rush introduces a concept of "preferred versions", which are dependencies that get explicitly added to the top-level ',(0,a.kt)("strong",{parentName:"p"},"common/temp/package.json"),"."),(0,a.kt)("p",null,'You can "pin" a version by adding it to the config file ',(0,a.kt)("strong",{parentName:"p"},"common-versions.json"),". For example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"common/config/rush/common-versions.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/common-versions.schema.json",\n  "preferredVersions": {\n    "css-loader": "1.2.3"\n  }\n}\n')),(0,a.kt)("p",null,"This will cause ",(0,a.kt)("strong",{parentName:"p"},"css-loader")," to be added to the ",(0,a.kt)("strong",{parentName:"p"},"common/temp/package.json")," from our above example, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "rush-common",\n  "description": "Temporary file generated by the Rush tool",\n  "private": true,\n  "version": "0.0.0",\n  "dependencies": {\n    "css-loader": "1.2.3",\n    "@rush-temp/project1": "file:./projects/project-1.tgz",\n    "@rush-temp/project2": "file:./projects/project-2.tgz"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If you are publishing packages, you should be careful about adding preferred versions in a way that would produce a different result than a person who installs your library normally using NPM.")),(0,a.kt)("h2",{id:"implicitly-preferred-versions"},"Implicitly Preferred Versions"),(0,a.kt)("p",null,"By default, Rush will automatically add all direct dependencies of all your projects to ",(0,a.kt)("strong",{parentName:"p"},"common/temp/package.json"),'.\nIn our original example, these "implicitly preferred versions" might appear like this:'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"common/temp/package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "name": "rush-common",\n  "description": "Temporary file generated by the Rush tool",\n  "private": true,\n  "version": "0.0.0",\n  "dependencies": {\n    "css-loader": "1.2.3",  // <---- preferred version that was specified above\n    "library-a": "~1.0.0",  // <---- implicitly preferred version\n    "library-b": "1.1.3",   // <---- implicitly preferred version\n    "@rush-temp/project1": "file:./projects/project-1.tgz",\n    "@rush-temp/project2": "file:./projects/project-2.tgz",\n  }\n}\n')),(0,a.kt)("p",null,"Rush does this for you except in cases where different projects specify different version ranges for a given dependency.\nIn that case, Rush wouldn't know which version should be implicitly preferred. For example, if ",(0,a.kt)("strong",{parentName:"p"},"project1")," and\n",(0,a.kt)("strong",{parentName:"p"},"project2")," were requesting different versions of ",(0,a.kt)("strong",{parentName:"p"},"library-b"),", then you might need to get involved, and maybe use ",(0,a.kt)("strong",{parentName:"p"},"common-versions.json")," to resolve your issue."),(0,a.kt)("p",null,"For older package managers, automatically adding these entries tended to reduce duplication of indirect dependencies.\nHowever, implicitly preferred versions can cause trouble for certain dependencies with incompatible ",(0,a.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"\nranges. If you're encountering installation errors involving peer dependencies, we recommend to disable\nthis behavior by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"implicitlyPreferredVersions")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the\n",(0,a.kt)("a",{parentName:"p",href:"../../configs/common-versions_json"},"common/config/rush/common-versions.json")," config file."))}u.isMDXComponent=!0}}]);