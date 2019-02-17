import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

            <div className="App">
              <div class="column">
                <div class="menuHeader">Does a menu need a header?</div>
                <ul class="menuItem">
                  <li>Chris</li>
                  <li>Anica</li>
                  <li>Will</li>
                  <li>John</li>
                  <li>James</li>
                </ul>
              </div>
              <div class="App-header">
                  <header>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Watts Family Site
                    </p>
                  
                  </header>
              </div> 
              Powered by React    
            </div>
    );
  }
}

export default App;
