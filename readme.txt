npm install -g aurelia-cli (get the latest cli)
au new
selected the following
    Name: kendo-systemjs-cli
    Platform: Web
    Bundler: Aurelia-CLI
    Loader: SystemJS
    Transpiler: Babel
    Markup Processor: None
    CSS Processor: None
    Unit Test Runner: None
    Integration Test Runner: None
    Editor: Visual Studio Code
    Features: navigation

// check version

	PS D:\Frameworks\au-cli\kendo-systemjs-cli> nvm list

    11.10.0
  * 10.15.0 (Currently using 64-bit executable)
    8.9.4
    6.11.2
PS D:\Frameworks\au-cli\kendo-systemjs-cli> npm install jspm -g
C:\Program Files\nodejs\jspm -> C:\Program Files\nodejs\node_modules\jspm\jspm.js
+ jspm@0.16.54
added 317 packages from 215 contributors in 93.68s
PS D:\Frameworks\au-cli\kendo-systemjs-cli> jspm install npm:@progress/kendo-ui

warn Running jspm globally, it is advisable to locally install jspm via npm install jspm --save-dev.


PS D:\Frameworks\au-cli\kendo-systemjs-cli> jspm install npm:@progress/kendo-ui

warn Running jspm globally, it is advisable to locally install jspm via npm install jspm --save-dev.

Would you like jspm to prefix the jspm package.json properties under jspm? [yes]:no
Enter server baseURL (public folder path) [./]:Terminate batch job (Y/N)?
^C
PS D:\Frameworks\au-cli\kendo-systemjs-cli> jspm install npm:@progress/kendo-ui

warn Running jspm globally, it is advisable to locally install jspm via npm install jspm --save-dev.

Would you like jspm to prefix the jspm package.json properties under jspm? [yes]:
Enter server baseURL (public folder path) [./]:
Enter jspm packages folder [.\jspm_packages]:
Enter config file path [.\config.js]:
Configuration file config.js doesn't exist, create it? [yes]:
Enter client baseURL (public folder URL) [/]:
Do you wish to use a transpiler? [yes]:
Which ES6 transpiler would you like to use, Babel, TypeScript or Traceur? [babel]:
     Looking up npm:@progress/kendo-ui
     Updating registry cache...
     Downloading npm:@progress/kendo-ui@2019.1.320
     Looking up npm:jquery
     Downloading npm:jquery@3.0.0
ok   Installed npm:jquery@3.0.0 (3.0.0)
     Looking up github:jspm/nodelibs-process
     Looking up npm:process
ok   Installed github:jspm/nodelibs-process@^0.1.0 (0.1.2)
     Downloading npm:process@0.11.10
ok   Installed npm:process@^0.11.0 (0.11.10)
     Looking up github:jspm/nodelibs-vm
     Looking up github:jspm/nodelibs-assert
     Looking up github:jspm/nodelibs-fs
     Looking up npm:assert
ok   Installed github:jspm/nodelibs-assert@^0.1.0 (0.1.0)
     Looking up npm:vm-browserify
ok   Installed github:jspm/nodelibs-vm@^0.1.0 (0.1.0)
     Looking up npm:util
ok   Installed npm:assert@^1.3.0 (1.4.1)
     Looking up github:jspm/nodelibs-buffer
     Looking up npm:inherits
     Looking up npm:indexof
ok   Installed npm:util@0.10.3 (0.10.3)
ok   Installed npm:vm-browserify@0.0.4 (0.0.4)
ok   Installed npm:indexof@0.0.1 (0.0.1)
ok   Installed npm:inherits@2.0.1 (2.0.1)
ok   Installed github:jspm/nodelibs-fs@^0.1.0 (0.1.2)
     Looking up npm:buffer
ok   Installed github:jspm/nodelibs-buffer@^0.1.0 (0.1.1)
     Downloading npm:buffer@5.2.1
     Looking up npm:base64-js
     Looking up npm:ieee754
     Looking up github:jspm/nodelibs-util
     Downloading npm:base64-js@1.3.0
     Downloading npm:ieee754@1.1.12
ok   Installed npm:buffer@^5.0.6 (5.2.1)
ok   Installed npm:ieee754@^1.1.4 (1.1.12)
ok   Installed npm:base64-js@^1.0.2 (1.3.0)
ok   Installed github:jspm/nodelibs-util@^0.1.0 (0.1.0)
ok   Installed @progress/kendo-ui as npm:@progress/kendo-ui@^2019.1.320 (2019.1.320)

     The following new package versions were substituted by install deduping:

       util 0.10.4 -> 0.10.3

ok   Install tree has no forks.
     Looking up loader files...
       system-polyfills.src.js
       system.js
       system-csp-production.js
       system-csp-production.js.map
       system.js.map
       system.src.js
       system-csp-production.src.js
       system-polyfills.js.map
       system-polyfills.js

     Using loader versions:
       systemjs@0.19.46
     Looking up npm:babel-core
     Looking up npm:babel-runtime
     Looking up npm:core-js
     Looking up github:jspm/nodelibs-path
     Looking up github:systemjs/plugin-json
     Looking up npm:path-browserify
ok   Installed github:jspm/nodelibs-path@^0.1.0 (0.1.0)
ok   Installed github:systemjs/plugin-json@^0.1.0 (0.1.2)
ok   Installed npm:path-browserify@0.0.0 (0.0.0)
ok   Installed babel as npm:babel-core@^5.8.24 (5.8.38)
ok   Installed babel-runtime as npm:babel-runtime@^5.8.24 (5.8.38)
ok   Installed core-js as npm:core-js@^1.1.4 (1.2.7)
ok   Loader files downloaded successfully

ok   Install complete.
PS D:\Frameworks\au-cli\kendo-systemjs-cli>    