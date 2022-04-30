"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4044],{5242:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(3929);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(394),o=n(1614),a=(n(3929),n(5242)),i=["components"],s={title:"Adding projects to a repo"},p=void 0,l={unversionedId:"pages/maintainer/add_to_repo",id:"pages/maintainer/add_to_repo",title:"Adding projects to a repo",description:'This continues the tutorial that started with "Setting up a new repo". (To see a fully worked out sample based on these steps, take a look at the rush-example repo on GitHub.)',source:"@site/docs/pages/maintainer/add_to_repo.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/add_to_repo",permalink:"/pages/maintainer/add_to_repo",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/add_to_repo.md",tags:[],version:"current",frontMatter:{title:"Adding projects to a repo"},sidebar:"docsSidebar",previous:{title:"Setting up a new repo",permalink:"/pages/maintainer/setup_new_repo"},next:{title:"Enabling CI builds",permalink:"/pages/maintainer/enabling_ci_builds"}},c={},m=[{value:"Step 4: Add your first project",id:"step-4-add-your-first-project",level:2},{value:"Step 5: Running your first &quot;rush update&quot;",id:"step-5-running-your-first-rush-update",level:2},{value:"Step 6: Verify that the new project builds",id:"step-6-verify-that-the-new-project-builds",level:2},{value:"Step 7: Adding more projects",id:"step-7-adding-more-projects",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'This continues the tutorial that started with "',(0,a.kt)("a",{parentName:"em",href:"../../maintainer/setup_new_repo"},"Setting up a new repo"),'". (To see a fully worked out sample based on these steps, take a look at the ',(0,a.kt)("a",{parentName:"em",href:"https://github.com/microsoft/rush-example"},"rush-example")," repo on GitHub.)")),(0,a.kt)("h2",{id:"step-4-add-your-first-project"},"Step 4: Add your first project"),(0,a.kt)("p",null,"Rather than trying to add all your projects to ",(0,a.kt)("strong",{parentName:"p"},"rush.json")," all at once, we recommend adding and validating each project one at a time. Recall that your projects form a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dependency_graph"},"dependency graph"),', so start with the "leaf" projects (that don\'t depend on anything else in the repo), and then work your way backwards. If you encounter any errors, this approach makes it easier to understand and investigate them. If you commit each added project individually, this will also make your Git history more understandable to others.'),(0,a.kt)("p",null,"For this example, let's start by adding our hypothetical ",(0,a.kt)("strong",{parentName:"p"},"my-toolchain"),' project, which is needed to build everything else. Since we\'ll be conforming to the "category folders" model (described in the ',(0,a.kt)("strong",{parentName:"p"},"rush.json"),' comments), we\'ll move this project under a "tools" category folder. Eventually we\'ll plan for other NodeJS tooling packages to go in the "tools" folder:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/my-repo$ mkdir tools\n~/my-repo$ cd tools\n~/my-repo/tools$ cp -R ~/my-toolchain/ .\n~/my-repo/tools$ cd my-toolchain\n")),(0,a.kt)("p",null,"Next we need to delete project-specific files that are centrally coordinated in a monorepo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete the local shrinkwrap file, since it's superseded by Rush's common shrinkwrap file."),(0,a.kt)("li",{parentName:"ul"},"Consider deleting the project's ",(0,a.kt)("strong",{parentName:"li"},".npmrc")," file, since Rush operations always use ",(0,a.kt)("strong",{parentName:"li"},"common/config/rush/.npmrc")),(0,a.kt)("li",{parentName:"ul"},"Consider deleting the project's Git config files unless they contain rules that are really specific to that project")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/my-repo/tools/my-toolchain$ rm -f shrinkwrap.yaml npm-shrinkwrap.json package-lock.json yarn.lock\n~/my-repo/tools/my-toolchain$ rm -f .npmrc          # (if it makes sense)\n~/my-repo/tools/my-toolchain$ rm -f .gitattributes  # (if it makes sense)\n~/my-repo/tools/my-toolchain$ rm -f .gitignore      # (if it makes sense)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},'More about the "shrinkwrap file"')),(0,a.kt)("p",{parentName:"blockquote"},"Depending on your package manager, the shrinkwrap file may be called ",(0,a.kt)("strong",{parentName:"p"},"shrinkwrap.yaml"),",\n",(0,a.kt)("strong",{parentName:"p"},"npm-shrinkwrap.json"),", ",(0,a.kt)("strong",{parentName:"p"},"package-lock.json"),", or ",(0,a.kt)("strong",{parentName:"p"},"yarn.lock"),'. (Some package managers use the\nterm "lock file", although it has nothing to do with file locking. In this documentation we will\ngenerically refer to it as a "shrinkwrap file" since we don\'t know which package manager you will choose.)'),(0,a.kt)("p",{parentName:"blockquote"},'Normally the package manager creates a shrinkwrap file in each project folder, but in a Rush repo\nthere is a single "common" shrinkwrap file that describes the entire repo. It will be stored in\nthe ',(0,a.kt)("strong",{parentName:"p"},"common/config/rush")," folder, and should be committed to Git. Consolidating all dependency\ninformation in a single shrinkwrap file has many benefits for reducing merge conflicts, reviewing diffs,\nand improving installation speed.")),(0,a.kt)("p",null,"Commit the new project files to Git:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'~/my-repo/tools/my-toolchain$ cd ../..\n~/my-repo$ git add .\n~/my-repo$ git commit -m "Adding my-toolchain"\n')),(0,a.kt)("h2",{id:"step-5-running-your-first-rush-update"},'Step 5: Running your first "rush update"'),(0,a.kt)("p",null,"After copying over the project files, we need to edit ",(0,a.kt)("strong",{parentName:"p"},"rush.json")," and add an entry like this under the ",(0,a.kt)("inlineCode",{parentName:"p"},"projects")," inventory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'  "projects": [\n    {\n      "packageName": "my-toolchain",\n      "projectFolder": "tools/my-toolchain"\n    }\n  ]\n')),(0,a.kt)("p",null,"This tells Rush that it should manage this project."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Why can't Rush automatically detect my projects?")),(0,a.kt)("p",{parentName:"blockquote"},"Rush does not automatically discover projects using wildcards. We have a few motivations for this\ndesign decision:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Depth-first scans are expensive, particularly when tools need to repeatedly collect the list."),(0,a.kt)("li",{parentName:"ol"},"On a caching CI machine, scans can accidentally pick up files left behind from a previous build."),(0,a.kt)("li",{parentName:"ol"},"It's useful to have a centralized inventory of all projects and their important metadata.\nFor example, this makes the approval/policy features more intuitive."))),(0,a.kt)("p",null,"Next, run ",(0,a.kt)("inlineCode",{parentName:"p"},"rush update")," to install the dependencies of ",(0,a.kt)("strong",{parentName:"p"},"my-toolchain"),". This command can be run in\nany subfolder of the repo folder that contains rush.json:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'~/my-repo$ rush update\n~/my-repo$ git add .\n~/my-repo$ git commit -m "rush update"\n')),(0,a.kt)("p",null,"Since this is the first project for the repo, you'll notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"rush update")," creates several new files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"common/config/rush/shrinkwrap.yaml"),": The common shrinkwrap file (here we're assuming PNPM package manager)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"common/scripts/install-run-rush.js"),": Used by CI jobs to bootstrap the Rush tool in a reliable way"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"common/scripts/install-run.js"),": Used by CI jobs to bootstrap arbitrary tools in a reliable way")),(0,a.kt)("h2",{id:"step-6-verify-that-the-new-project-builds"},"Step 6: Verify that the new project builds"),(0,a.kt)("p",null,"In order to build your projects, Rush will look for a ",(0,a.kt)("inlineCode",{parentName:"p"},'"build"')," script in the ",(0,a.kt)("inlineCode",{parentName:"p"},'"scripts"')," section of your ",(0,a.kt)("strong",{parentName:"p"},"package.json")," file. In our example from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rush-example"},"rush-example"),", the project builds using a simple shell script ",(0,a.kt)("inlineCode",{parentName:"p"},'"rimraf ./lib/ && tsc"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-toolchain",\n  "version": "1.0.0",\n  "description": "An example toolchain used to build projects in this repo",\n  "license": "MIT",\n  "bin": {\n    "my-build": "bin/my-build.js"\n  },\n  "scripts": {\n    "build": "rimraf ./lib/ && tsc"\n  },\n  "dependencies": {\n    "colors": "^1.3.2"\n  },\n  "devDependencies": {\n    "@types/node": "^10.9.4",\n    "rimraf": "^2.6.2",\n    "typescript": "^3.0.3"\n  }\n}\n')),(0,a.kt)("p",null,"There are a few things to keep in mind when creating a ",(0,a.kt)("inlineCode",{parentName:"p"},'"build"')," script:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Rush will normally use your system PATH environment variable to find the script commands. However, if you specify a single-word command like "gulp" or "make", Rush will first look for the program in the ',(0,a.kt)("inlineCode",{parentName:"p"},"common\\temp\\node_modules\\.bin")," folder.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the process returns a non-zero exit status, Rush will assume there was a failure and will block downstream builds.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the command writes anything to the ",(0,a.kt)("inlineCode",{parentName:"p"},"stderr"),' stream, Rush will interpret this to mean that at least one error or warning was reported. This will break the build. (This is by design -- if you allow people to merge PRs that "cry wolf", pretty soon you will find that so many warnings have accumulated that nobody even reads them any more.) Some tooling libraries (e.g. Jest) write to ',(0,a.kt)("inlineCode",{parentName:"p"},"stderr")," as part of their normal operation; you will need to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-legacy/blob/main/core-build/gulp-core-build/src/tasks/JestReporter.ts#L14"},"redirect their output"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If certain projects don't need to be processed by ",(0,a.kt)("inlineCode",{parentName:"p"},"rush build"),", you still need a ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," entry. Set the value to an empty string (",(0,a.kt)("inlineCode",{parentName:"p"},'""'),") and Rush will ignore it."))),(0,a.kt)("p",null,"Now let's try building your project. From anywhere under the folder containing ",(0,a.kt)("strong",{parentName:"p"},"rush.json"),", run this command (which builds all projects in the repo):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rush build\n")),(0,a.kt)("p",null,"Rush provides a lot of command-line switches for building projects. See ",(0,a.kt)("a",{parentName:"p",href:"../../commands/rush_build"},"rush build")," and ",(0,a.kt)("a",{parentName:"p",href:"../../commands/rush_rebuild"},"rush rebuild")," for details."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Phantom dependency errors")),(0,a.kt)("p",{parentName:"blockquote"},"Rush and PNPM use symlinks to prevent projects from importing ",(0,a.kt)("a",{parentName:"p",href:"../../advanced/phantom_deps"},"phantom dependencies"),".\nIf an NPM dependency is not declared in your ",(0,a.kt)("strong",{parentName:"p"},"package.json")," file, a runtime error may occur if your project tries to\nimport it. These phantom dependency errors are one of the most common issues when migrating an existing project into\na Rush monorepo. Generally the fix is simply to add the missing dependency to your ",(0,a.kt)("strong",{parentName:"p"},"package.json")," file."),(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("a",{parentName:"p",href:"../../commands/rush_scan"},"rush scan")," command is a quick way to detect these problems.")),(0,a.kt)("h2",{id:"step-7-adding-more-projects"},"Step 7: Adding more projects"),(0,a.kt)("p",null,"You can add more projects by following the same operations from Step 4. In our example, we would add ",(0,a.kt)("strong",{parentName:"p"},"my-controls")," next (because it depends on ",(0,a.kt)("strong",{parentName:"p"},"my-toolchain"),"), and then ",(0,a.kt)("strong",{parentName:"p"},"my-application"),' last (because it depends on everything). We proactively added a couple more category folders ("libraries" and "apps") since we expect more of these types of things in our scenario. The filled out ',(0,a.kt)("inlineCode",{parentName:"p"},'"projects"')," section looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'  "projects": [\n    {\n      "packageName": "my-app",\n      "projectFolder": "apps/my-app"\n    },\n\n    {\n      "packageName": "my-controls",\n      "projectFolder": "libraries/my-controls",\n      "reviewCategory": "production"\n    },\n\n    {\n      "packageName": "my-toolchain",\n      "projectFolder": "tools/my-toolchain",\n      "reviewCategory": "tools"\n    }\n  ]\n')),(0,a.kt)("p",null,"Once you have all your projects added and building without errors, you may consider enabling other optional features. The config files contain lots of snippets that you can uncomment to get started. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rush-example"},"rush-example")," repo uses some of these snippets."))}d.isMDXComponent=!0}}]);