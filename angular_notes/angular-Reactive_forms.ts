<----------------------------templating approach-------->
//form model-->where all the info about the form is present such as entered values,fields which have been touched before etc
//the form model is generated automatcally
//all the template related validation such as all the field enterd weather the entered field values are exciding the limit ect.
	//no db related stuff is done in the templates

//eg for template form---->
//------all the code in the component.html file
<form (ngSubmit)="save(<template ref var>)">
	#<template ref var>="ngForm"
	novalidate	//to stop the browser validtion and allow angular's validation
	<fieldset>
		<--------code in between <div> must be repeated for all the fields in the form>
		<div [ngClass]="{'has-error':<form group name>.get(<field name>).<form model property to check>}" >  //touched-->if field is clicked  //valid->if the entered va;ue valid or not
			<label for="<field id name>"> <field name> </label>
			<input id="<same name as field id name>" type="<input type>"
					placeholder="<enter text>"
					required //if the field is a must to fill if not required can be removed
					minlength="<number>" //validators can be skiped if using form builder
					[(ngModel)]="var name" //set any name
					name="<text>"
					#<field var name>="ngModel"/>
					<span *ngIf="<field var name>.touched && <field var name>.errors">
						<error message you want to display>
					</span>
		</div>
	<button type="submit"[disabled]="!<form name>.valid">submit</button>
	</fieldset>
</form>

//create a class in the same folder where the form is present
//in the export class
	//create a constructor pass all the filed in the form as an argument to the constructor and initialize them 
	eg-->
		constructor(
			public firstName:string,
			public age:number
		){}

//in the componet.ts file in the export class--->
	<obj name>: <class name created above> =new <class name as above>
	save(<name of form>:NgForm)

<-------------------------------------------reactive forms---------------------------------->
import { ReactiveFormsModule }   from '@angular/forms';

//in the component.html file
<form (ngSubmit)="<function in component>()" [formGroup]="<form grp name>">
    <fieldset>
      <div [ngClass]="{'has-error': (<form grp name>.get('<field name>').touched || 
                                                <form grp name>.get('<field name>').dirty) &&
                                                !<form grp name>.get('<field name>').valid }">
  
        <label for="<field name>ID"> TableFile </label>
        <input id="<field name>" type="input" placeholder="<value>" formControlName="<field name>" />
  
        <span class="help-block" *ngIf="(<form grp name>.get('<field name>').touched || 
                                                      <form grp name>.get('<field name><field name>').dirty) && 
                                                      <form grp name>.get('<field name>').errors">
          error message
  
           <!-- <span *ngIf="<form grp name>.get('<field name><field name>').errors.required">
                          error message
                      </span>
                      <span *ngIf="<form grp name>.get('<field name>').errors.minlength">
                          error message
                      </span> -->
        </span>
  
      </div>
  
      <button type="submit" [disabled]="!<form grp name>.valid">submit</button>
  
    </fieldset>
  
  </form>

	//if not using formBuilder
	//create a class in the same folder where the form is present
	//in the export class
		//create a constructor pass all the filed in the form as an argument to the constructor and initialize them 
		eg-->
			constructor(
				public firstName:string,
				public age:number
			){}

