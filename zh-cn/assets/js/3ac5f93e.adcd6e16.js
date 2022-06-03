"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8413],{5242:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(3929);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),c=i,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=t(394),i=t(1614),r=(t(3929),t(5242)),o=["components"],s={title:"Enabling phased builds (experimental)"},p=void 0,l={unversionedId:"pages/maintainer/phased_builds",id:"pages/maintainer/phased_builds",title:"Enabling phased builds (experimental)",description:"By default, Rush builds each project by running npm run build separately in each project folder, running projects",source:"@site/docs/pages/maintainer/phased_builds.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/phased_builds",permalink:"/zh-cn/pages/maintainer/phased_builds",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/phased_builds.md",tags:[],version:"current",frontMatter:{title:"Enabling phased builds (experimental)"},sidebar:"docsSidebar",previous:{title:"\u542f\u7528\u6784\u5efa\u7f13\u5b58\uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/zh-cn/pages/maintainer/build_cache"},next:{title:"NPM \u4ed3\u5e93\u8ba4\u8bc1",permalink:"/zh-cn/pages/maintainer/npm_registry_auth"}},d={},u=[{value:"Enable the experiment",id:"enable-the-experiment",level:2},{value:"Define phases",id:"define-phases",level:2},{value:"Redefine the build and test commands",id:"redefine-the-build-and-test-commands",level:2},{value:"Add phase scripts to your projects",id:"add-phase-scripts-to-your-projects",level:2},{value:"Define per-phase output folder names",id:"define-per-phase-output-folder-names",level:2}],m={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, Rush builds each project by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," separately in each project folder, running projects\nin parallel when the dependency graph allows. From Rush's perspective, everything that happens inside that build\ncommand is atomic."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Phased builds")," are a way to increase parallelism, by defining individual operations as ",(0,r.kt)("em",{parentName:"p"},"phases")," that can be\nexecuted on a project. As an example, if project B depends on project A, we could first build project A, and then\nbegin building project B while running the unit tests for project A in parallel."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Phased builds are built on top of, and require, the build cache feature -- if you haven't already enabled the build cache for your monorepo, see ",(0,r.kt)("a",{parentName:"p",href:"../build_cache"},"Enabling build cache (experimental)"),".")),(0,r.kt)("h2",{id:"enable-the-experiment"},"Enable the experiment"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"common/config/rush/experiments.json"),", enable the ",(0,r.kt)("inlineCode",{parentName:"p"},'"phasedCommands"')," experiment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "phasedCommands": true\n}\n')),(0,r.kt)("h2",{id:"define-phases"},"Define phases"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"common/config/rush/command-line.json"),", add a section ",(0,r.kt)("inlineCode",{parentName:"p"},'"phases"'),", as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "phases": [\n    {\n      "name": "_phase:build",\n      "dependencies": {\n        "upstream": ["_phase:build"]\n      },\n      "ignoreMissingScript": true,\n      "allowWarningsOnSuccess": false\n    },\n    {\n      "name": "_phase:test",\n      "dependencies": {\n        "self": ["_phase:build"]\n      },\n      "ignoreMissingScript": true,\n      "allowWarningsOnSuccess": false\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"In this example, we define two phases -- ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:test"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:build")," operation depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:build")," operation of its upstream projects (using the traditional Rush dependency graph). The ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:test")," operation does not depend on any upstream projects, but requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:build")," operation of its ",(0,r.kt)("em",{parentName:"p"},"own")," project to be completed first. Note that phase names must start with ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:"),"."),(0,r.kt)("p",null,"Individual projects can choose not to implement a phase (if ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreMissingScript")," is enabled), but they cannot define their own phases, or change the dependencies of phases. This ensures that phases will behave consistently within your monorepo, regardless of what subset of projects you are building."),(0,r.kt)("h2",{id:"redefine-the-build-and-test-commands"},"Redefine the build and test commands"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"common/config/rush/command-line.json"),", in the ",(0,r.kt)("inlineCode",{parentName:"p"},'"commands"')," section, redefine the ",(0,r.kt)("inlineCode",{parentName:"p"},'"build"')," command to be a ",(0,r.kt)("inlineCode",{parentName:"p"},"phased")," command instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"bulk")," command, and specify what phases you would like it to run. In the example below we also define a ",(0,r.kt)("inlineCode",{parentName:"p"},'"test"')," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "commands": [\n    {\n      "commandKind": "phased",\n      "name": "build",\n      "phases": ["_phase:build"],\n      "enableParallelism": true,\n      "incremental": true\n    },\n\n    // No need to define "rebuild", by default, it is the same as build\n    // but with incremental=false.\n\n    {\n      "commandKind": "phased",\n      "name": "test",\n      "summary": "Build and test all projects.",\n      "phases": ["_phase:build", "_phase:test"],\n      "enableParallelism": true,\n      "incremental": true\n    },\n\n    {\n      "commandKind": "phased",\n      "name": "retest",\n      "summary": "Build and test all projects.",\n      "phases": ["_phase:build", "_phase:test"],\n      "enableParallelism": true,\n      "incremental": true\n    }\n  ]\n}\n')),(0,r.kt)("p",null,'This command definition shows off another useful feature of phased builds: we can create our "phase" building blocks and then build commands out of them. Instead of ',(0,r.kt)("inlineCode",{parentName:"p"},"rush build")," running builds and tests for all projects, we can define ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build"),' to mean "build everything without tests", and ',(0,r.kt)("inlineCode",{parentName:"p"},"rush test"),' to mean "build everything and run tests".'),(0,r.kt)("h2",{id:"add-phase-scripts-to-your-projects"},"Add phase scripts to your projects"),(0,r.kt)("p",null,"Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file for every project in your monorepo, add the new ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:")," scripts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "_phase:build": "heft build --clean",\n    "_phase:test": "heft test --no-build",\n    "build": "heft build --clean",\n    "test": "heft test --clean"\n  }\n}\n')),(0,r.kt)("p",null,"The example above attempts to align developer expectations for the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Moving into the project folder and running ",(0,r.kt)("inlineCode",{parentName:"li"},"rushx build")," cleans and builds the project, without testing."),(0,r.kt)("li",{parentName:"ul"},"Moving into the project folder and running ",(0,r.kt)("inlineCode",{parentName:"li"},"rushx test")," cleans, builds, and tests the project."),(0,r.kt)("li",{parentName:"ul"},"Running ",(0,r.kt)("inlineCode",{parentName:"li"},"rush build --only <project>")," cleans and builds the project, without testing."),(0,r.kt)("li",{parentName:"ul"},"Running ",(0,r.kt)("inlineCode",{parentName:"li"},"rush test --only <project>")," cleans, builds, and tests the project.")),(0,r.kt)("p",null,"Where possible, for any custom phases you define, keep this pattern in mind -- what's important isn't that phases are implemented identically to rushx commands, but rather that ",(0,r.kt)("inlineCode",{parentName:"p"},"rush <something>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rushx <something>")," produce similar results, if applicable."),(0,r.kt)("p",null,"Some projects may not have any meaningful work to do for a phase, in which case you can define it as an empty operation (",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"), or leave it off entirely, if ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreMissingScript")," was specified in the phase definition."),(0,r.kt)("h2",{id:"define-per-phase-output-folder-names"},"Define per-phase output folder names"),(0,r.kt)("p",null,"Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"rush-project.json")," configuration file of each project (or, preferably, each rig profile), redefine your ",(0,r.kt)("inlineCode",{parentName:"p"},"operationSettings")," so that each folder is specified in only one phase. For exampe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationSettings": [\n    // Old configuration (before phases)\n    {\n      "operationName": "build",\n      "outputFolderNames": ["lib", "lib-commonjs", "dist", "temp"]\n    },\n    // New configuration (after phases)\n    {\n      "operationName": "_phase:build",\n      "outputFolderNames": ["lib", "lib-commonjs", "dist"]\n    },\n    {\n      "operationName": "_phase:test",\n      "outputFolderNames": ["temp/coverage", "temp/jest-reports"]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Note how there's no overlap between the output folders specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:test")," -- this is an important new requirement for phased builds. In general, it's not possible for Rush to reliably cache the output of an operation if that output can be modified by a different operation, so you should structure your operations such that if ",(0,r.kt)("inlineCode",{parentName:"p"},"_phase:build")," produces a ",(0,r.kt)("inlineCode",{parentName:"p"},'"lib"')," folder, no other operation will put output in that folder."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The phased builds feature is still under development. Feedback is welcome!"),(0,r.kt)("p",{parentName:"blockquote"},"Some relevant GitHub issues to follow:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/issues/2300"},'Design proposal: "phased" custom commands')))))}c.isMDXComponent=!0}}]);