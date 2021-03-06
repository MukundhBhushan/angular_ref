//pakages installation
    npm install @ngrx/store --save
    npm install @ngrx/effects --save 


<-----in app.module.ts---->
    //import statement
        import {StoreModule} from '@ngrx/store'

    //under the imports array 
        imports:[
            StoreModule.forRoot{<Reducers>,{}}
        ]

//under the src/app folder create new folders called models, actions, reducer,effects
    //in models --->
        //create a new ts file for each new model
        //naming convention <model name>.model.ts
            //in <model name>.model.ts file --->
                export interface <interface name>{
                    <porperty name1> : <datatype>
                    <porperty name2> : <datatype>
                    <porperty name3> : <datatype>
                }
    
    //in actions --->
            //naming convention <actions name>.actions.ts
            //in <actions name>.actions.ts --->
            import { Injectable } from '@angular/core'
            import { Action } from '@ngrx/store'
            import { <interface name> } from '<interface name> model file location'
            
            //db action
            export const <function name for crud> /*eg:record_ADD*/  = '[<interface name>] <function name>'
            export const <function name for crud> /*eg:record_DEL*/  = '[<interface name>] <function name>'
                //<function name> -->
                    Add
                    Remove
                
            
            export class <class name similar to function name for crud 1 > implements Action {
                readonly type = <function name for crud>  //type used refrence function in switch
            
                constructor(public payload: <data type / interface name>) {} //constructor not needed if is not passed
            }
            
            export class <class name similar to function name for crud 2> implements Action {
                readonly type = <function name for crud>
            
                constructor(public payload: <data type / interface name>) {}
            }

            export type Actions= <class name similar to function name for crud 1 > | <class name similar to function name for crud 2 >
    
    //in reducer --->
        //naming convention <reducer name>.reducer.ts
        //in <reducer name>.reducer.ts --->
            import { Action } from '@ngrx/store'
            import { <interface name> } from '<interface name> model file location'
            import * as <psudo action name> from 'action file name'

        const initialState: Tutorial = {
            name: 'Initial <some name>',
            url: 'http://<url>'
        }
        export type Actions = <psudo action name>.All
        export function <reducer name>(state: <data type / interface name>[] = [initialState], action: Actions){
            switch(action.type) {
                case <psudo action name>.<export const function name in Action.ts>:
                    return {...state, action.payload,<property>:<value>};
                
                // Add this case:
                case <psudo action name>.<export const function name in Action.ts>: //delete
                    state.splice(action.payload, 1)
                    return state;
                    
                default:
                    return state;
            }
        }
    
    <----state file----->
    //create a file app.state.ts
        import { <interface name> } from '<interface name> model file location'

        export interface AppState {
            readonly <var name>: <imported interface name>[];
        }
    
    <---------app.module.ts-------->
        //imports
            import { StoreModule } from '@ngrx/store';
            import { <reducer name> } from './reducers/tutorial.reducer';

        //in imports array
            StoreModule.forRoot({
                <name>: <reducer name as in action.ts>
            })

            <---------------CRUD--------------->

//create component
//new component for each

    //read component--->
        import { Observable } from 'rxjs/Observable';
        import { Store } from '@ngrx/store';
        import { <model interface name> } from '<model <interface name> location>';
        import { AppState } from '<appstate file location>';

        export class <component name> implements OnInit {

            // Section 1
            <var name>: Observable<<data type/interface>[]>;
        
            // Section 2
            constructor(private store: Store<AppState>) { 
            this.<var name> = store.select('<name as in app.module.ts under forroot>');
            }
        
            ngOnInit() {}
        
        }
    
    //write component--->
        //create component
        import { Component, OnInit } from '@angular/core';
        import { Store } from '@ngrx/store';
        import { AppState } from '<AppState file location>';
        import { <model interface name> } from '<model interface name file location>'
        import * as <psudo name for action> from 'action file location';
        import { Observable } from 'rxjs/Observable';

        export class CreateComponent implements OnInit {

            constructor(private store: Store<AppState>) {}
          
            <function name>(arg1,arg2) {  
              this.store.dispatch(new <psudo name for action>.<export class name to execute>({
                  value1:arg1,
                  value1:arg2
              }) )
            }
          
            ngOnInit() {
            }
          
          }
                    //to call function in html
                    <button (click)="<function name>(args.value)">Add</button>

    //in the effects folder
    //naming convention <effect name>.effect.ts
    //in <effect name>.effect.ts --->
        import { Injectable } from '@angular/core';
        import { HttpClient } from '@angular/common/http';
        import { Action } from '@ngrx/store';
        import { Actions, Effect, ofType } from '@ngrx/effects';
        import { Observable, of } from 'rxjs';
        import { catchError, map, mergeMap } from 'rxjs/operators';

        @Injectable()
            export class <effect name> {
                constructor(private action:Action,private db:<db instance>){}

                @Effect()
                <var name>:Observable<Action> = this.actions.ofType()


             
            }
