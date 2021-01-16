import React, { Component } from 'react';
import AutoComplete from './AutoComplete';
import FridgePic from '../Img/insideFridge7.jpg';
import Logo from '../Img/Logo.jpg';
import groceryList from '../Img/groceryList.png';
import listDot from '../Img/listDot.png';


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

        <div className="mx-auto mb-3 logoControl">


          <img
            className="img-fluid banner rounded d-block"
            src={FridgePic}
            alt={FridgePic}
            width='960' />
          {/* <div className="mx-auto logoControl"> */}

            <img
              className="img-fluid logo d-block"
              src={Logo}
              alt={Logo}
            // width='220'
            />
          {/* </div> */}

        </div>

        <div className="col-md-6 col-sm-12 ingreLeft px-3 py-3">

          <p className='largeTextFont'>
            Tell me what you have in your fridge:</p>
          <p className='smallTextFont'>
            (Try to add more if you can.)</p>

          <AutoComplete onAdd={this.addIngredient} />
          <button

            onClick={this.updateMenu}
            className="buttonControl mt-3 btn btn-warning btn-block largeTextFont font-weight-bold"
          >See what you can cook out of these!</button>

        </div>



        <div className="col-md-6 col-sm-12 px-3 py-3">

          {/* <fieldset className='fieldsetTemp'>

            <legend
              className='mx-3'
            >
              <h5>
                &nbsp;&nbsp;Ingredients:&nbsp;
              </h5>
            </legend> */}

          <div
            className="imgboardControl" >
          </div>

          {/* <img
            className="imgboardControl"
            src={boardEdge1}
            alt={boardEdge1}
          // height='20'
          /> */}

          <div className='ingreRight'>

            <img
              className="mx-auto d-block"
              src={groceryList}
              alt={groceryList}
              height='55' />

            <ul className="ingrepickList mb-0 pb-3 row">

              {this.state.allIngredients.map((data, index) =>

                <li key={index} className="col-6 py-2">

                  <img
                    className="rounded-circle mx-auto align-self-center"
                    src={listDot}
                    alt={listDot}
                    height='15' />

                  <span
                    // style="font-family: 'Font Name', serif;"
                    className='boardText pl-2 capitalize text-white'>
                    {data}
                  </span>
                </li>

              )}
            </ul>

          </div>

          <div
            className="imgboardControl" >
          </div>


          {/* <div>
            <img
              className="imgboardControl"
              src={boardEdge1}
              alt={boardEdge1}
            // height='20'
            />

          </div> */}
          {/* </fieldset> */}

        </div>


      </div>
    );
  }
}

export default IngredientPick;