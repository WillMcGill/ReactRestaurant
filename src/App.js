import React from 'react';
import './App.css';
import Jumbotron_BS from './Jumbotron_BS';
import Card_w_Image_BS from './Card_w_Image_BS.js';

import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = [
      {name: "Breakfast"},
      {name: "Lunch"},
      {name: "Dinner"},
      {name: "Sides"},
      {name: "Dessert"}
    ]
  }
  
   componentDidMount(){

     
     this.state.map(MenuItems => {
       axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
       .then (items => {
         localStorage.setItem(MenuItems.name, JSON.stringify(items.data.menu_items))
       })
      ;
     })
     
   
  }

  render() {
    return (
      <div className="App">
        <Jumbotron_BS title="Sub-Standard" description="The standard in sub sammichs" />
      </div>
    )
  };
}

export default App;
