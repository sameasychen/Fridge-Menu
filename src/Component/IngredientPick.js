import React, { Component } from 'react';
import AutoComplete from './AutoComplete';
import FridgePic from '../Img/insideFridge7.jpg';
import checked from '../Img/checked.png';
import groceryList from '../Img/groceryList.png';
import boardEdge1 from '../Img/boardEdge1.png';



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

        <div className="mx-auto">
          <img
            className="rounded d-block"
            src={FridgePic}
            alt={FridgePic}
            width='960' />

        </div>

        <div className="col-md-6 col-sm-12 ingreLeft">

          <p>Let's see what we have in our fridge:</p>
          <AutoComplete onAdd={this.addIngredient} />
          <button

            onClick={this.updateMenu}
            className="buttonControl mt-3 btn btn-warning btn-block"
          >Show me!</button>

        </div>



        <div className="col-md-6 col-sm-12 px-0">

          {/* <fieldset className='fieldsetTemp'>

            <legend
              className='mx-3'
            >
              <h5>
                &nbsp;&nbsp;Ingredients:&nbsp;
              </h5>
            </legend> */}


          <img
            className="imgboardControl"
            src={boardEdge1}
            alt={boardEdge1}
          // height='20'
          />

          <div className='ingreRight'>

            <img
              className="mx-auto d-block"
              src={groceryList}
              alt={groceryList}
              height='50' />

            <ul className="ingrepickList">

              {this.state.allIngredients.map((data, index) =>

                <li key={index} className=" py-2">

                  <img
                    className="rounded-circle mx-auto"
                    src={checked}
                    alt={checked}
                    height='30' />
                  <span className='pl-2 capitalize text-white'>
                    {data}
                  </span>
                </li>

              )}
            </ul>

          </div>
          <div>
            <img
              className="imgboardControl"
              src={boardEdge1}
              alt={boardEdge1}
              height='20'
            />

          </div>
          {/* </fieldset> */}

        </div>


      </div>
    );
  }
}

export default IngredientPick;