//in the component.ts file
	import FormGroup and FormControl from @angular/forms
	   //in the export class
		<form group name>: FormGroup //set value here //the form group name => object name in the component.ts
		<obj name><class name from above> = new <class name as above>(); //set obj name here //use this if NOT using form Builder

	  //in the onitit  the content in this cat as the form model
		this.<from group name> = new FormGroup({
				<field name 1>:new FormControl(),  //for default value just add it as an arg
				<field name 2>:new FormControl(),  //the names of the field should be the same as in the class created above
				<field name 3>:new FormControl(true) //default value bool value can be used for radio or checkbox etc
			})

		//using formBuilder instead of FormGroup   
		//code in the oninit
		//first finish the code needed in the component.ts given below under the form builder menu
		this.<form group name>= this.<var name used in the constructor>.group({
			<field name1>:'',  //if no validators
			<field name2>:['',[//validators here]],  //using validators
			<field name 3>:true
			
		})
			
		
	//<---------form builder-------->
	//it is a service so created as an angular service and imported in the porviders array
	import {FormBuilder} from @angular/forms

	//in the component.ts file
	constructor(private <var name>:FormBuilder){} //set <var name> here
	//after the constructor
	this.<form group name>= this.<var name>.group({
		<field name1>:'',  //initializing
		<field name2>:''
	})

	//validators with form builder
	this.<form group name>= this.<var name>.group({
		<field name1>:['',[//validators come here]], 
		<field name2>:['',[//validators come here]]
	})


	
//Logic after submit button is clicked 
	//in component.ts outside oninit function
		<function>(){
		//to grab values
			//grabbing a specific values
				const <var name> = this.<formgroup name>.get('<field name>');
			//grabbing all values
				const <obj name> = this.<formgroup name>.value
		//logic
	}
	


//<----------setValue and patchValue------>
//written in th componet.ts file outside of the onit as these are triggered after an event
//<----setValue>
//<-----setValue ==) to set values for the whole form----->
//different from the class created as the porperties are inherited from it... this is not an alternate 
//in the component.ts
this.<controller name>.setvalue({
	<field name1>:value1,
	<field name2>:value2
})

//<-----patchValue----->
//<-----patchValue ==) to set values for a part of the form----->

this.<controller name>.patchvalue({
	<field name1>:value1,

})




//<----------------------validators---------------------->
	//come in the second element of the array along side the field name
	Validators.required, Validators.minLength(<number>)
  //for regex based validators
  	Validators.pattern('<regex command>')
				 
						  
//setvalidators
	//to change the validation set based on user options
	//if email and phone number option exist and user choose email phone number is not a required field but email is
  //taking the same email and phone eg -->
	  <function name>(<arg name>:<db>):<return type spec>{
		if(<arg name>==='email'){
			this.<form group>.get('<field name>').setValidators(<validator>)
			
		}
	    	else{
			this.<form group>.clearValidators()
	    	}
		this.<form group>.updateValueAndValidity()
	
	}
						  
//<-------custom validators------->
import AbstractControl from @angular/forms
//before the export class in the component.ts
	function <custom validator function name>(<arg name>:AbstractControl){[key:<datatype>:<return type>] | null{   //null if the validator is true
		//logic for the validator
		//to access data or which the validator is for such the form field --> c.value
		//if the validator rule is broken
		return {'<validation rule>:<return type same as above>'}  //if boolean return true if broken
		//if validator rules are not broken then return null
	}
}

//<------validator's with parameters------>
import ValidatorFn from @angular/forms
function <function name>(<args>:<dataype>):ValidatorFn{
	return (<arg name>:AbstractControl):
					{[key:<datatype>:<return type>] | null => {   //null if the validator is true
		//logic for the validator
		//to access data or which the validator is for such the form field --> c.value or c.get('<form field name>').value
		//if the validator rule is broken...checking values of the rules can be set with the args
		return {'<validation rule var>:<return type same as above>'} //validation rule var is set here give an name here //if boolean return true if broken
		//if validator rules are not broken then return null
	}

}

<---------to use the custom validator--------->
	
// in the formbuilder
//without args
<form field name> : ['<initial value>',[<custom validator function name>]]
//with args	
	<form field name> : ['<initial value>',[<custom validator function name>(<args>)]]
	

<--------croos field validators----------->
	//used to check if password/ username/ email etc is right or wrong or for fields like conform password email etc
	//using it. in the form buider array --->
	//is typed in the main form builder array as a nested element not as a seperatly 
		<nested form group name>: this.<psudo form controller name>.group({ 
			<form field name1> :['',validators]
			<form field name2>: ['',validators]
		})
	
	//in the html form
		<form>
			form content
			<div formGroupName='<form group name form above>'>
				<tag fromControlName='<form field name1>'/>
				<tag fromControlName='<form field name2>'/>
			</div>
			other form content
		</form>
	//to access the form builder attrs like touched dirty value etc
		<Form Group Name>.get('<nested form group name>.<form field name>')
	
// to check if the values are same across the fields
	//in the nested form group
		if(<arg from custom validator function>.get('<form field name1>').value !== <arg from custom validator function>.get('<form field name2>').value ){
		return {'<validation rule var>':true} //meaning rule is broken it is an error 
		}
	return null //else returns null the rule is not broken
	
//in the form builder array -->
	<nested form group name>: this.<psudo form controller name>.group({ 
			<form field name1> :['',validators]
			<form field name2>: ['',validators]
		},{validator:<custom validator function name>(args)})  //args if params are passed to the function
		






