//installing angular cli
npm install -g @angular/cli  //global intall needs to be done only once no need for every project

//to check if installed 
	ng -v

//to start a new angular app 
	ng new <project name>
	ng new <project name> --sytle=sass //if sass is being used otherwise project is createdd with only css	
// <----all the initial files and boilerpaltes are added to the project folder after creating the new project---->

//<---- the "--flat" flag can be used if a seperate folder is not to be created tthe foldername must be mentioned 
		/*eg*/ng g (c/m/s) foldername/(c/m/s)name --flat ----->
// --routing flag can be used to generate a module for routing
//<----the -m flag can be used to automaticall import the newlyy generated module to the file after the -m flag---->

//genrating a Module in angular-cli
	ng genrate(g shorthand form) module(m shorthand form) <name of the module>
		
//genrating a component in angular-cli
	ng genrate(g shorthand form) component <name of the component>

//generating services and guards from angular-cli
	ng generate service <name of the service>
			
//cd into the project folder

//to start angular app or server
ng serve
ng serve --o // to open automatically in the default browser
ng serve --port <port number>
ng serve --help // a list of all the flags

//testing the app
ng test //opens karma for unit testing
ng e2e // for end to end testing using prrotractor

//deploying in the end of this file 
//<<<<<-----bootstrap css file needes to be added in the .angualr-cli.json file:"../node_modules/bootstrap/dist/css/bootstrap.css" in the apps array
	
				//MODULES

//contains all the impotrs pipes and ccomponents being used in the aapp
// it bootstraps the the root app component 
// the bootstraping is done onl in the root app module
//an module can import another angular module
// ever custom made component, directive and pipe must belong to only one angular module
// in a custom module create only components, directives and pipes no servises guards are be in the custom module
// re-exporting is possible 
//never export a service as they are already shared throughout the app
//if m1(module1) is imported by m2 and has access to c1(component1) if m3 imports m2 m3 doesnt have access to c1 until m2 exports it
//do not add a service to the prroviders arra of a shared module
// the browser module(ie for ngIf nad ngFor) should be imported only in the root-appp module instead we have import the CommonModule

//shared module are used when same components have to be used among many modules
// the componetns can be expoprted byy:
	exports:[export class name of the component]
// the exports array comes under the @NgModule of the shared module


				//COMPONENTS IN ANGULAR

//Component decorator allows you to mark a class as an Angular component
//They provide additional metadata that determines how the component should be processed, instantiated and used at runtime.
//they help in building basic ui
//##<-----different components can be used or rendered in other components by adding the selector tag in the other components components.html----->##
//eg c1 has a selector s1 it must be rendered in app component then <s1></s1> must be typed in app.components.html

//genrating a component in angular-cli
ng genrate(g is the short hand form) component <name of the component>
	
//components structure
import {Component} from '@angular/core'; // importing the component

//makes a class into a component
//this is a decorator. it is defined b adding '@' infront of the 'Component'
@Component({
		selector:'app-root',//any name can be used
		//<---the component.html file can be used to repersent static data through inetpolation data can be displayed from the components.ts--->
		templateURL:'./app.ccomponent.html',// this file has all the html in it <----html,body such tags are not spcified--->
		stylesURLs:['./app.component.css']	
})
//methods and porperties are added here
//<--the AppComponent is added to the module.ts file under bootstrap and declarations
//<---this can be used for data which has to change ie variable the html page can be used to represent static data
//<---function in type script ---> syntax ==>functionname():returnTypeSpecifier{} %%%no function keyword is req---->
export class AppComponent{  
	title:"app works"//text based
	myObj={//using objects
		property1:"some porperty",
		property2:"some other porperty"
	}
	myArr=['val1','val2','val3']//arrays in the 
	
}

//<-----the component is called in the html page with the same name as mentioned in the selector---->
	<app-root></app-root> //this has to be done if the html is written in the components.ts
	//if the html is written in the component.html <app-root>is not needed
	//<---if the component is being routed the above is not needed the page renders automatically---->

