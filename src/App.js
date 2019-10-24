import React from 'react';
import './App.css';
import Jumbotron_BS from './Jumbotron_BS';
import MenuNav from './MenuNav';
import DynamicTable from './CreateTable'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Navbar'
import Map from './Directions'

import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      meals: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Sides",
        "Dessert"
      ],
      name: "Will",
    }
    this.Navbar_Items = [
      { name: "Menu", URL: '#' , target: '_SELF'},
      { name: "Map", URL: '#' , target: '_SELF'},
      { name: "Contact", URL: '#' , target: '_SELF'}]

    }
  

  componentDidMount() {
    
    // Check if menu data already exists in local storage.
    //If so, store data in local storage in menu state, else pull from API


    this.apiPull();
    
    this.setState({
      openMeal: "Breakfast"
    });
  }
  
  apiPull() {
    if (!localStorage.getItem('Breakfast')) {
      console.log('no data');
      this.state.meals.map(MenuItems => {
        console.log(MenuItems);
        axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
          .then(items => {
            let data = items.data.menu_items.map(item => {
              // console.log(item);
              let price = item.description.charCodeAt(0);
              // console.log(price);
              let title = item.description.split(" with");
              let description = item.description.split("with ");
              return { price, title, description }
              
            });
          localStorage.setItem(MenuItems, JSON.stringify(data));
          
          

          this.setState({meal: "Breakfast"})
          });
          
      }
      );
    }
}

  
  render () {
          
    return localStorage.length > 0 ? (
      <div className="App">
        <Jumbotron_BS title="Sub-Standard" description="The standard in sub sammichs" />
        <Navbar NavbarItems={this.Navbar_Items} />
        <MenuNav ChangeState={this.state} />
        <Map />
      </div>
      
    ) :
    (<div>
      Loading
    </div>)
  
  }
  render(){
    return localStorage.length > 0 ? (
      <div className="App">
        <Jumbotron_BS title="Sub-Standard" description="The standard in sub sammichs" />
        <Navbar NavbarItems={this.Navbar_Items} />
        <MenuNav ChangeState={this.state} />
        <Map />
      </div>
      
    ) :
    (<div>
      Loading
    </div>)
  }
  ;
}

export default App;
