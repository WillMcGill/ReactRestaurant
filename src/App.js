import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Jumbotron_BS from './Jumbotron_BS';
import axios from 'axios';
import Axios from 'axios';

class App extends React.Component {
 
  componentDidMount(){
    Axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
      .then (items => {
        console.log(items.data.menu_items.description)
      }
      );

    
  }
  
  render (){
    return(
      <div className = "App">
     <Jumbotron_BS title = "Sub-Standard" description = "The standard in sub sammichs"/>
     </div>
    )
  };
}

export default App;
