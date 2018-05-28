import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Home from "./components/Home";
import  News from "./components/News";
import  About from "./components/About";
import CustomNavbar from "./components/CustomNavbar";



class App extends Component {
   render(){
       return(
           <Router>
                <div>
                    <CustomNavbar />
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/news" component={News}></Route>
                </div>
           </Router>
       );
   }

}

export default App;