import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import logo from './logo.svg';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from  './dir/Home';
import About from './dir/About';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <div className="content-wrapper">
              <section className="content-header">
                <Switch >
                  <Route path="/" component={Home} exact></Route>
                  <Route path="/about" component={About} ></Route>
                </Switch>
              </section>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
