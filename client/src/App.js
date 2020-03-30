import React from 'react';
import logo from './logo.svg';
import './App.css';
import WorldCupPlayerCard from "./components/WorldCupPlayerCard"
import Toggle from './components/Toggle'





class App extends React.Component{
   constructor(){
     super();
     this.state={
       data:[]
     }
   }
   componentDidMount(){
    fetch('http://localhost:5000/api/players')
     .then(res=> res.json())
     .then(data=>{ 
     console.log(data)
      this.setState({data: data})
    })
   }

   render(){
     return <>
        
        <Toggle />
        <WorldCupPlayerCard data={this.state.data}/>
            
       </>
   }
}

export default App;
