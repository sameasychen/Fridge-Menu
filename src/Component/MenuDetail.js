import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'



const MenuDetail = props => {


  let { foodID } = useParams();

  console.log(props)


  if (props.menus.length === 0) {

    return (
      <div>
        <Link to="/">
          Home Page
        </Link>
        <p>no menu selected</p>

      </div>
    );


  }
  else {
    const theMenu = props.menus.filter(data =>
      data.foodID === foodID
    )
    console.log(theMenu)

    return (

      <div className="text-left">

        <Link to="/">
          Home Page
        </Link>

        <div key={theMenu[0].foodID}>

          <p
            className="text-left font-weight-bold"
          >ID: {foodID}   Menu Name: {theMenu[0].properties.foodName} </p>



          <p
          >Ingredients: {theMenu[0].ingredients}</p>

          <p>CookInstructions: {theMenu[0].cookInstructions[0]}</p>
          <p>Step 1:{theMenu[0].cookInstructions[0]}</p>
          <p>Step 2:{theMenu[0].cookInstructions[1]}</p>
          <p>Step 3:{theMenu[0].cookInstructions[2]}</p>







        </div>
      </div>
    );

  }
}

export default MenuDetail;