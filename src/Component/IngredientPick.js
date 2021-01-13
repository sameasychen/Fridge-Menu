import React, { Component } from 'react';
import AutoComplete from './AutoComplete';
import FridgePic from '../Img/Fridge2.jpg';
import LemonList from '../Img/LemonList.jpg';

import './IngredientPick.css';


class IngredientPick extends Component {

  constructor(props) {

    super(props);

    this.state = {
      // inputIngredient: "",
      allIngredients: ['yam'],
      allIngredientsStr: "",

      // ingredient2: "",
      // ingredient3: "",

    }

    this.handleChange = this.handleChange.bind(this)
    this.updateMenu = this.updateMenu.bind(this)

  }

  addIngredient = (inputIngredient) => {

    let tempArray = this.state.allIngredients.slice(0);

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

      <div className="row mx-2">

        <div className="col-md-4 col-sm-6 ingreLeft">

          <p>Let's see what we have in our fridge:</p>
          <AutoComplete onAdd={this.addIngredient} />
          <button

            onClick={this.updateMenu}
            className="mt-3 btn btn-primary"
          >Show me!</button>

        </div>

        <div className="col-md-4 col-sm-6">
          <img
            className="picImg rounded mx-auto d-block"
            src={FridgePic}
            alt={FridgePic}
            height='250' />

        </div>

        <div className="col-md-4 col-sm-12 ingreRight">

          <fieldset className='fieldsetTemp'>

            <legend
              className='mx-3'
            >
              <h5>
                &nbsp;&nbsp;Ingredients:&nbsp;
              </h5>
            </legend>


            <ul className="">


              {this.state.allIngredients.map((data, index) =>

                <li key={index} className="ingreList py-2">

                  <img
                    className="rounded-circle mx-auto "
                    src={LemonList}
                    alt={LemonList}
                    height='35' />
                  <span className='pl-2 capitalize'>
                    {data}
                  </span>
                </li>

              )}
            </ul>


          </fieldset>

        </div>


      </div>
    );
  }
}

export default IngredientPick;