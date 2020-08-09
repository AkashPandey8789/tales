import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  componentDidMount(){
    axios.get('http://terriblytinytales.com/test.txt').then(response=>{
      console.log(response)
    })
  }
  render(){
    return(
          <h1>Hello</h1>
      )
  }
}

export default App;
