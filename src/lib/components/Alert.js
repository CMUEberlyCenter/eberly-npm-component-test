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
      message: props.message,
      state: props.state,
      type: "alert"
    };

    this.onOk=this.onOk.bind(this);
    this.onYes=this.onYes.bind(this);
    this.onNo=this.onNo.bind(this);
  }

  /**
   *
   */
  onOk () {
    console.log ("onOk ()");

    this.setState ({state: "hidden"});
  }

  /**
   *
   */
  onYes () {
    console.log ("onYes ()");

    this.setState ({state: "hidden"});
  }

  /**
   *
   */
  onNo () {
    console.log ("onNo ()");

    this.setState ({state: "hidden"});
  }    
  
  /**
   *
   */
  render () {
    let buttonBar;
    let classes="eberly-alert";

    if (this.state.type==="alert") {
      buttonBar=<div className="eberly-alert-buttonbar"><button className="eberly-alert-button" onClick={this.onOk}>Ok</button></div>;
    } else {
      if (this.state.type==="confirm") {
        buttonBar=<div className="eberly-alert-buttonbar"><button className="eberly-alert-button" onClick={this.onYes}>Ok</button><button onClick={this.onNo}>Cancel</button></div>;
      } else {
        buttonBar=<div className="eberly-alert-buttonbar"><button className="eberly-alert-button" onClick={this.onOk}>Ok</button></div>;
      }
    }

    if (this.state.state==="shown") {
      classes=classes + " " + "eberly-alert-shown";
    } else {
      classes=classes + " " + "eberly-alert-hidden";
    }

    return (<div className={classes}>
        <div className="eberly-alert-content">{this.state.message}</div>
        {buttonBar}
        </div>);
  }
}
 
export default Alert;
