import React from 'react';
import './App.css';
import Jumbotron_BS from './Jumbotron_BS';
import Card_w_Image_BS from './Card_w_Image_BS.js';

import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = [
      { name: "Breakfast", Menu: "" },
      { name: "Lunch", Menu: "" },
      { name: "Dinner", Menu: "" },
      { name: "Sides", Menu: "" },
      { name: "Dessert", Menu: "" }
    ]
  }

  componentDidMount() {

    // Check if menu data already exists in local storage.
    //If so, store data in local storage in menu state, else pull from API

    if (localStorage.getItem('Breakfast')) {
      this.state.map(MenuItems_Local => {
        this.state.Menu = JSON.parse(localStorage.getItem(MenuItems_Local.name));
      })
    } else {
      this.state.map(MenuItems => {
        axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
          .then(items => {
            localStorage.setItem(MenuItems.name, JSON.stringify(items.data.menu_items))
            this.state.Menu = items.data.menu_items;
          });
      })
    }
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
