"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[1044],{158:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(6393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=a.createContext({}),s=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(r.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,h=c["".concat(r,".").concat(u)]||c[u]||m[u]||l;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=c;var p={};for(var r in n)hasOwnProperty.call(n,r)&&(p[r]=n[r]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1511:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>r,metadata:()=>s,toc:()=>d,default:()=>c});var a=t(1731),o=t(396),l=(t(6393),t(158)),i=["components"],p={title:"Deploying projects"},r=void 0,s={unversionedId:"pages/maintainer/deploying",id:"pages/maintainer/deploying",title:"Deploying projects",description:"Suppose that your monorepo includes a Node.js service that we want to deploy to a web server.",source:"@site/docs/pages/maintainer/deploying.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/deploying",permalink:"/pages/maintainer/deploying",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/deploying.md",tags:[],version:"current",frontMatter:{title:"Deploying projects"},sidebar:"docsSidebar",previous:{title:"Publishing packages",permalink:"/pages/maintainer/publishing"},next:{title:"Enabling the build cache (experimental)",permalink:"/pages/maintainer/build_cache"}},d=[{value:"Configuring &quot;rush deploy&quot;",id:"configuring-rush-deploy",children:[],level:2},{value:"Preparing a deployment",id:"preparing-a-deployment",children:[],level:2},{value:"Handling links",id:"handling-links",children:[],level:2},{value:"Including additional projects",id:"including-additional-projects",children:[],level:2},{value:"Multiple deployments using the same config file",id:"multiple-deployments-using-the-same-config-file",children:[],level:2},{value:"Multiple deployments using different config files",id:"multiple-deployments-using-different-config-files",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],m={toc:d};function c(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Suppose that your monorepo includes a Node.js service that we want to deploy to a web server.\nFor example, let's say the Node.js service is a local Rush project called ",(0,l.kt)("inlineCode",{parentName:"p"},"app1"),", and the repo is\norganized as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"apps/app1"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"depends on ",(0,l.kt)("inlineCode",{parentName:"li"},"ext-lib7")," (from NPM) and ",(0,l.kt)("inlineCode",{parentName:"li"},"lib3")," (a local project)"),(0,l.kt)("li",{parentName:"ul"},"dev dependencies on ",(0,l.kt)("inlineCode",{parentName:"li"},"ext-tool8")," (from NPM) and ",(0,l.kt)("inlineCode",{parentName:"li"},"tool6")," (a local project)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"apps/app2"),": depends on ",(0,l.kt)("inlineCode",{parentName:"li"},"lib3")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"lib4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries/lib3"),": depends on ",(0,l.kt)("inlineCode",{parentName:"li"},"lib5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries/lib4"),": no dependencies"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries/lib5"),": peer dependency on ",(0,l.kt)("inlineCode",{parentName:"li"},"ext-lib7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tools/tool6"),": no dependencies")),(0,l.kt)("p",null,"One solution might be to run ",(0,l.kt)("inlineCode",{parentName:"p"},"rush install")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"rush build"),", and then copy the entire monorepo to the server.\nHowever, this could potentially include many extraneous files and NPM packages. Instead we would like to copy\nonly ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," and its regular dependencies (",(0,l.kt)("inlineCode",{parentName:"p"},"ext-lib7"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lib3"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lib5"),"). We do not want to include dev dependencies such\nas ",(0,l.kt)("inlineCode",{parentName:"p"},"ext-tool8"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"../../commands/rush_deploy"},"rush deploy")," command calculates this set of files and\ncopies them to a target folder, which you can then upload to your server."),(0,l.kt)("h2",{id:"configuring-rush-deploy"},'Configuring "rush deploy"'),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"rush deploy")," command reads its settings from a config file\n",(0,l.kt)("a",{parentName:"p",href:"../../configs/deploy_json"},"common/config/rush/deploy.json"),". This config file is not created\nby ",(0,l.kt)("inlineCode",{parentName:"p"},"rush init"),". Instead, you create the file using ",(0,l.kt)("a",{parentName:"p",href:"../../commands/rush_init-deploy"},"rush init-deploy"),"."),(0,l.kt)("p",null,"Continuing our example, we can create the file using this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# Create common/config/rush/deploy.json and configure it to deploy "app1"\n$ rush init-deploy --project app1\n')),(0,l.kt)("p",null,"After the file ",(0,l.kt)("strong",{parentName:"p"},"deploy.json")," is created, open it in your editor and adjust the settings as appropriate. Then\ncommit this file to Git."),(0,l.kt)("h2",{id:"preparing-a-deployment"},"Preparing a deployment"),(0,l.kt)("p",null,"To copy the files to the deployment target folder, you would use these commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Install dependencies\n$ rush install\n\n# Build the monorepo\n$ rush build\n\n# Copy app1 and its dependencies to the default target folder: common/deploy/\n$ rush deploy\n")),(0,l.kt)("p",null,"This will prepare a deployment by copying ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," and its dependencies the target folder. The copied files will be\norganized similarly to the monorepo's folder structure:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/deploy/apps/app1/...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/deploy/common/temp/node_modules/ext-lib7/...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/deploy/libraries/lib3/...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/deploy/libraries/lib4/..."))),(0,l.kt)("p",null,"You can test that the deployment worked correctly by executing ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," from within the deployment target folder:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Change to the app1 location under the target folder\n$ cd common/deploy/apps/app1\n\n# Invoke the package.json script that starts the web service\n$ rushx start\n")),(0,l.kt)("p",null,"If the project fails to run (but worked correctly from its original location ",(0,l.kt)("strong",{parentName:"p"},"apps/app1"),"), then you many\nneed to tune the settings in ",(0,l.kt)("strong",{parentName:"p"},"deploy.json"),". Once you've confirmed that the project works correctly, the next step\nis to upload the ",(0,l.kt)("strong",{parentName:"p"},"common/deploy")," subtree to your server machine."),(0,l.kt)("h2",{id:"handling-links"},"Handling links"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"common/deploy")," subtree will have symbolic links created by ",(0,l.kt)("inlineCode",{parentName:"p"},"rush install"),". For example, if you are using the\nPNPM package manager, then ",(0,l.kt)("strong",{parentName:"p"},"common/deploy/apps/app1/node_modules/ext-lib7")," may be a symlink to a folder under the\n",(0,l.kt)("strong",{parentName:"p"},"common/deploy/common/temp/node_modules/.pnpm/...")," path. Correctly replicating these links can be problematic for\nupload tools such as ",(0,l.kt)("inlineCode",{parentName:"p"},"tar")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"ftp"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"deploy.json")," config file provides a setting ",(0,l.kt)("inlineCode",{parentName:"p"},"linkCreation")," that offers choices for handling links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"default"'),": Create the links while copying the files; this is the default behavior. Use this setting if your\nfile copy tool can handle links correctly."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"script"'),": A Node.js script called ",(0,l.kt)("strong",{parentName:"li"},"create-links.js")," will be written to the target folder. Use this setting\nto create links on the server machine, after the files have been uploaded."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"none"'),": Do nothing; some other tool may create the links later, based on the ",(0,l.kt)("strong",{parentName:"li"},"deploy-metadata.json")," file.")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"deploy-metadata.json")," file is written to the deployment target folder and contains a full inventory of\nlinks that need to be created. It might look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "scenarioName": "deploy.json",\n  "mainProjectName": "app1",\n  "links": [\n    {\n      "kind": "folderLink",\n      "linkPath": "common/deploy/apps/app1/node_modules/ext-lib7",\n      "targetPath": "common/deploy/common/temp/node_modules/.pnpm/registry.npmjs.org/ext-lib7/1.0.0/node_modules/ext-lib7"\n    },\n    . . .\n  ]\n}\n')),(0,l.kt)("p",null,"If you specify ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "script"')," then ",(0,l.kt)("inlineCode",{parentName:"p"},"rush deploy")," will create the ",(0,l.kt)("strong",{parentName:"p"},"common/deploy")," folder without\nany links. After you have uploaded this folder to your server machine, you can then invoke the script\nto create the links:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Invoke this command on the server machine, after the files have been uploaded\n$ node create-links.js create\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: When using ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "script"'),", the current implementation does not yet generate the\n",(0,l.kt)("strong",{parentName:"p"},"node_modules/.bin")," command-line binaries. If you're interested in contributing a fix, see\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/pull/2010#issuecomment-656900649"},"this PR comment")," for a\nsuggested solution.")),(0,l.kt)("h2",{id:"including-additional-projects"},"Including additional projects"),(0,l.kt)("p",null,"Continuing our example, suppose that we want to include ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," together as a single deployment.\nSince ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," is not a dependency of ",(0,l.kt)("inlineCode",{parentName:"p"},"app1"),", it will not be included automatically. We can consider ",(0,l.kt)("inlineCode",{parentName:"p"},"app1"),' to be\nthe "main project" (listed in ',(0,l.kt)("inlineCode",{parentName:"p"},"deploymentProjectNames"),"), and then declare ",(0,l.kt)("inlineCode",{parentName:"p"},"app2"),' as an "additional project".\nThe config file would look like this:'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"common/config/rush/deploy.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  . . .\n  // The main project\n  "deploymentProjectNames": ["app1"],\n  . . .\n  "projectSettings": [\n    {\n      "projectName": "app1",\n\n      // When deploying "app1", include "app2".  We need to add this explicitly because\n      // "app2" is not a dependency of "app1".\n      "additionalProjectsToInclude": [ "app2" ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"multiple-deployments-using-the-same-config-file"},"Multiple deployments using the same config file"),(0,l.kt)("p",null,"Continuing our example, suppose that instead we want ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," to be deployed separately to two different\nweb servers. If the settings are the same, we can simply add both of them to the ",(0,l.kt)("inlineCode",{parentName:"p"},"deploymentProjectNames")," array,\nlike this:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"common/config/rush/deploy.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "deploymentProjectNames": [ "app1", "app2" ],\n  . . .\n')),(0,l.kt)("p",null,"When performing the deployment, the ",(0,l.kt)("inlineCode",{parentName:"p"},"--project")," parameter selects which project to deploy. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Copy app1 and its dependencies to /mnt/deploy/app1\n$ rush deploy --project app1 --target-folder /mnt/deploy/app1\n\n# Copy app2 and its dependencies to /mnt/deploy/app2\n$ rush deploy --project app2 --target-folder /mnt/deploy/app2\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--target-folder")," parameter copies the files to a custom location instead of the ",(0,l.kt)("strong",{parentName:"p"},"common/deploy/")," default folder."),(0,l.kt)("h2",{id:"multiple-deployments-using-different-config-files"},"Multiple deployments using different config files"),(0,l.kt)("p",null,"Continuing our example, suppose that ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," deploys separately and it requires different settings from ",(0,l.kt)("inlineCode",{parentName:"p"},"app1"),".\nFor example, suppose that we want ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "default"')," for ",(0,l.kt)("inlineCode",{parentName:"p"},"app1"),", but ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "script"')," for ",(0,l.kt)("inlineCode",{parentName:"p"},"app2"),".\nWe will create two config files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/config/rush/deploy.json")," - the default scenario file, which we'll use for ",(0,l.kt)("inlineCode",{parentName:"li"},"app1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/config/rush/deploy-app2-example.json")," -- the ",(0,l.kt)("inlineCode",{parentName:"li"},"app2-example")," scenario, which we will use for ",(0,l.kt)("inlineCode",{parentName:"li"},"app2"))),(0,l.kt)("p",null,"Both of these files can be created using ",(0,l.kt)("inlineCode",{parentName:"p"},"rush init-deploy"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Create common/config/rush/deploy.json\n$ rush init-deploy --project app1\n\n# Create common/config/rush/deploy-app2-example.json\n$ rush init-deploy --project app2 --scenario app2-example\n")),(0,l.kt)("p",null,"After editing ",(0,l.kt)("strong",{parentName:"p"},"deploy-app2-example.json")," to specify ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "script"'),", we can now use the\n",(0,l.kt)("inlineCode",{parentName:"p"},"--scenario")," parameter with ",(0,l.kt)("inlineCode",{parentName:"p"},"rush deploy"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Copy app1 and its dependencies to /mnt/deploy/app1\n# Uses scenario file: common/config/rush/deploy.json\n$ rush deploy --target-folder /mnt/deploy/app1\n\n# Copy app2 and its dependencies to /mnt/deploy/app2\n# Uses scenario file: common/config/rush/deploy-app2-example.json\n$ rush deploy --target-folder /mnt/deploy/app2 --scenario app2-example\n")),(0,l.kt)("p",null,"Note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"--project")," parameter is not needed with ",(0,l.kt)("inlineCode",{parentName:"p"},"rush deploy")," because each config file has only one project\nin its ",(0,l.kt)("inlineCode",{parentName:"p"},'"deploymentProjectNames"')," array."),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../configs/deploy_json"},"common/config/rush/deploy.json")," config file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../commands/rush_deploy"},"rush deploy")," command-line parameters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../commands/rush_init-deploy"},"rush init-deploy")," command-line parameters")))}c.isMDXComponent=!0}}]);