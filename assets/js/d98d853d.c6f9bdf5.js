"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6339],{5242:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(3929);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(6346),r=n(8155),o=(n(3929),n(5242)),i=["components"],s={title:"Enabling the build cache (experimental)"},l=void 0,c={unversionedId:"pages/maintainer/build_cache",id:"pages/maintainer/build_cache",title:"Enabling the build cache (experimental)",description:"Rush has always supported an incremental analyzer that",source:"@site/docs/pages/maintainer/build_cache.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/build_cache",permalink:"/pages/maintainer/build_cache",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/build_cache.md",tags:[],version:"current",frontMatter:{title:"Enabling the build cache (experimental)"},sidebar:"docsSidebar",previous:{title:"Deploying projects",permalink:"/pages/maintainer/deploying"},next:{title:"NPM registry authentication",permalink:"/pages/maintainer/npm_registry_auth"}},u={},p=[{value:"Enabling the local disk cache",id:"enabling-the-local-disk-cache",level:2},{value:"Configuring project output folders",id:"configuring-project-output-folders",level:2},{value:"Testing the build cache",id:"testing-the-build-cache",level:2},{value:"Enabling cloud storage",id:"enabling-cloud-storage",level:2},{value:"User authentication",id:"user-authentication",level:2},{value:"CI setup",id:"ci-setup",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rush has always supported an ",(0,o.kt)("a",{parentName:"p",href:"../../advanced/incremental_builds"},"incremental analyzer")," that\nenables ",(0,o.kt)("inlineCode",{parentName:"p"},"rush build")," to skip projects whose input files have not changed since the last build. (This optimization\ncan also be used with custom commands by enabling the ",(0,o.kt)("inlineCode",{parentName:"p"},"incremental")," flag in ",(0,o.kt)("strong",{parentName:"p"},"custom-commands.json"),".) However,\nthe build output is not saved anywhere, so generally a full rebuild is still required when switching to another branch."),(0,o.kt)("p",null,"Rush's experimental new ",(0,o.kt)("strong",{parentName:"p"},"build cache")," improves on this by creating a tar archive of each project's build outputs.\nThe archive is cached so that later, if ",(0,o.kt)("inlineCode",{parentName:"p"},"rush build")," can find a match in the cache, it can extract the archive\ninstead of building that project. This can provide dramatic speedups, for example reducing a 30 minute build time\nto 30 seconds. The cache key is a hash of the source files and NPM dependencies, following the\n",(0,o.kt)("a",{parentName:"p",href:"../../advanced/incremental_builds"},"same basic rules")," as the incremental analyzer."),(0,o.kt)("p",null,"The build cache archives are stored in two places:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"In a cache folder on your local disk.")," This way you can switch between different branches without\nlosing your incremental build state. You can even configure a centralized folder to be shared between\nmultiple enlistments on your machine. The default location is ",(0,o.kt)("strong",{parentName:"p"},"common/temp/build-cache"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"In a cloud-hosted storage container. (Optional)")," In a typical setup, the CI system would be configured to write\nto cloud storage, and individual users are granted read-only access. For example, each time a PR is merged into\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch, the CI system builds that baseline and uploads it to cloud storage. Even for a user who\nis doing ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone")," for the first time, their ",(0,o.kt)("inlineCode",{parentName:"p"},"rush build")," will be very fast."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Build caching is considered a replacement for build skipping, so once enabled, commands that support\nincremental building will begin saving and restoring from the cache instead of the previous "skipping"\nbehavior. Projects that haven\'t been configured for build caching, or intentionally disable build\ncaching, will continue to use the default build skipping behavior.')),(0,o.kt)("h2",{id:"enabling-the-local-disk-cache"},"Enabling the local disk cache"),(0,o.kt)("p",null,"The build cache feature is enabled using the ",(0,o.kt)("a",{parentName:"p",href:"../../configs/build-cache_json"},"build-cache.json"),"\nconfig file. You can copy the template from the website or use ",(0,o.kt)("inlineCode",{parentName:"p"},"rush init")," to create this file."),(0,o.kt)("p",null,"To enable the basic local disk cache, add these two settings:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"common/config/rush/build-cache.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  . . .\n  /**\n   * (Required) EXPERIMENTAL - Set this to true to enable the build cache feature.\n   *\n   * See https://rushjs.io/pages/maintainer/build_cache/ for details about this experimental feature.\n   */\n  "buildCacheEnabled": true,\n\n  /**\n   * (Required) Choose where project build outputs will be cached.\n   *\n   * Possible values: "local-only", "azure-blob-storage", "amazon-s3"\n   */\n  "cacheProvider": "local-only",\n\n  . . .\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Upgrade note:")," Early releases of this feature were enabled using the ",(0,o.kt)("inlineCode",{parentName:"p"},'"buildCache": true')," setting\nin ",(0,o.kt)("strong",{parentName:"p"},"experiments.json"),". This has been superseded by ",(0,o.kt)("inlineCode",{parentName:"p"},'"buildCacheEnabled"')," in ",(0,o.kt)("strong",{parentName:"p"},"build-cache.json"),".")),(0,o.kt)("h2",{id:"configuring-project-output-folders"},"Configuring project output folders"),(0,o.kt)("p",null,"With only this change, if you run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush rebuild --verbose"),", you will see this warning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Project does not have a rush-project.json configuration file, or one provided by a rig,\nso it does not support caching.\n")),(0,o.kt)("p",null,"The build cache needs to know which folders should be stored in the tar archive. Those details vary between\ntoolchains, and are thus configured separately for each project using the\n",(0,o.kt)("a",{parentName:"p",href:"../../configs/rush-project_json"},"rush-project.json")," config file."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"<","your-project",">","/config/rush-project.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  . . .\n\n  /**\n   * Specify the folders where your toolchain writes its output files.  If enabled, the Rush build cache will\n   * restore these folders from the cache.\n   *\n   * The strings are folder names under the project root folder.  These folders should not be tracked by Git.\n   * They must not contain symlinks.\n   */\n  "projectOutputFolderNames": ["lib", "dist"]\n  . . .\n}\n')),(0,o.kt)("p",null,"It's recommended to use a ",(0,o.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/heft/rig_packages/"},"rig package")," to avoid having\nto copy this file into each project folder."),(0,o.kt)("h2",{id:"testing-the-build-cache"},"Testing the build cache"),(0,o.kt)("p",null,"Now you should see projects being cached as shown in this sample log output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ rush rebuild --verbose\n\n. . .\n\n==[ example-project ]==============================================[ 1 of 5 ]==\n\nThis project was not found in the build cache.\n\nInvoking: heft test --clean\n\n. . .\n\nCaching build output folders: lib\n\nSuccessfully set cache entry.\n\n"example-project" completed successfully in 11.27 seconds.\n')),(0,o.kt)("p",null,"When we run the same command a second time, Rush extracts the archive instead of invoking the build task:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ rush rebuild --verbose\n\n. . .\n\n==[ example-project ]==============================================[ 1 of 5 ]==\n\nBuild cache hit.\n\nClearing cached folders: lib, dist\n\nSuccessfully restored output from the build cache.\n\nexample-project was restored from the build cache.\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"rush rebuild")," will not read from cache. To disable writing from cache during ",(0,o.kt)("inlineCode",{parentName:"p"},"rush rebuild"),", set the\n",(0,o.kt)("a",{parentName:"p",href:"../../configs/environment_vars"},(0,o.kt)("inlineCode",{parentName:"a"},"RUSH_BUILD_CACHE_WRITE_ALLOWED"))," environment variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("p",null,"By default, the cached tar archives are stored under your ",(0,o.kt)("strong",{parentName:"p"},"common/temp/build-cache")," folder\n(and thus will be cleaned by ",(0,o.kt)("inlineCode",{parentName:"p"},"rush purge"),"). It is safe to delete these files."),(0,o.kt)("h2",{id:"enabling-cloud-storage"},"Enabling cloud storage"),(0,o.kt)("p",null,"Currently the ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheProvider")," setting provides three choices:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"local-only"'),": no cloud storage; archives are only kept on a local disk folder"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"azure-blob-storage"'),": Microsoft Azure ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/"},"blob storage container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"amazon-s3"'),": Amazon ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html"},"S3 bucket"))),(0,o.kt)("p",null,"(The above providers are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/tree/master/rush-plugins"},"modeled as Rush plugins"),".\nCustom build cache storage providers can be implemented in the same way.)"),(0,o.kt)("p",null,"As one example, here's how to configure an Azure blob container:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"common/config/rush/build-cache.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  . . .\n  /**\n   * (Required) EXPERIMENTAL - Set this to true to enable the build cache feature.\n   *\n   * See https://rushjs.io/pages/maintainer/build_cache/ for details about this experimental feature.\n   */\n  "buildCacheEnabled": true,\n\n  /**\n   * (Required) Choose where project build outputs will be cached.\n   *\n   * Possible values: "local-only", "azure-blob-storage", "amazon-s3"\n   */\n  "cacheProvider": "azure-blob-storage",\n\n  /**\n   * Use this configuration with "cacheProvider"="azure-blob-storage"\n   */\n  "azureBlobStorageConfiguration": {\n    /**\n     * (Required) The name of the the Azure storage account to use for build cache.\n     */\n    "storageAccountName": "example",\n\n    /**\n     * The name of the container in the Azure storage account to use for build cache.\n     */\n    "storageContainerName": "my-container"\n\n    /**\n     * If set to true, allow writing to the cache. Defaults to false.\n     */\n    "isCacheWriteAllowed": false\n\n  . . .\n')),(0,o.kt)("p",null,"Note that we have set ",(0,o.kt)("inlineCode",{parentName:"p"},'"isCacheWriteAllowed": false')," to prevent regular users from writing to the container.\n(Later, we will use an environment variable to override this for our CI job.)"),(0,o.kt)("h2",{id:"user-authentication"},"User authentication"),(0,o.kt)("p",null,"If security is not a priority for your repo, you can simplify user setup by configuring your storage container\nto allow unauthenticated anonymous access. The container is accessed via an HTTPS URL containing randomized\nhashes which are difficult to guess without access to your Git repo. This provides rudimentary\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security_through_obscurity"},"security through obscurity"),"."),(0,o.kt)("p",null,"A more security-conscious organization however will prefer to require authentication even for read-only access.\nRush provides a ",(0,o.kt)("a",{parentName:"p",href:"../../commands/rush_update-cloud-credentials"},"rush update-cloud-credentials"),"\ncommand to make this easy for users to set up:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ rush update-cloud-credentials --interactive\n\n\nRush Multi-Project Build Tool 5.45.6 (unmanaged) - https://rushjs.io\nNode.js version is 12.20.1 (LTS)\n\n\nStarting "rush update-cloud-credentials"\n\n \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n \u2551             To sign in, use a web browser to open the page              \u2551\n \u2551     https://microsoft.com/devicelogin and enter the code XAYBQEGRK      \u2551\n \u2551                            to authenticate.                             \u2551\n \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n')),(0,o.kt)("p",null,"The credentials are stored in the user's home directory under ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.rush-user/credentials.json"),"."),(0,o.kt)("h2",{id:"ci-setup"},"CI setup"),(0,o.kt)("p",null,"In a typical configuration, users have read-only access and the cache is populated by an automation account;\nfor example, a CI job that builds your ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch after each PR is merged. In our example above, the\n",(0,o.kt)("inlineCode",{parentName:"p"},'"isCacheWriteAllowed": false')," setting is what prevents users from writing to the cache. The CI job can\noverride this by setting the ",(0,o.kt)("a",{parentName:"p",href:"../../configs/environment_vars"},"RUSH_BUILD_CACHE_WRITE_ALLOWED"),"\nenvironment variable, and by providing credentials for the CI environment in the\n",(0,o.kt)("a",{parentName:"p",href:"../../configs/environment_vars"},"RUSH_BUILD_CACHE_CREDENTIAL")," environment variable."),(0,o.kt)("p",null,"For Azure Blob Storage, this must be a SAS token serialized as query parameters.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview"},"this article")," for details\nabout SAS tokens. You can obtain a SAS token via the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal"},"Settings > Access keys"),"\npage for your storage account."),(0,o.kt)("p",null,"If your CI system uses a custom build orchestrator with Rush\n(for example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/BuildXL"},"BuildXL"),"),\nthe ",(0,o.kt)("a",{parentName:"p",href:"../../commands/rush_write-build-cache"},"rush write-build-cache")," command enables you to\npopulate a cache entry from a specific project's output folders."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The build cache feature is still under development. Feedback is welcome!"),(0,o.kt)("p",{parentName:"blockquote"},"Some relevant GitHub issues to follow:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/issues/2393"},"Build cache feature #2393")," - the original feature spec"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/issues/2642"},"Build Cache: split apart RUSH_BUILD_CACHE_WRITE_CREDENTIAL #2642")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/issues/2618"},"Allow project config to specify non-build-related files #2618")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/issues/2622"},'"tar" exited with code 1 while attempting to create the cache entry #2622')))))}d.isMDXComponent=!0}}]);