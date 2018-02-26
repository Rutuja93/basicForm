import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Form from './Form';
import './css/pageCss.css';
import registerServiceWorker from './registerServiceWorker';

// define a global object so we can populate data again on previous btn click
let state = {
			obj: {
				email: '',
				pwd: '',
				chkPwd: '',
				name: '',
				number: ''
			},
			errorMsgs: {
				email: '',
				pwd: '',
				pwdNtMtch: '',
				name: '',
				number: ''
			},
			isEmailValid: false,
			isPwdValid: false,
			isPwdSame: false,
			moveNext: false
		}

export default class Main extends Component {
  
    constructor() {
		super();
		//
		this.state = state;
	}
	
	onInputChange = (e) => {
		let type, val, bool = false;
	  
		// checks for the current input change
		switch(e.target.id) {
			case "email":
				type = e.target.id;
				val = e.target.value;
				break;
			case "pwd":
				type = e.target.id;
				val = e.target.value;
				break;
			case "chkPwd":
				type = e.target.id;
				val = e.target.value;
				break;
			case "name":
				type = e.target.id;
				val = e.target.value;
				bool = true;
				break;
			case "number":
				type = e.target.id;
				val = e.target.value;
				bool = true;
				break;
			default:
				type = "";
				val = "";
				break;
		}
		
		// updates login information into an object
 		state.obj[type] = val;
		
		this.updateComponent("moveNext", bool)
	}
	
	onKeyDown = () => {
	  let errMsgs = this.state.errorMsgs;
	  //
	  for(var i in errMsgs) {
		errMsgs[i] = ''
	  }
	}
 
	onNextBtn = () => {
	  
		this.validateLoginForm();
	}
  
	validateLoginForm = () => {
		let emailInput = state.obj["email"], 
			pwdInput = state.obj["pwd"],  
			checkPwd = state.obj["chkPwd"], 
			errorMsgs = this.state.errorMsgs,
			isEmailValid = this.state.isEmailValid, 
			isPwdValid = this.state.isPwdValid,
			isPwdSame = this.state.isPwdSame;
		
		// check for appropriate error messages on Login Screen
		isEmailValid = this.checkEmail(emailInput);
		errorMsgs.email = (!isEmailValid) ? "Please enter valid email" : "";
		//
		isPwdValid = (pwdInput.length >= 6);
		errorMsgs.pwd = (!pwdInput.length) ? "Please Enter Password" : (!isPwdValid) ? "Password is too short" : "";
		//
		isPwdSame = (pwdInput.length && pwdInput === checkPwd);
		errorMsgs.pwdNtMtch = (!checkPwd.length) ? "Please Enter Password" : (!isPwdSame) ? "Password do not match" : "";
		
		// check for valid condition to move next step
		this.updateComponent("moveNext", (isEmailValid && isPwdValid && isPwdSame))
	}
	
	// validates email input
	checkEmail = (email) => {
		let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		  
		return reg.test(email);
	}
	
	// on submit in step 2 just updated data with alert
	onSubmitBtn = () => {
		
		this.validateForm();
	}
	
	// validates basic form inputs
	validateForm = () => {
		let nameInput = state.obj["name"],
			numberInput = state.obj["number"], 
			errorMsgs = this.state.errorMsgs
		//
		if(nameInput.length > 0 && numberInput.length === 10) {
			
			alert("Form Submitted Successfully")
		} else {
			
			errorMsgs.name = (nameInput.length === 0) ? "Please Enter Name" : ""; 
			errorMsgs.number = (numberInput.length < 10) ? "Please Enter Valid Mobile Number" : ""; 
			this.updateComponent("moveNext", true);
		}
	}
	
	// updates the respective component
	updateComponent = (stateToChange, bool) => {
		this.setState({[stateToChange]: bool})
	}
	
	// loads the respective component
	loadCurrComponent = () => {
		let component;
		//
		if(!this.state.moveNext) {
			
			component = <Login onInputChange = {this.onInputChange} onNextBtn = {this.onNextBtn} stateObj = {state} onKeyDown = {this.onKeyDown} />
		} else if(this.state.moveNext) {
			
			component = <Form stateObj = {state} updateComponent = {this.updateComponent} onInputChange = {this.onInputChange} onSubmitBtn = {this.onSubmitBtn} onKeyDown = {this.onKeyDown} />
		}
		
		return component;
	}
	
	render() {
		
		return (<div>
				{this.loadCurrComponent()}
			</div>
		)
	}
}
 
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
