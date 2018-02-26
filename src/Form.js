import React, { Component } from 'react';

export default class Form extends Component {
  
  render() {
    let state = this.props.stateObj;
	
	return (
      <div className = "formParent">
		<div className = "formGroup">
			<h2 className = "formTitle"> BASIC DETAILS </h2>
			<h3 className = "formSubTitle"> STEP 2 </h3>
			
			<input id = "name" type = "text" className = "nName" value = {state.obj["name"]} placeholder = "Enter Name" onChange = {(e) => this.props.onInputChange(e)} onKeyDown = {() => this.props.onKeyDown()} />
			<span className = "error">{state.errorMsgs.name}</span>
			
			<input id = "number" type = "number" className = "mNumber" maxLength = "10" value = {state.obj["number"]} placeholder = "Enter Mobile Number" onChange = {(e) => this.props.onInputChange(e)} onKeyDown = {() => this.props.onKeyDown()} />
			<span className = "error">{state.errorMsgs.number}</span>
			
			<button type = "previous" className="prevBtn" onClick = {() => this.props.updateComponent("moveNext", false)}> Previous </button>
			<button type = "submit" className="subBtn" onClick = {() => this.props.onSubmitBtn()}> Submit </button>
		</div>
      </div>
    );
  }
}