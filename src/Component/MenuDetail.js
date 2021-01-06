import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'



const MenuDetail = props => {

  let shortenSummary = (str) => {
    let splitText = str.split('.');

    // console.log(splitText);

    let finalSummary = '';

    for (let i = 0; i < 4; i++) {
      finalSummary = finalSummary.concat(splitText[i]);
      finalSummary = finalSummary.concat('.');

    }

    // console.log(finalSummary);

    return finalSummary;
  }

  let { menuId } = useParams();
  let numberId = parseInt(menuId);

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

    const theMenu = props.menus.filter((data) => {

      return data.id === numberId

    })
    // console.log(theMenu)

    let booleanOutput = (theBoolean) => {

      return theBoolean ? 'Yes' : 'No'

      // if(theBoolean){
      //   return 'Yes'
      // } else{

      // }
    }

    return (

      <div className="text-left">

        <Link to="/">
          Home Page
        </Link>

        <div >

          <p
            className="text-left font-weight-bold"
          >ID: {menuId}   Menu Name: {theMenu[0].title} </p>
          <img
            className="picImg rounded mx-auto d-block"
            src={theMenu[0].image}
            alt={theMenu[0].image}
            height='150' />
          <p>Summary:</p>

          <div dangerouslySetInnerHTML={{ __html: shortenSummary(theMenu[0].menuDetail.summary) }} />

          <p>readyInMinutes: {theMenu[0].menuDetail.readyInMinutes}</p>
          <p>GlutenFree: {booleanOutput(theMenu[0].menuDetail.glutenFree)}</p>
          <p>Vegetarian: {booleanOutput(theMenu[0].menuDetail.vegetarian)}</p>

          <p>Instructions: </p>

          <ul>
            {theMenu[0].menuDetail.analyzedInstructions[0].steps.map(data =>
              <li key={data.index}>
                
                {/* <img
                  src={data.image}
                  alt={data.image}
                  height='150' /> */}
                <p>Step {data.number}: {data.step}</p>


              </li>

            )}


          </ul>





          {/* <p
          >Ingredients: {theMenu[0].ingredients}</p>

          <p>CookInstructions: {theMenu[0].cookInstructions[0]}</p>
          <p>Step 1:{theMenu[0].cookInstructions[0]}</p>
          <p>Step 2:{theMenu[0].cookInstructions[1]}</p>
          <p>Step 3:{theMenu[0].cookInstructions[2]}</p> */}

        </div>
      </div>
    );

  }
}

export default MenuDetail;