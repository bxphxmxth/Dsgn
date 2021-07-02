// import { render } from '@testing-library/react';
import './App.css';
import Header from "./Header";
import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import Contacts from './components/Contacts';
class App extends React.Component{


  // state = {
  //   presentation: [
  //     {
  //       id: 1,
  //       nom: "mcDonald",
  //       prenom: "Josh",
  //       age: 24,
  //     },
  //     {
  //       id: 2,
  //       nom: "aze",
  //       prenom: "uuu",
  //       age: 28,
        
  //     },
  //     {
  //       id: 3,
  //       nom: "smith",
  //       prenom: "steve",
  //       age: 35,
  //     },
  //   ]
  // }

  // rajeunir = () =>{
  //   let nvState = this.state.presentation.map((utilisateur) => {
  //     utilisateur.age -= 5;
  //     return utilisateur.age;
  //   });
  //   this.setState({
  //     nvState
  //   });
  // }

  render(){

    

    return (
      <div className="App">
      <Header/>
      <div className="container">
        <Contacts />
      </div>
      
      
      </div>
    );

  }
}

export default App;
