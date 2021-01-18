import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import IngredientPick from './Component/IngredientPick';
import TodayMenu from './Component/TodayMenu';
import MenuDetail from './Component/MenuDetail';
// import Header from './Component/Header';
import Footer from './Component/Footer';
import APIKEY from './env';

import dataFiller from './Component/dataFiller.json';


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


  updateMenuDetail = (idListStr) => {


    let menusList = this.state.tempMenu.slice(0);

    axios({
      method: 'get',
      url: `https://api.spoonacular.com/recipes/informationBulk`,
      params: {
        apiKey: APIKEY,
        ids: idListStr,
        // ids: '645821,633594',

        includeNutrition: false
      }

    })
      .then(

        (res) => {


          // let menusList = this.state.TodayMenu.slice(0);

          console.log(menusList);

          for (let i = 0; i < menusList.length; i++) {

            menusList[i].menuDetail = res.data[i];

          }

          menusList = menusList.filter(
            data => 
            data.menuDetail.analyzedInstructions.length !== 0

          )

          menusList = menusList.filter(
            data => 
            data.missedIngredients.length < 7

          )

          this.setState(() => ({
            TodayMenu: menusList
          }));

        })


    // this.setState(() => ({
    //   TodayMenu: menusList
    // }));

    console.log(this.state.TodayMenu);

  }


  updateMenus = (ingredientStr) => {

    axios({
      method: 'get',
      url: 'https://api.spoonacular.com/recipes/findByIngredients',
      params: {
        apiKey: APIKEY,
        // ingredients: 'bacon, butter, cheese',
        ingredients: ingredientStr,

        number: 4,
        limitLicense: true,
        ranking: 3,
        ignorePantry: true
      }

    })
      .then(

        (res) => {

          this.setState(() => ({
            tempMenu: res.data
          }));

          let idList = res.data.map(data =>
            data.id

          );

          let idListStr = '';

          for (let i = 0; i < idList.length; i++) {
            idListStr = idListStr.concat(idList[i], ',');

          }

          this.updateMenuDetail(idListStr);

        })

      .catch(err => {
        console.log(err);

      })

  }

  reset = () => {

    this.setState(() => ({
      TodayMenu: [],
    }));

  }

  render() {

    // console.log(this.state.TodayMenu);
    // console.log(this.state.tempMenu);
    // const APIKEY =process.env.REACT_APP_Menu_API_KEY;
    console.log(APIKEY)


    return (
      <div 
      className='App contentwidth mx-auto'
      >

        {/* <Header /> */}

        <Route exact path='/' render={() => (
          <div className="">
            <IngredientPick updateMenus={this.updateMenus} reset={this.reset} />
            <TodayMenu menus={this.state.TodayMenu} />
          </div>
        )} />


        <Switch>
          <Route path="/MenuDetail/:menuId" children={

            <MenuDetail menus={this.state.TodayMenu} />


          } />
        </Switch>

        <Footer />

      </div >
    );
  }
}

export default App;