//The html part app.component.html -->

	//templates used for ui and defined in the component decorator
	//templates can also be created on the fly with
		<ng template #<id name>> </ng-template> 
	//the template of the componetn can be modified int eh app.componet.html ile of the corresponding componet
	//if only a few lines of html is required the change "templateURL" into "template"
	//add the html in the quotes for single line html
		'<h1> some text</h1>'
	//for multiline html use back ticks(the qoute on the ~ key)
		`
			<h1>some text</h1>
			<h2>some other text</h2>
		`
	
	//to use the code present in the export class AppComponent
	//use interpolation
		//in the app.componet.html -->
		<h1>{{title}}</h1>  //text based as per the above eg
		
		<h1>{{myObj.porperty1}}</h1>//calling the value of a certain property
		//if {{myObj}} is only used it would return [object object]
		//to format the content(text/number) in the '|' pipe operator
		//eg-->
			{{price | currency}} //gives USD 12.5
			{{price | currency:'USD':true}} //$12.5 
		
		//<----NGFOR----->
		//for accessing all the elements in an array "ngFor" is used
		//looping in angular
		//ngFor syntax
			*ngFor="let <itterating variable> of <array name>" 
		// the same as in python
			for <itterating variable> in <array name> 
		<ul>
			<li *ngFor="let arr of myArr">{{arr}}
		</ul>
		
		//if condition
		//ngIf syntax
			*ngIf="<what to check on>;then<some template> else<some other template>" "conditions or text which execute when true"
			<ul>
					<li *ngIf="myArr=='val1'">i am in the array</li> //simple eg 
			</ul>
		
		//adv eg -->
			<ul>
				<li *ngIf="myArr; else elseTemp">i am in the array</li
				<ng-template #elseTemp>i dont exist </ng-template>
			</ul>
		
		/*adv eg with*/ then /*and*/ <div> /*tag*/
			<div *ngIf="myArr; then thenTemp else elseTemp"> //there is no need to add anyy thing in theis it not going get executed"</div>
			<ng-template #thenTemp> i am in the array </ng-template>
			<ng-template #elseTemp>i dont exist </ng-template>
			
			
				//INTERFACE
		// They are like structures in c/c++
		//defined in a seperate ts file
		//interfaces have to be imported for use 
		/*import statement*/import {interface name} from './filename where defined'
		/*syntax*/export interface interface_name{   //the export is optional
				var1 : data_type//definig
				var1 : data_type = value1;//initializing
				var2 : data_type//definig
				var2 : data_type = value1;//initializing  	 //for properrties
				var3 : data_type//definig
				var3 : data_type = value1;//initializing
				method_name(arg_name:data_type):return_type_specifier;	//for methods
			}
		//to use the interface
			var_name : interface_name[]=[{ //the [] after the interface name is used if an array is defined
				//in accordance to the above syntax
				var1:12;
				var2:"hello";
			
			}]

		//an export class is used when the interface uses methods
			export interface interface_name{   //the export is optional
					var1 : data_type//definig
					var1 : data_type = value1;//initializing
					var2 : data_type//definig
					var2 : data_type = value1;//initializing  	 //for properrties
					var3 : data_type//definig
					var3 : data_type = value1;//initializing
					method_name(arg_name:data_type):return_type_specifier;	//for methods
				}
			export class var_name impiliments interface_name{
				constructor(public var1 : data_type
					    public var2 : data_type
					    public var3 : data_type){
					
					method_name(arg_name:datatype):returnTypeSpecifier{
							return this.var1 
					}
				}
			}
									
			
			//LIFECYCLE HOOKS
			onInit,onChanges,onDestroy
		
		
		oninit--->
			//it can be used for any initializations in the component
			//needs to be exported from the @angular/core
		export class classname impliments onInit{
		}//on only adding this err is seen
		ngOnInit():void{ //this removes the error
			console.log("init")//or other functions
		}

		onchanges--->
			//it is triggered only when there is a change in the input or change in the 
			//needs to be exported from the @angular/core
		export class classname impliments onChanges{
		}//on only adding this err is seen
		ngOnChanges():void{ //this removes the error
			this.var1=this.var2*34;//or other functions
		}
		
		
			//CUSTOM PIPES
		//written in the form of a decorator ie @Pipe
		/*syntax---->*/
			@Pipe({
				name:'name of the pipe'
			})			       #Pipe must be added in the end
			export class <name of the pipe Pipe > impliments PipeTransform{
				trabsform(value1:datatypee,value2:string):datatype{
					
				}
			
			}
				//the name export class has to be added in to the modules.ts in the declatrations array
				//to use the custom pipe {{va name | name off the pipe:args }}

			
     			
					//PROPERTY BINDING
			
