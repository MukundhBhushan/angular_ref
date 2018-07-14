//pakages installation
    npm install @ngrx/store --save

<-----in app.module.ts---->
    //import statement
        import {StoreModule} from '@ngrx/store'

    //under the imports array 
        imports:[
            StoreModule.forRoot{<Reducers>,{}}
        ]

//under the src/app folder create new folders called models, actions, reducer
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
            
            
            export class <class name similar to function name for crud 1 > implements Action {
                readonly type = <function name for crud>  //type used refrence function in switch
            
                constructor(public payload: <data type / interface name>) {} //constructor not needed if is not passed
            }
            
            export class <class name similar to function name for crud 2> implements Action {
                readonly type = <function name for crud>
            
                constructor(public payload: <data type / interface name>) {}
            }

            export type Actions= <class name similar to function name for crud 1 > | <class name similar to function name for crud 2 >
    
    //in actions --->
        //naming convention <actions name>.actions.ts
        //in <actions name>.actions.ts --->
            import { Action } from '@ngrx/store'
            import { <interface name> } from '<interface name> model file location'
            import * as <psudo action name> from 'action file name'

        const initialState: Tutorial = {
            name: 'Initial <some name>',
            url: 'http://<url>'
        }

        export function <reducer name>(state: <data type / interface name>[] = [initialState], action: <psudo action name>.Actions){
            switch(action.type){
                case <psudo action name>.<function name for crud in actions.ts file>:
                    return [...state, action.payload];

                case <psudo action name>.<function name for crud in actions.ts file>:
                    return [...state, action.payload];
                
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
                tutorial: <reducer name>
            })
