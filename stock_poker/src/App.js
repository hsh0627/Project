import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
          
        <Footer />
      </Router>
      
    </div>
  );
}
