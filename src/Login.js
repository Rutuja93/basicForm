import React, { Component } from 'react';;

export default class Login extends Component {
  
  render() {
	let state = this.props.stateObj;  
	
    return (
      <div className = "formParent">
		<div className = "formGroup">
			<h2 className = "formTitle"> CREATE YOUR ACCOUNT </h2>
			<h3 className = "formSubTitle"> STEP 1 </h3>

			<input id = "email" className = "eEmail" type = "email" value = {state.obj["email"]} placeholder = "EMAIL" onChange = {(e) => this.props.onInputChange(e)} onKeyDown = {() => this.props.onKeyDown()} />
			<span className = "error">{state.errorMsgs.email}</span>
			
			<input id = "pwd" className = "pPwd" type = "password" value = {state.obj["pwd"]} placeholder = "PASSWORD" onChange = {(e) => this.props.onInputChange(e)} onKeyDown = {() => this.props.onKeyDown()} />
			<span className = "error">{state.errorMsgs.pwd}</span>
			
			<input id= "chkPwd" className = "pPwd" type = "password" value = {state.obj["chkPwd"]} placeholder = "CONFIRM PASSWORD" onChange = {(e) => this.props.onInputChange(e)} onKeyDown = {() => this.props.onKeyDown()}/>
			<span className = "error">{state.errorMsgs.pwdNtMtch}</span>
			<button type = "next" className="nextBtn" onClick = {() => this.props.onNextBtn()}> Next </button>
		</div>
      </div>
    );
  }
}