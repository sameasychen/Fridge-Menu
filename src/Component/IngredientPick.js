import React, { Component } from 'react';


class IngredientPick extends Component {

  constructor(props) {

    super(props);

    this.state = {
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",

    }

    this.handleChange = this.handleChange.bind(this)
    this.updateMenu = this.updateMenu.bind(this)

  }

  updateMenu(event) {
    event.preventDefault();
    this.props.updateMenus();
    console.log("what a day");
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

        <form onSubmit={this.updateMenu}>
          <input
            type="text"
            name="ingredient1"
            value={this.state.ingredient1}
            className="inputArea form-control d-block"
            placeholder="Ingredient1"
            onChange={this.handleChange}
          />
          <input
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
          />
          <button
            type="submit"

          >Show me!</button>

        </form>
      </div>
    );
  }
}

export default IngredientPick;