//transfers data from Component to the view
//used in the template
//there are 3 ways:-
	<img src="{{angularLogo}}"> //<----better---->
	<img[src]="angularLogo">//<<----preffered---->
	<img bind-src="angularLogo">
	
	export class AppComponent{
	angularLogo=<filename>or<url>		
}


				//GETTER AND SETTERS
	//getters are reserved keyword
	//the are written in the export class
	//to get the value from the form in the html
	//syntax --->
		get function_name():returntypespecifier{
			return something 
		}
	//eg
		__listfilter:string='';

		get listFilter():string{
			return this.__listfilter;
		}

	//setters are reserved keyword
	//the are written in the export class
	//used in two way binding to set the value of an other tag in the html uing interpolation of the variable name defined in the getter
	//syntax --->
		set function_name(args_name:datatype){
			do something
		}
	//eg
		set listFilter(value:string){
		      this.__listFilter=value;
		  }

	
	
					//NESTED COMPONENTS
	
			//A new component is created the same way as above
			//the selector from the child component is added to the component.html of the parent coomponent
			// the nested component selector can be placed between a html tag  too
				selector(child):'sc'
				html(parent)
`					<p><sc></sc></p>
		//@INPUT
		//for the child component to accept input from the partent component 
			@Input() //decorator is used
			//eg--->
				selector:'ch'
				export class ChildComponent{      //child component's export class
					@Input() var1:number
				}
				
				<ch [var1]='var2'></ch>  //var2: input var of the parent component

		//@OUTPUT
		// for the child componet to send data to the parent componnent 
		// this is done b the child componrent sending an event
		// EventEmiters can be used to trigger an event
		// syntax --> @Output() //this is a decorator
		//eg with events -->
		/*in child.components.ts*/
			export class childComponent{
				@output() notify:EvenntEmiter<string>=new EventEmiter
				onClick(){
					this.notify.emit("clicked");
				}
			}
		//in the child.component.html
			<div (click)='onClick()'>
				html code
			</div>
		//in the parent.component.html
			<child_selector (notify)='onNotify($event)'>
				
			</child_selector>
		//in the parent.component.ts
			export class paarentcomponent{
				onNotify(message:string):void{
					
				}
			}
			
			
			
					
				//EVENT BINDING
	
	
//changes that occur in the webapp due to the interaction by the user
//such as mouse click double click keypress etc
//opposite to thatt of properrty binding
//in the @Component under the template or in the component html 
	template:
		<button (click)="myEvent($event)">{{showImg ? 'Hide' : 'Show'}} Image</button>//using jquery //#####<-----toogle text------>
		<button (click)='functionname()'>{{showImg ? 'Hide' : 'Show'}} Image</button>//without jquery
		

	export class AppComponet{
	myEvent(event){
		console.log(event)
	}
		
	}


		//TWO WAY BINDING


//##<------ two way event binding written in the components.ts file----->###
//the ngModel directive can be used. syntax=>{(ngModule)}
	//eg <input [(ngModel)]='getter name to be used in the component.ts'> //the name is defined in the html not in the components.ts
	/*in the element which is getting binded*/ <p>{{getter name to be used in the component.ts}}</p>
			// as a value in being inputed the Forms module must be imported in the app.moudles.ts
				/*import statment=>*/ import {FormsModule} from '@angular/forms'
				//add FormsModule into the imports array in the @NgModule

//using jquery
	<input  (input)="myObj.name = $event.target.value" placeholder="enter name">	

// listeners (click,hower,double click)
		@HostListener('click', ['$event.target'])
		    Onclick(btn){
		      	console.log(btn)
		    }
			


				//SERVICES

//reusing codes across different components
//eg for retriving data from db

//generating services from angular-cli
	ng generate service <name of the service>

//if the service can be registered in a component or the module on reistering it in the module makes the service accessible throughout the angular app

//the files related to the service will be generated
//this error would appear service is generated but not provided. The below steps must be done
//click on <name of the service>.service.ts file
//copy the export class name 
//go to the file app.module.ts
/*type:-*/ import {<export class name>} from './<service name>.service'
// under @NgModule in the providers array type the export class name
//to acutally use the service it should be imported to the corresponding file
/*type:-*/import {<export class name>} from './<service name>.service'
//to use the service the export class name is to be typed in the providers array(create this if does not exist) in the component decorator

//the service can be used by the component through dependenc injection
//a constructor is to be defined for using the service
//code in the constructor

consturctor(private psudo_service_var_name:service_export_class name){
	
}

//eg:-
//in the <service name>.service.ts
	@Injectable()
	
	export class <export class name of the service >{
		cars=['c1','c2','c3'];//random array
		myFunction(){
			console.log("this is my car")
		}
		
		
	}


//importing the service to the app.componet.ts file
/*in the*/ export class AppComponent{
	constructor(private <name u want to use to call the service>:<export class name of the service >){
	
	}
	ngOnInit(){             //runs code ever time page loads
		console.log(this.<name u want to use to call the service>.cars)
	}

}

				//OBSERVABLES

	//used for http request
	//they retrive data async so call-back is needed
	// they help in managing async data
	//angular uses RxJS for observables
	//they help in modifing an element with respect to its corresponding  event
	//observables are mostly written in the service	
	//as they are wiritten in the service the need follow the same steps as in the service to call the service in the other component class 
		
			//HTTP
	// eg using th httpclient in angular----> //the httpclient module must be added to the module.ts file under the imports array
		import { HttpClient } from '@angular/common/http' 
		
		@Injectable
		export class ServiceName{
			private _url='url';
		constructor(private _httpClient:HttpClient){}
		getProduct():observable<datatype to format the json response/interface(struct)>{
			return this._httpClient.get<datatype to format the json response/interface(struct)>(this._url);
			}				
		}


			//SUBSCRIBING TO AN OBSERVABLE

	//is done just like a promise but the .then(valFunc,err) is replaced with .subscribe(valFunc,err)
	//subcribe also has a complete func as its 3rd argument .subscribe(valFunc,err,compFunc)
	//it is addedd in the OnInit lifehook




					//ROUTING

//to create an angular app with an routing module
	ng new <app name> --routing
//it component based
//generate a routing component using cli
	ng g c <componrent name> --routing
//this componet selector in app.componet.html

//in the routing component routing file 

//in the router array
	{path:'<pathname>',<component:component to be used>}
	{path:'<pathname>:<property>',component:<component to be used>}
	{path:'<pathname>',redirectTo:'<another pathname>',pathMatch:'full'} //for redirecting
	
	//for route in route
		eg when using db to render the same html but with different comtent
	{path:'<name>',
		component:<component name>, //component name is the name of the componet which contains all the routes
		children:[
			{path:'<property>',componet:<component name>}  //subroutes
		]}

<-----using a href for routing-------->
in the html file whic is being rendered
<a href=""[var name]>="['routing url']">

<-------using routerLinks-------->
//better than <a href>
//in the html element which might be having <a href>
	use the routerLink
		<a routerLink="<path>">some text or any thing else </a>

// in the main app.component.ts file import the routing module
//for the rout to work
	// in the componets which is getting routed's html file 
		<router-outlet></router-outlet>



//components which are getting do not need the selector
//the route module should be imported
	import { RouterModule } from '@angular/router' //add it to the imports in the ngModules.ts under imports array
// in the RouterModule(ie in the import array of the modules.ts)a .for([]) and the routes being used are passed into it

//forRoot is used in the root app module. in a custom made module forChild is used

//eg---->
	RouterrModule.forRoot([	/*url.com/pathname*/
				{path:'pathname',component:component to be used}
				{path:'pathname/:<property>',component:component to be used}
				{path:'',redirectTo:'pathname',pathMatch:'full'}
			
			])
// all the routes have to mentioned in the app.components as a list
   //for paths -->path:'pathname',component:component to be used
	<a[routerLink]="['/route_name']">Name_in_the webpage</a>
   //for paths--->path:'pathname/:<property>',component:component to be used
	/*to use this type of route importing*/ ActivatedRoute from '@angular/router' is needed
	counstructor(private _route:ActivatedRoute){
		console.log(this._route.snapshot.paramMap.get('property_name')) //snapshot get onl get the initial value
										//use of observables is needed if the value changes and doesnot remain the same
	}
	<a [routerLink]:"['/route_name',property_value]">

//to use the routes in the components.html; after the routes are defined type---->
<router-outlet></router-outlet>
// to navigate in the web app the router module is to be imported
	//an instance of it has be created with the help of a constructor
	constructor(private _router: Router){}
	/* if a button is pressed and has to go to a certain page the*/ _router.navigate(['/page']) //is used

	onBack():void{
		this._router.navigate(['page_name'])
	}



				//GUARDS
	
	//they are services therefore @Injectable is used
	//they help in limiting access t conent in a webapp or alerts 
	//such as promting weather the user wants to leave the page with work half done
	//types of gaurds
		canActivate //gaurd navigation to a route
		canDeactivate //gaurd navigation from a route
		Resolve //pre-fetch data before activating a route
		CanLoad //to prevent async routing
	// importing is required for each of the gaurdss from @angular/router
	// they are added in the RouterModle.forRoot([]) under a path
	eg---->
		{path:'route_name',canActivate:[name_of_gaurd_service]}

	eg for canActivate--->
		in module.ts
			{path:'products/:id',
            canActivate:[ProductsGarudService],
              component:ProductDetailComponent}

		@Injectable()
		export class ProductsGarudService implements CanActivate {


		  constructor(private _router:Router) { }

		  canActivate(route: ActivatedRouteSnapshot) :boolean{
		    let id = +route.url[1].path
		    if(isNaN(id) || id<1){
		      alert("invalid id");
		      this._router.navigate(['/products'])
		      return false
		    }
		    return true;
		  }
		}
	
	
				//BUILD

//to analyze source maps use source-map-explorer
	npm install source-map-explorer --save-dev
//to check all the dependencies
 node_modules/ ./binsource-map-explorer dist/<bundle name>.bundle.js

				//DEPLOY

//to deploy app into production 
//first build the app
	ng build--prod //type the command after goingg into the project folder
	//new folder dist is created which has to be used
	// the prod flag uglify, tree shaking(removing unused part of the code),AOT(ahead of time compiling)

	//github pages for deployment. not part of the angular-cli pakage install the package
		npm install angular-cli-gghpages -g 
	//then in the prroject folder
		git init
		git add README.md
		git commit -m "what u did"
		git remot add origin url
		git push -u origin master
	
	//with href
		ng bulid --prod --base-href git repo url/ //add the slash in the end
		ng

		finished deploying

	