A test component and template for building React based component
libraries. This template provides a potential alternative for the
windows.alert() and window.confirm() functions, as they might appear in
react


### Install

Install using `npm install eberly-npm-component-test`

### Usage 

In a React app, use the Alert component:  

`import { Alert } from 'eberly-npm-component-test'`


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

