"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[5964],{158:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(6393);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(t),u=r,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5963:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>m,toc:()=>p,default:()=>d});var a=t(1731),r=t(396),o=(t(6393),t(158)),i=["components"],s={title:"Custom commands"},l=void 0,m={unversionedId:"pages/maintainer/custom_commands",id:"pages/maintainer/custom_commands",title:"Custom commands",description:"If your toolchain has special modes or features, you can expose these as custom commands or parameters for the Rush tool.",source:"@site/docs/pages/maintainer/custom_commands.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/custom_commands",permalink:"/pages/maintainer/custom_commands",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/custom_commands.md",tags:[],version:"current",frontMatter:{title:"Custom commands"},sidebar:"docsSidebar",previous:{title:"Enabling Prettier",permalink:"/pages/maintainer/enabling_prettier"},next:{title:"Publishing packages",permalink:"/pages/maintainer/publishing"}},p=[{value:"Defining custom commands and parameters",id:"defining-custom-commands-and-parameters",children:[],level:2},{value:"Using custom commands and options",id:"using-custom-commands-and-options",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If your toolchain has special modes or features, you can expose these as custom commands or parameters for the Rush tool."),(0,o.kt)("h2",{id:"defining-custom-commands-and-parameters"},"Defining custom commands and parameters"),(0,o.kt)("p",null,"These are defined in the config file ",(0,o.kt)("strong",{parentName:"p"},"common/config/rush/command-line.json"),". Your config file should conform to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/master/apps/rush-lib/src/schemas/command-line.schema.json"},"command-line.schema.json")," schema. Consider this sample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/command-line.schema.json",\n\n  "commands": [\n    {\n      /**\n       * (Required) Determines the type of custom command.\n       * Rush\'s "bulk" commands are invoked separately for each project.  Rush will look in\n       * each project\'s package.json file for a "scripts" entry whose name matches the\n       * command name.  By default, the command will run for every project in the repo,\n       * according to the dependency graph (similar to how "rush build" works).\n       * The set of projects can be restricted e.g. using the "--to" or "--from" parameters.\n       */\n      "commandKind": "bulk",\n      "name": "import-strings",\n      "summary": "Imports translated strings into each project.",\n      "description": "Requests translated strings from the translation service and imports them into each project.",\n      "enableParallelism": true\n    },\n    {\n      /**\n       * (Required) Determines the type of custom command.\n       * Rush\'s "global" commands are invoked once for the entire repo.\n       */\n      "commandKind": "global",\n\n      "name": "deploy-app",\n      "summary": "Deploys the application",\n      "description": "Run this command to deploy the application",\n\n      "shellCommand": "node common/scripts/deploy-app.js"\n    }\n  ],\n\n  "parameters": [\n    {\n      /**\n       * (Required) Determines the type of custom parameter.\n       * A "flag" is a custom command-line parameter whose presence acts as an on/off switch.\n       */\n      "parameterKind": "flag",\n      "longName": "--ship",\n      "shortName": "-s",\n      "description": "Perform a production build, including minification and localization steps",\n      "associatedCommands": [ "build", "rebuild", "import-strings" ],\n    },\n\n    {\n      "parameterKind": "flag",\n      "longName": "--minimal",\n      "shortName": "-m",\n      "description": "Perform a fast build, which disables certain tasks such as unit tests and linting",\n      "associatedCommands": [ "build", "rebuild" ]\n    },\n    {\n      /**\n       * (Required) Determines the type of custom parameter.\n       * "A "choice" is a custom command-line parameter whose argument must be chosen from a list\n       * of allowable alternatives.\n       */\n      "parameterKind": "choice",\n      "longName": "--locale",\n      "description": "Selects a single instead of the default locale (en-us) for non-ship builds or all locales for ship builds.",\n      "associatedCommands": [ "build", "rebuild", "import-strings" ],\n      "alternatives": [\n        {\n          "name": "en-us",\n          "description": "US English"\n        },\n        {\n          "name": "fr-fr",\n          "description": "French (France)"\n        },\n        {\n          "name": "es-es",\n          "description": "Spanish (Spain)"\n        },\n        {\n          "name": "zh-cn",\n          "description": "Chinese (China)"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Custom commands:")," You can define your own commands that are similar to Rush's built-in command verbs (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"rush build"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rush check"),", etc). There are two kinds:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bulk command:")," These commands run individually for each project in the repo, similar to how ",(0,o.kt)("inlineCode",{parentName:"li"},"rush build")," works. If you set ",(0,o.kt)("inlineCode",{parentName:"li"},'"enableParallelism": true'),", projects can be processed in parallel."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"global command:")," These commands run once for the entire repo, by executing a specified script file.")),(0,o.kt)("p",null,'You can also define your own command-line "parameters". A parameter can be associated with one or more commands via its ',(0,o.kt)("inlineCode",{parentName:"p"},"associatedCommands")," list. You can even associate your custom parameters with Rush's own built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rebuild")," commands. In the above example, we associate the ",(0,o.kt)("inlineCode",{parentName:"p"},"--ship")," parameter with ",(0,o.kt)("inlineCode",{parentName:"p"},"rush build"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rush rebuild"),", and our custom ",(0,o.kt)("inlineCode",{parentName:"p"},"rush import-strings"),"."),(0,o.kt)("p",null,"Currently three kinds of ",(0,o.kt)("inlineCode",{parentName:"p"},"parameterKind")," are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"flag parameter"),': A "flag" is a simple switch such as ',(0,o.kt)("inlineCode",{parentName:"li"},"--ship"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"choice parameter"),': An "choice" requires an additional argument which must come from a list of supported alternatives, for example ',(0,o.kt)("inlineCode",{parentName:"li"},"--locale fr-fr"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"string parameter"),': A "string" can take any string as a value, for example ',(0,o.kt)("inlineCode",{parentName:"li"},"--name my-new-package"),".")),(0,o.kt)("p",null,"More parameter kinds may be supported in the future. (They are parsed using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@microsoft/ts-command-line"},"ts-command-line")," library which supports other parameter kinds that could be exposed.)"),(0,o.kt)("h2",{id:"using-custom-commands-and-options"},"Using custom commands and options"),(0,o.kt)("p",null,"Your custom definitions and their descriptions will be incorporated into Rush's command-line help (when invoked under your repo working folder). Continuing the above example, if we run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush import-strings --help")," we'll now see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Rush Multi-Project Build Tool 5.1.0 - https://rushjs.io\n\nusage: rush import-strings [-h] [-p COUNT] [-t PROJECT1]\n                           [--to-version-policy VERSION_POLICY_NAME]\n                           [-f PROJECT2] [-v] [-s]\n                           [--locale {en-us,fr-fr,es-es,zh-cn}]\n\nRequests translated strings from the translation service and imports them\ninto each project.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -p COUNT, --parallelism COUNT\n                        Specify the number of concurrent build processes The\n                        value "max" can be specified to indicate the number\n                        of CPU cores. If this parameter omitted, the default\n                        value depends on the operating system and number of\n                        CPU cores.\n  -t PROJECT1, --to PROJECT1\n                        Run command in the specified project and all of its\n                        dependencies\n  --to-version-policy VERSION_POLICY_NAME\n                        Run command in all projects with the specified\n                        version policy and all of their dependencies\n  -f PROJECT2, --from PROJECT2\n                        Run command in all projects that directly or\n                        indirectly depend on the specified project\n  -v, --verbose         Display the logs during the build, rather than just\n                        displaying the build status summary\n  -s, --ship            Perform a production build, including minification\n                        and localization steps\n  --locale {en-us,fr-fr,es-es,zh-cn}\n                        Selects a single instead of the default locale\n                        (en-us) for non-ship builds or all locales for ship\n                        builds.\n')),(0,o.kt)("p",null,"How to implement a custom command/parameter? For global commands, Rush simply invokes their ",(0,o.kt)("inlineCode",{parentName:"p"},"shellCommand")," and passes the parameters along. For bulk commands, Rush looks for a corresponding script name in your ",(0,o.kt)("strong",{parentName:"p"},"package.json")," file. Suppose we have something like this:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example/package.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "example",\n  "version": "1.0.0",\n  "main": "lib/index.js",\n  "typings": "lib/index.d.ts",\n  "scripts": {\n    "import-strings": "./node_modules/.bin/loc-importer",\n    "build": "./node_modules/.bin/gulp"\n  }\n}\n')),(0,o.kt)("p",null,"If we run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush import-strings --locale fr-fr"),', then Rush will read the "import-strings" script body and execute it like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./node_modules/.bin/loc-importer --locale fr-fr\n")),(0,o.kt)("p",null,"(Rush directly executes it using your shell; it does not rely on ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run"),".) Since this choice parameter has a default value, if we run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush import-strings"),", then ",(0,o.kt)("strong",{parentName:"p"},"loc-importer")," is executed like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./node_modules/.bin/loc-importer --locale en-us\n")),(0,o.kt)("p",null,"In other words, Rush's custom parameters are simply appended to the ",(0,o.kt)("strong",{parentName:"p"},"package.json"),' script body. This means you may run into trouble if your script body uses shell expressions such as "',(0,o.kt)("inlineCode",{parentName:"p"},"rimraf ./lib && rimraf ./temp"),"\" which don't support these parameters, or need them to be inserted in the middle of the string. This is by design: We don't recommend writing nontrivial build scripts inside a JSON string. Instead, it's better to move this operation into a proper script file that can be commented and reviewed. As your monorepo grows, you'll probably also want to move that script into a reusable library that can be shared across projects."),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../configs/command-line_json"},"command-line.json"))))}d.isMDXComponent=!0}}]);