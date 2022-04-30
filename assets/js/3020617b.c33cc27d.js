"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[3951],{5242:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(3929);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(t),h=r,u=c["".concat(p,".").concat(h)]||c[h]||m[h]||o;return t?a.createElement(u,s(s({ref:n},d),{},{components:t})):a.createElement(u,s({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=t(394),r=t(1614),o=(t(3929),t(5242)),s=["components"],i={title:"Phantom dependencies"},p=void 0,l={unversionedId:"pages/advanced/phantom_deps",id:"pages/advanced/phantom_deps",title:"Phantom dependencies",description:'Rush\'s documentation occasionally mentions "phantoms" and "doppelgangers".',source:"@site/docs/pages/advanced/phantom_deps.md",sourceDirName:"pages/advanced",slug:"/pages/advanced/phantom_deps",permalink:"/pages/advanced/phantom_deps",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/advanced/phantom_deps.md",tags:[],version:"current",frontMatter:{title:"Phantom dependencies"},sidebar:"docsSidebar",previous:{title:"Config file reference",permalink:"/pages/advanced/config_files"},next:{title:"NPM doppelgangers",permalink:"/pages/advanced/npm_doppelgangers"}},d={},m=[{value:"Some history and some theory",id:"some-history-and-some-theory",level:2},{value:"Phantom dependencies",id:"phantom-dependencies",level:2},{value:"Phantom node_modules folders",id:"phantom-node_modules-folders",level:2}],c={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Rush\'s documentation occasionally mentions "phantoms" and "doppelgangers".\nWant to learn more about how JavaScript package managers work?'),(0,o.kt)("h2",{id:"some-history-and-some-theory"},"Some history and some theory"),(0,o.kt)("p",null,"Everyone knows that software ",(0,o.kt)("strong",{parentName:"p"},"packages")," can depend on other ",(0,o.kt)("strong",{parentName:"p"},"packages"),", and the resulting\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dependency_graph"},"dependency graph")," is a kind of\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"directed acyclic graph"),"\nin computer science. Unlike a tree data structure, a directed acyclic graph can have\ndiamond-shaped branches that rejoin. For example, library ",(0,o.kt)("strong",{parentName:"p"},"A")," might import definitions from\nlibraries ",(0,o.kt)("strong",{parentName:"p"},"B")," and ",(0,o.kt)("strong",{parentName:"p"},"C"),", but then ",(0,o.kt)("strong",{parentName:"p"},"B")," and ",(0,o.kt)("strong",{parentName:"p"},"C")," can both import from ",(0,o.kt)("strong",{parentName:"p"},"D"),', which creates\na "',(0,o.kt)("strong",{parentName:"p"},"diamond dependency"),"\" between these four packages. Conventionally the programming language's\n",(0,o.kt)("strong",{parentName:"p"},"module resolver")," looks up imported packages by traversing edges of this graph, and\n(in other systems) the packages themselves are found in a central store that can be shared by many projects."),(0,o.kt)("p",null,"For historical reasons, NodeJS and NPM took a different approach by representing this graph physically on disk:\nNPM models the graph vertexes using actual package folder copies, and the graph edges are implied by the\nsubfolder relationships. But a folder tree's branches cannot rejoin to make diamonds.\nTo handle this, NodeJS added a ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#all-together"},"special resolution rule"),"\nwhose effect is to introduce extra graph edges (pointing to the immediate children of all parent folders).\nFrom a computer science perspective, this rule relaxes the file system's\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"},"tree data structure"),' in two ways:\n(1) it can now represent some (but not all) directed acyclic graphs, and (2) we pick up some\nextra edges that do not correspond to any declared package dependency. These extra edges are called\n"',(0,o.kt)("strong",{parentName:"p"},"phantom dependencies"),'".'),(0,o.kt)("p",null,"NPM's approach has many unique characteristics that differ from traditional package managers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Each (root-level) project gets its own ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," tree containing lots of package folder copies.\nEven a very small NodeJS project is likely to have more than 10,000 files copied under its folder.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In NPM 2.x, the ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," folder tree was very deep and duplicated, which minimized phantom dependencies.\nNPM 3.x improved the installation algorithm to flatten the tree, which eliminated a lot of duplication, at the\nexpense of introducing even more phantom dependencies (extra graph edges). In some cases the new algorithm will\nalso choose a slightly older version of a package (while still satisfying SemVer) to further reduce duplication\nof package folders.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The installed ",(0,o.kt)("strong",{parentName:"p"},"node_modules"),' tree is not unique. There are many possible ways to arrange\npackage folders into a tree to approximate the directed acyclic graph, and there is no\nunique "normalized" arrangement. The tree you get depends on whatever heuristics your\npackage manager chose to follow. NPM\'s own heuristics are even sensitive to\n',(0,o.kt)("a",{parentName:"p",href:"http://npm.github.io/how-npm-works-docs/npm3/non-determinism.html"},"the order in which you add packages"),"."))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," tree is an unusual and theoretically interesting data structure.\nBut let's focus on three consequences that can cause real trouble, and which can be particularly\ndifficult to diagnose in a large and very active monorepo. We'll also show how Rush improves\nthings -- mitigating these problems was one of the original motivations for creating the Rush tool!"),(0,o.kt)("h2",{id:"phantom-dependencies"},"Phantom dependencies"),(0,o.kt)("img",{src:"/images/home/card-phantom.svg",style:{float:"right",paddingLeft:"30px"},alt:"NPM phantom dependency"}),(0,o.kt)("p",null,'A "phantom dependency" occurs when a project uses a package that is not defined\nin its ',(0,o.kt)("strong",{parentName:"p"},"package.json")," file. Consider this example:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"my-library/package.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-library",\n  "version": "1.0.0",\n  "main": "lib/index.js",\n  "dependencies": {\n    "minimatch": "^3.0.4"\n  },\n  "devDependencies": {\n    "rimraf": "^2.6.2"\n  }\n}\n')),(0,o.kt)("p",null,"But suppose that the code looks like this:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"my-library/lib/index.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var minimatch = require('minimatch');\nvar expand = require('brace-expansion'); // ???\nvar glob = require('glob'); // ???\n\n// (more code here that uses those libraries)\n")),(0,o.kt)("p",null,"Wait a sec -- two of these libraries are not declared as dependencies\nin the ",(0,o.kt)("strong",{parentName:"p"},"package.json")," file. How is this working at all!? It turns out that\n",(0,o.kt)("strong",{parentName:"p"},"brace-expansion")," is a dependency of ",(0,o.kt)("strong",{parentName:"p"},"minimatch"),", and ",(0,o.kt)("strong",{parentName:"p"},"glob")," is a dependency\nof ",(0,o.kt)("strong",{parentName:"p"},"rimraf"),". During installation, NPM has flattened their folders to be under\n",(0,o.kt)("strong",{parentName:"p"},"my-library/node_modules"),". The NodeJS ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," function finds them there\nbecause it probes for folders without considering the ",(0,o.kt)("strong",{parentName:"p"},"package.json")," files at all.\nThis is perhaps counterintuitive, but it seems to work just fine. Maybe it's a\nfeature and not a bug?"),(0,o.kt)("p",null,"Unfortunately this project's missing declarations are best considered a bug.\nIt can lead to unexpected malfunctions or errors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Incompatible versions:")," Although our library's ",(0,o.kt)("strong",{parentName:"p"},"package.json")," declared that\nit needs ",(0,o.kt)("strong",{parentName:"p"},"minimatch")," version 3, we don't have any say about the version\nof ",(0,o.kt)("strong",{parentName:"p"},"brace-expansion")," that we'll get. The ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"SemVer system")," makes\nit perfectly legal for a PATCH release of ",(0,o.kt)("strong",{parentName:"p"},"minimatch")," to incorporate a MAJOR upgrade of\nthe ",(0,o.kt)("strong",{parentName:"p"},"brace-expansion")," library, as long as it doesn't affect the API signature\nfor ",(0,o.kt)("strong",{parentName:"p"},"minimatch"),". In practice we'll probably never encounter this as developers of\n",(0,o.kt)("strong",{parentName:"p"},"my-library")," -- instead, it will be found by a poor victim who installs our published\nlibrary later in some very different ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," arrangement that has newer (or older)\nversion constraints than what we regularly test.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Missing dependencies:")," The ",(0,o.kt)("strong",{parentName:"p"},"glob")," package is coming from our ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),", which\nmeans it only gets installed for developers who work on the ",(0,o.kt)("strong",{parentName:"p"},"my-library")," project.\nFor other consumers, ",(0,o.kt)("inlineCode",{parentName:"p"},'require("glob")')," should fail immediately with an error because ",(0,o.kt)("strong",{parentName:"p"},"glob"),"\nwon't get installed at all for them. We should hear about it as soon as we publish\nthe ",(0,o.kt)("strong",{parentName:"p"},"my-library")," package, right? Not exactly. In practice it's likely that most consumers\nwill also have ",(0,o.kt)("strong",{parentName:"p"},"glob")," for some reason (e.g. using ",(0,o.kt)("strong",{parentName:"p"},"rimraf")," themselves),\nso it may appear to work. Only a small percentage of our consumers will encounter the\nfailed import error, making it seem like they're reporting a weird issue that's difficult to repro."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How Rush helps:")," Rush's symlinking strategy ensures that each project's ",(0,o.kt)("strong",{parentName:"p"},"node_modules"),'\ncontains only its declared direct dependencies. This catches phantom dependencies\nimmediately at build time. If you\'re using the PNPM package manager, the same protections\nare also applied to all indirect dependencies (with the ability to workaround any "bad" packages\nby using ',(0,o.kt)("strong",{parentName:"p"},"pnpmfile.js"),")."),(0,o.kt)("h2",{id:"phantom-node_modules-folders"},"Phantom node_modules folders"),(0,o.kt)("p",null,"Suppose we have a monorepo, and someone adds a root-level ",(0,o.kt)("strong",{parentName:"p"},"package.json")," file\nlike this:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"my-monorepo/package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-monorepo",\n  "version": "0.0.0",\n  "scripts": {\n    "deploy-app": "node ./deploy-app.js"\n  },\n  "devDependencies": {\n    "semver": "~5.6.0"\n  }\n}\n')),(0,o.kt)("p",null,"This allows people to run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run deploy-app"),", and our script will automatically deploy all the projects\nin the monorepo. (Don't do this if you're using Rush! Instead define a\n",(0,o.kt)("a",{parentName:"p",href:"../../maintainer/custom_commands"},"custom command"),".) Notice that this hypothetical script\nneeds to use the ",(0,o.kt)("strong",{parentName:"p"},"semver")," library, so it was added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," list. People are asked to\nrun ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," in the repo root folder before ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run deploy-app"),"."),(0,o.kt)("p",null,"The resulting installed folders will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- my-monorepo/\n  - package.json\n  - node_modules/\n    - semver/\n    - ...\n  - my-library/\n    - package.json\n    - lib/\n      - index.js\n    - node_modules/\n      - brace-expansion\n      - minimatch\n      - ...\n")),(0,o.kt)("p",null,"But recall that NodeJS's module resolver probes for dependencies in parent folders.\nThis means that our ",(0,o.kt)("strong",{parentName:"p"},"my-library/lib/index.js")," can call ",(0,o.kt)("inlineCode",{parentName:"p"},'require("semver")')," and find\nthe ",(0,o.kt)("strong",{parentName:"p"},"semver")," package, even if it doesn't appear anywhere under ",(0,o.kt)("strong",{parentName:"p"},"my-library/node_modules"),".\nThis is an even more insidious way to pick up accidental phantom dependencies -- it can\nsometimes find ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," folders that aren't even under your Git working directory!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How Rush helps:")," Rush's got you covered. The ",(0,o.kt)("inlineCode",{parentName:"p"},"rush install")," command scans all\npotential parent folders and issues a warning if any phantom ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," folders\nare found."))}h.isMDXComponent=!0}}]);