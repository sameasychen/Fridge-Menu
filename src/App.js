
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
      TodayMenuDetail: [],


    }
    // this.updateMenuDetail = this.updateMenuDetail.bind(this)

  }






  updateMenuDetail = (idList) => {

    const menusList = [];

    for (let i = 0; i < idList.length; i++) {
      // console.log(idList[i]);

      axios({
        method: 'get',
        url: `https://api.spoonacular.com//recipes/${idList[i]}/information`,
        params: {
          apiKey: 'd53cbd9911a44ad5a7ed8cf9e4b6c420',
          // id: idList[0],
          includeNutrition: false
        }

      })
        .then(

          (res) => {


            // console.log(res.data);
            menusList.push(res.data)
            // this.setState(() => ({
            //   TodayMenu: res.data
            // }))
          })

    }

    console.log(menusList);

    this.setState(() => ({
      TodayMenuDetail: menusList
    }));

    console.log(this.state.TodayMenuDetail);

  }

  updateMenus = () => {

    axios({
      method: 'get',
      url: 'https://api.spoonacular.com/recipes/findByIngredients',
      params: {
        apiKey: 'd53cbd9911a44ad5a7ed8cf9e4b6c420',
        ingredients: 'bacon, butter, cheese',
        number: 10,
        limitLicense: true,
        ranking: 3,
        ignorePantry: true
      }

    })
      .then(

        (res) => {
          // console.log(res);
          this.setState(() => ({
            TodayMenu: res.data
          }));

          let idList = res.data.map(data =>
            data.id

          );

          // console.log(idList);
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

    // console.log(this.state.TodayMenu);

    return (
      <div className="App">

        <Route exact path='/' render={() => (
          <div className="row">
            <IngredientPick updateMenus={this.updateMenus} />
            <TodayMenu menus={this.state.TodayMenu} />
          </div>
        )} />


        <Switch>
          <Route path="/MenuDetail/:menuId" children={<MenuDetail menus={this.state.TodayMenuDetail} />} />
        </Switch>

      </div >
    );
  }
}

export default App;
