import React from 'react';
import './App.css';
import Jumbotron_BS from './Jumbotron_BS';
import MenuNav from './MenuNav';
import DynamicTable from './CreateTable'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = [
      { name: "Breakfast"},
      { name: "Lunch"},
      { name: "Dinner"},
      { name: "Sides"},
      { name: "Dessert"}
    ]
  }

  componentDidMount() {
    
    // Check if menu data already exists in local storage.
    //If so, store data in local storage in menu state, else pull from API

    if (localStorage.getItem('Breakfast')) {
      this.state.map(MenuItems_Local => {
      JSON.parse(localStorage.getItem(MenuItems_Local.name));
        
      })
    } else {
      this.state.map(MenuItems => {
        axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
          .then(items => {
            localStorage.setItem(MenuItems.name, JSON.stringify(items.data.menu_items))

            });
          

      })
    }
    console.log(this.state)
  }
  
  render() {
    return (
      <div className="App">
        <Jumbotron_BS title="Sub-Standard" description="The standard in sub sammichs" />
        <MenuNav />
        <DynamicTable MealName = {this.state}/>
      
      </div>
    )
  };
}

export default App;
