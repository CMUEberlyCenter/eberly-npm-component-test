import React, { Component } from 'react';

import Alert from './lib/components/Alert';

import './App.css';

class App extends Component {

  constructor (props) {
    super (props);

    this.state = {
      showAlert: "hidden",
      showConfirm: "hidden",
      type: "alert"
    };

    this.onShowAlert=this.onShowAlert.bind(this);
    this.onShowConfirm=this.onShowConfirm.bind(this);
  }

  onShowAlert () {
    console.log ("onShowAlert ()");
    this.setState ({showAlert: "shown", type: "alert"});
  }

  onShowConfirm () {
    console.log ("onShowConfirm ()"); 
    this.setState ({showConfirm: "shown", type: "confirm"});    
  }

  render () {
    return (
      <div className="main">
        <Alert type={this.state.type} state={this.state.showAlert} message="This is an windows.alert() replacement component. Please see the documentation for props and events"/>

        <button className="demo-button" onClick={this.onShowAlert}>Show alert</button>
        <button className="demo-button" onClick={this.onShowConfirm}>Show confirm</button>
      </div>
    );
  }
}

export default App;
