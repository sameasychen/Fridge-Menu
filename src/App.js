import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import IngredientPick from './Component/IngredientPick';
import TodayMenu from './Component/TodayMenu';
import MenuDetail from './Component/MenuDetail';


import menus from './FoodData.json';




class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      TodayMenu: [],

    }


  }

  updateMenus = () => {

    let loadDish = new Promise((resolve, reject) => (
      setTimeout(() => (
        resolve("success")
      ))
    ))

    loadDish.then(

      this.setState(() => ({
        TodayMenu: menus
      }))

    )

  }



  render() {

    return (
      <div className="App">

        <Route exact path='/' render={() => (
          <div className="row">
            <IngredientPick updateMenus={this.updateMenus} />
            <TodayMenu menus={this.state.TodayMenu} />
          </div>
        )} />


        <Switch>
          <Route path="/MenuDetail/:foodID" children={<MenuDetail menus={this.state.TodayMenu}/>} />
        </Switch>

      </div >
    );
  }
}

export default App;
