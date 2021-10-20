import React, { Component } from 'react';

import './styles/main.scss';

/**
 * 
 */
class Alert extends Component {

  /**
   * 
   */
  constructor (props) {
    super(props);

    this.state = {
      title: window.location.href + " says:",
      message: props.message,
      state: "hidden",
      type: props.type,
      ownUpdate: false
    };

    this.onOk=this.onOk.bind(this);
    this.onYes=this.onYes.bind(this);
    this.onNo=this.onNo.bind(this);
  }

  /**
   * Return null to indicate no change to state.
   */
  static getDerivedStateFromProps(nextProps, state) {
    //console.log ("getDerivedStateFromProps ()");

    if (!state.ownUpdate) {
      if (state.state !== nextProps.state) {
        return {
          state: nextProps.state,
          type: nextProps.type,
          ownUpdate: false
        };
      }
    } else {
      return {
        ownUpdate: false
      }; 
    }
    
    return null;
  }  

  /**
   *
   */
  onOk () {
    console.log ("onOk ()");

    this.setState ({state: "hidden", ownUpdate: true});
  }

  /**
   *
   */
  onYes () {
    console.log ("onYes ()");

    this.setState ({state: "hidden", ownUpdate: true});
  }

  /**
   *
   */
  onNo () {
    console.log ("onNo ()");

    this.setState ({state: "hidden", ownUpdate: true});
  }    
  
  /**
   *
   */
  render () {
    let buttonBar;
    let alertClass="eberly-alert";
    let classes=alertClass;

    if (this.state.type==="alert") {
      buttonBar=<div className="eberly-alert-buttonbar"><button className="eberly-alert-button" onClick={this.onOk}>Ok</button></div>;
    } else {
      if (this.state.type==="confirm") {
        buttonBar=<div className="eberly-alert-buttonbar"><button className="eberly-alert-button" onClick={this.onYes}>Ok</button><button className="eberly-alert-button" onClick={this.onNo}>Cancel</button></div>;
      } else {
        buttonBar=<div className="eberly-alert-buttonbar"><button className="eberly-alert-button" onClick={this.onOk}>Ok</button></div>;
      }
    }

    if (this.state.state==="shown") {
      classes=alertClass + " " + "eberly-alert-shown";
    } else {
      classes=alertClass + " " + "eberly-alert-hidden";
    }

    return (<div className={classes}>
        <div className="eberly-alert-title">{this.state.title}</div>
        <div className="eberly-alert-content">{this.state.message}</div>
        {buttonBar}
        </div>);
  }
}
 
export default Alert;
