import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import IngredientPick from './Component/IngredientPick';
import TodayMenu from './Component/TodayMenu';
import MenuDetail from './Component/MenuDetail';


// import menus from './FoodData.json';

const axios = require('axios').default;


class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      TodayMenu: [],
      tempMenu: [],


    }
    // this.updateMenuDetail = this.updateMenuDetail.bind(this)

  }




  updateMenuDetail = (idList) => {


    const menusList = this.state.tempMenu.slice(0);


    for (let i = 0; i < idList.length; i++) {
      // console.log(idList[i]);

      axios({
        method: 'get',
        url: `https://api.spoonacular.com//recipes/${idList[i]}/information`,
        params: {
          apiKey: 'b2abb3f6ede848d782b9ebdff044e335',
          includeNutrition: false
        }

      })
        .then(

          (res) => {

            // let menuDetail ='theDetail';

            menusList[i].menuDetail = res.data;


            // menusList[i].menuDetail = [];

            // menusList[i].menuDetail.push(res.data);


            // if (res.data.anlyzedInstructions.length !== 0) {
            //   menusList.push(res.data)
            // }

            // if (res.data.anlyzedInstructions[0].steps) {
            //   menusList.push(res.data)
            // }

            // continue
          })

    }

    this.setState(() => ({
      TodayMenu: menusList
    }));


  }




  updateMenus = (ingredientStr) => {

    axios({
      method: 'get',
      url: 'https://api.spoonacular.com/recipes/findByIngredients',
      params: {
        apiKey: 'b2abb3f6ede848d782b9ebdff044e335',
        ingredients: 'bacon, butter, cheese',
        // ingredients: ingredientStr,

        number: 2,
        limitLicense: true,
        ranking: 3,
        ignorePantry: true
      }

    })
      .then(

        (res) => {

          // let parseText = JSON.parse(res)

          // console.log(parseText)

          this.setState(() => ({
            tempMenu: res.data
          }));

          let idList = res.data.map(data =>
            data.id

          );

          this.updateMenuDetail(idList)

        })

      .catch(err => {
        console.log(err);

      }
      )

    // let loadDish = new Promise((resolve, reject) => (
    //   setTimeout(() => (
    //     resolve("success")
    //   ), 3000)
    // ))

    // loadDish.then(

    //   this.setState(() => ({e
    //     TodayMenu: menus
    //   }))

    // )

  }

  render() {

    console.log(this.state.TodayMenu);
    console.log(this.state.tempMenu);



    return (
      <div className="App">


        <Route exact path='/' render={() => (
          <div className="row">
            <IngredientPick updateMenus={this.updateMenus} />
            <TodayMenu menus={this.state.TodayMenu} />
          </div>
        )} />


        <Switch>
          <Route path="/MenuDetail/:menuId" children={<MenuDetail menus={this.state.TodayMenu} />} />
        </Switch>

      </div >
    );
  }
}

export default App;
