import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Manage from './Manage';
import TipJar from './TipJar';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      user: '',
      tip: '',
    };
  }

  componentDidMount() {
    let path = window.location.pathname

    if (path.startsWith("/tips/")) {
      let tip = path.split("/tips/")[1]
      this.setState({tip: tip})
      console.log("set tip address")
    }
  }

  render() {
    return (

      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <Route exact path="/" component={Home}/>
              <Route path="/manage" component={Manage}/>
              <Route path="/tips" component={TipJar}/>
            </header>
          </div>          
        </div>
      </Router>
      
    );
  }
}

export default App;
