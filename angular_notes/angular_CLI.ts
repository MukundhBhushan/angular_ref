//installing the CLI
npm install -g @angular/cli
// to find version
ng -v

//to search for a command in the documentation
ng doc <command(like component)>

 
<-------------------------------------cd in to the project folder for all the step after this-------------------------------------------->


<-------creating a new project------->
ng new <project name>
ng new <project name> --routing // to create the app which uses routing
ng new <project name> --skip-install //creates the files and skips all the npm installs
ng new <project name> --dry-run //shows all the files going to be created, none of the files get created
ng new <project name> --style scss // for creating sass instead of plain css
ng new --help //for help

<----adding package------>
ng add <package name>

//making angular project into pwa
 ng add @angular/pwa
//adding bootstrap
 ng add @ng-bootstrap/schematics
//for more
 https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4

<---------------blueprints------------------------>
<------modules------>
ng g module <module name>
ng g m <modul name>
 
<------component------>
ng g component <componet name>
ng g c <component name>
ng g c <component name> -m folder/module name // to pace this in the custom made module not the app module file
ng g component <componet name> --flat //does  ot create a new folder for the generaated omponet files
ng g c <component name> --inline-template (alias -it) //will not create he html file for the component
ng g c <component name> --inline-style (alias -is) //will not create he html file for the component
ng g c <componet name> --spec false //the spec file will not be generated default it is true
ng g c <component name> -d //dry run 
ng g -ve Emulated //view encapsulation 
ng g -cd OnPush 

<------gaurd------>
ng g gaurd <gaurd name>
<------service------>
ng g service <service name> //the service is generated but not provided
ng g service <service name> -m <filename> // service is generated and provided in the specifed file
 
<------class enumerator interface pipes------>
ng g class <foldername/classname> //creates a filename.ts file in the foldername
ng g e <foldername/filename> //generates enumerator
ng g i <foldername/interfacename>
ng g pipe <pipe name>
ng g pipe <pipe name> init-caps

<-----------------start the angular server--------->
ng serve //development server 
ng serve -o //opens the angular app in default browser
ng serve -p <port number> //serving on <port number> instead of the default
ng serve --live-reload (alias -lr) //to restart automatically when changes to the angularfiles are made
ng serve -lr false //to stop live reload
ng serve --sl //to serve on https
ng serve --pc //proxy configuration
ng serve --prod //production server


<-------------routing---------------->
//creating a module with routing
ng g m <module name> --routing



<----------depoyment and testing -------->
//linting code 
  ng lint
  ng lint --format stylish //lint and color codes the err message
  ng li --fix //fixes the fixable syntax correction
  ng lint --help
// testing the code 
  ng test
  ng e2e //end to end test
  
  
  <-----------buliding--------------------->
// after buildng a dist folder is created
//files in the dist folder
 inline.bundle - webpack runtime
 main.bundle - app code
 polyfill.bundle - pollyfills for running in different browser
 styles.bundle - css sass
 vendor.bundle - all packages installed

//to analyze source maps use source-map-explorer
 npm install source-map-explorer --save-dev
//to check all the dependencies
 node_modules/ ./binsource-map-explorer dist/mai.bundle.js

// for building app for development
ng build //no parameters
//for production build 
ng build --prod

//for sourcemaps
ng build -sm
//watch and rebuild
ng build -w
//build environment 
ng build -e
//build target
ng build -t

<---------------------testing----------------------->
<------unit test----->
ng test
//to run isolated unit test(runnig test for a single component)
//go to spec file of the file being test 
//in the beforeEach add
schemas:{NO_ERROR_SCHEMA} // this must be imported import {NO_ERROR_SCHEMA} from @angular/core

//code coverage
ng test -cc

//for single test run used in CI (cont integration devops) 
ng test -sr

<------end to end test----->
//use this command as the default all the required options are availabe
ng e2e

//to enable debugging the other features are the same
ng e2e -ee

