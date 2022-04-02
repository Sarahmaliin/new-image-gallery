import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Search from './modules/Search';
import { API_KEY, SECRET } from './secret/secret'


function App() {
  console.log(API_KEY, SECRET)
  return (
    <div className="App">
      <h1>hello</h1>
      < Search />
    </div>
  );
}

export default App;
