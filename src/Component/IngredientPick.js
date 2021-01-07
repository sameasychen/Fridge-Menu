import React, { Component } from 'react';
import AutoComplete from './AutoComplete';

const axios = require('axios').default;


class IngredientPick extends Component {

  constructor(props) {

    super(props);

    this.state = {
      // inputIngredient: "",
      allIngredients: [],
      allIngredientsStr: "",

      // ingredient2: "",
      // ingredient3: "",

    }

    this.handleChange = this.handleChange.bind(this)
    this.updateMenu = this.updateMenu.bind(this)

  }

  addIngredient = (inputIngredient) => {

    let tempArray = this.state.allIngredients.slice(0);;

    tempArray.push(inputIngredient);

    this.setState(() => ({
      allIngredients: tempArray
    }));


    let tempStr = this.state.allIngredientsStr.slice(0);

    tempStr = tempStr.concat(inputIngredient, ',');

    this.setState(() => ({
      allIngredientsStr: tempStr
    }));

    // this.setState(() => ({
    //   inputIngredient: ''
    // }));




  }

  updateMenu() {

    if (this.state.allIngredients.length !== 0) {


      this.props.updateMenus(this.state.allIngredientsStr);
    }
    else {
      alert("Please enter at least one ingredient!")
    }


  }


  handleChange(e) {
    const { name, value } = e.target

    this.setState({ [name]: value })

  }

  render() {

    return (

      <div className="col">
        <p className="font-weight-bold">IngredientPick</p>
        <p>What I have in my fridge</p>

        <ul>
          {this.state.allIngredients.map((data, index) =>

            <li key={index}>{data}</li>


          )}
        </ul>

        <AutoComplete onAdd={this.addIngredient} />


        {/* <form onSubmit={this.addIngredient}>
          <input
            type="text"
            name="inputIngredient"
            value={this.state.inputIngredient}
            className="inputArea form-control d-block"
            placeholder="Input Ingredient"
            onChange={this.handleChange}
          /> */}
        {/* <input
            type="text"
            name="ingredient2"
            value={this.state.ingredient2}
            className="inputArea form-control d-block"
            placeholder="Ingredient2"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="ingredient3"
            value={this.state.ingredient3}
            className="inputArea form-control d-block"
            placeholder="Ingredient3"
            onChange={this.handleChange}
          /> */}
        {/* <button
            type="submit"
            className="btn btn-secondary"
          >Add</button> */}

        {/* </form> */}

        <button
          // type="submit"
          onClick={this.updateMenu}
          className="mt-3 btn btn-primary"
        >Show me!</button>
      </div>
    );
  }
}

export default IngredientPick;