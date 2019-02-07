//generating a service using cli
ng g s <service name>

//after the service is generated in the module.ts file
import {<service export class name>} from '<file location>'
//in the @Ngmodule in the module.ts file in the providers array add the export class name in it

//in the service.ts file under the export class write all the functions etc which the service should use
	@Injectable
	export class <service class name>(){
		<function name>(<args>):Observable<return type>{

		}

	}

//to use the service
// in the component.ts file import the service file
//in the constructor
		constructor(private<psudo service class name>:<service export class name>){}
			
	//in the export class
		this.<psudo service class name>.<function name>().subscribe(
		data=> //do somthing. data---> is the itterating var or the value stored after the callback funcion
		err=> //do somthing
		()=>//do somthing  can b used to log once the service ran
		)
			
			
<-------HTTP------->
	create=>http.post
	read=>http.get
	update=>http.put
	delete=>http.delete
	
//in the app.module.ts file
	import {HttpClientModule} from '@angular/common/http'
	add the http client in the imports array

//in the service.ts
	import {HttpClient} from '@angular/common/http'  //not HttpClientModule
	
//to use the http client module
	constructor(private <psudo name>:HttpClient){}
	
<----observable----->
//in the service.ts file
	import {Observable} from 'rxjs/observable'
	//in the function
		<function name>():Observable<<datatype>>{
	}
	
//to use the observable it has to be subscribed
		//in the component.ts file
			this.<service name>.<function in the service being used>():Observables<datatype>
				.subscribe(
					(<arg var>:<data type>)=>this.<var in component>=<arg var>
					(err:any)=>console.log(err),
			)
			
<--using http in the service.ts---->
	//in the service.ts
		<function name>:<data type>{
			this.http.<method like get post><datatype to return>('<url to CRUD>')
			
		}
			
	
<-----------------Promises------------------>
//can be used insead of observables
	<function name>(<args>:<data type>):Promises<resturn type specifier>{
		return new Promise((resolve,reject)=>{
			//code here
			resolve(<data the same type as return type specifier>) //if code executed
			reject() //if code failed 	
			})
}		
//using promise 
		//in the component.ts file
		use ".then" instead of ".subscribe" //the rest is the same
		//for error handling after .then
		.catch(
			err=>console.log(err)
		)

<----RxJs operators-------------->
	in the service.ts file
	import operator name from 'rxjs/operators'
			
	<---pipe---->
		<---map---->
			<function name>(<arg>):Observable<data type>{
				return something
					.pipe(   //returned   //type needed
						map(<var name>=><<data type>>{})	   
					)
			}
		eg-->
		.pipe(
			.map(returned_book)=><book_old>{
					bookTitle:returned_book.title
			}
		)
	
	
	
	
<-------http error handling--------->
//using rxjs
		//in the service. ts file--->
			import catchError from 'rxjs/operators'
			import ErrorObservable from 'rxjs/Observable/ErrorObservable'
			import HttpErrorResponse
		//in the function to check for error handling
			//after the return statment
				.pipe(
					catchError(err=>this.<error function handler name>(err))
				)
		private <error function handler name>(err:HttpErrorResponse):Observable<data type>{	
			assign the values of the class(data type) with the error
		
		}
		
		
<----resolvers-------->
		//fetching data before the route is clicked
		//preventd routing to comonents with error
		
	//resolvers are services
		ng g s <service name>
	//in the module.ts
			import {<resolver service name>} from '<path>'
			//add it in the providers array
		
//in the routing module.ts
					{path:'<url>',component:<component name>,resolve:{<psudo router name>:<resolver name created above>}} 
		//create a new service in the folder being used
	//additional imports in the service.ts of the resolver--->
		import Resolver,ActivatedRoutSnapshot,RouterStateSnapshot from '@anglar/router'
		import the service which it is acting as a resolver
		import {of} from 'rxjs/observabe/of'  //helpls in reating a new observable that can be returned t the component
		
	//in the export class
		export class<resolver service name> impliments Resolve<data type>{
			
			constructor(privatev<psudo service name>:<binding service name>){}
		
			<resolve function name>(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<data type>{
			 return this.<bining service name>.<function in the service getting binded>()
			 
			}
			
		}
		
//in the component.ts file
	the function on which the resolver is used can be deleted in the components file
	import ActivatedRoute from '@angular/router'
			 
	constructor(private<psudo name>:ActivatedRoute){}
	let <function name>:<data type>=this.route.snapshot.data['<psudo service name given in the routes array>']

			 
<--------interseptor--------->
//services which implimnet the httpInterceptor
//manipulate the http req,res before they are sent to the server or client
//adding headers to all req,client side caching, reporting progress events,logging
	//importing to module.ts under the providers array
			 import {HTTP_INTERCEPTORS} from '@angular/common/http'
			 {provide:HTTP_INTERCEPTORS,useClass:<name of the interceptor export class>,multi:true}
	//create a new class file
			//additional import 
			 import {HttpEvent,HttpInterceptor,HttpHandelr,HttpRequest} from '@angular/common/http'
			export class <interceptor name> implements HttpInterceptors{
			 intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
			 		const <cloned req var name> =req.clone(//changes http request here) to check the available opt select alt+f12
			 	
			 	return next.handle(<cloned req var name >)
			 	.pipe(
			 			.tap(event=>{	//tap operator helps in accessing the response
			 				if(event.type === HttpEventType.Response){
			 					/modify HttpResponse here	
			 				}
			 			})
			 		)
			 	}
			 }
			 


<---http interceptor chacing------->
	  //create a new service.ts file
	 //in the service.ts file--->
			 import HttpResponse from '@angular/cpmmon/http'
			 //in the export class
			 <object name>:<data type>={} //empty obj
			
			 //adding items into the obj
			 <function name>(<arg1>:<data type>,<url arg>:HttpResponse<data type>){
			 	this.<obj name>[<property name in obj>] = <url arg>
			 }
			 
			 //getting elements from cache
			 <function name>(<arg1>:<data type>):HttpResponse<data type> | undefiend {
			 	return this.<obj name>[<property name>]
			 }
			 
			 //to reset the cache
			 	//reset a specific property
					<function name>(<arg1>:<data type>) {
					return this.<obj name>[<property name>]=undefined
				
			 	//to reset the whole cache
			 		<function name>(<arg1>:<data type>) {
			 			this.<obj name>={}
			 
			 //create a new service.ts file
			 	import {HttpEvent,HttpInterceptor,HttpHandelr,HttpRequest} from '@angular/common/http'
			 	import tap from rxjs/operators
			 	import of from rxjs/observable/of
			 	import the previous service
			 //in the constructor
			 	constructor(private <puso service name>:<service name of previous service>){}
			 <function name>(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
			 
			 if(req.method !== 'GET') {
			      console.log(`Invalidating cache: ${req.method} ${req.url}`);
			      this.<puso service name>.<function name>();
			      return next.handle(req);
			    }

			    // attempt to retrieve a cached response
			    const <res var name>: HttpResponse<any> = this.<puso service name>.<get function>(req.url);

			    // return cached response
			    if <res var name> {
			      console.log(`Returning a cached response: ${<res var name>.url}`);
			      console.log(<res var name>);
			      return of(<res var name>);
			    }

			    // send request to server and add response to cache
			    return next.handle(req)
			      .pipe(
				tap(event => {
				  if (event instanceof HttpResponse) {
				    console.log(`Adding item to cache: ${req.url}`);
				    this.<psudo service name>.put(req.url, event);
				  }
				})
			 
			 
	
	
