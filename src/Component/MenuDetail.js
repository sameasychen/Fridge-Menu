import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import clock from '../Img/clock.png';
import glutenfree from '../Img/gluten-free.png';
import vegitarian from '../Img/vegetarian.png';
import serve from '../Img/serve.png';

import './MenuDetail.css';


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

      return data.id === numberId;



    })

    // let ingreList =[];

    let ingreList1 = theMenu[0].usedIngredients.map((data) => {

      let tempName = data.original.split(',');

      tempName = tempName[0].split('-');

      let ingreDetail = {};

      ingreDetail.name = tempName[0];

      ingreDetail.image = data.image;

      return ingreDetail
    })

    let ingreList2 = theMenu[0].missedIngredients.map((data) => {

      let tempName = data.original.split(',');

      tempName = tempName[0].split('-');

      let ingreDetail = {};

      ingreDetail.name = tempName[0];

      ingreDetail.image = data.image;

      return ingreDetail

    })


    let ingreList = ingreList1.concat(ingreList2);

    // console.log(ingreList);


    let getTags = (tagArray) => {
      let tempTags = '';

      if (tagArray) {

        for (let i = 0; i < tagArray.length; i++) {
          if (i > 2 || i === tagArray.length - 1) {
            tempTags = tempTags.concat(tagArray[i])

            break;
          }


          tempTags = tempTags.concat(tagArray[i], ', ')

        }
      }
      // console.log(tempTags);

      return tempTags

    }

    let getWine = (wineArray) => {

      // console.log(wineArray);

      let tempWine = '';

      if (wineArray) {

        for (let i = 0; i < wineArray.length; i++) {
          if (i > 2 || i === wineArray.length - 1) {
            tempWine = tempWine.concat(wineArray[i])

            break;
          }

          tempWine = tempWine.concat(wineArray[i], ', ')

        }
      }

      // console.log(tempWine);


      return tempWine
    }


    let booleanOutput = (theBoolean) => {

      return theBoolean ? 'Yes' : 'No'

    }

    return (

      <div className="mx-2">

        <Link to="/"
        className='largeTextFont backBtn border bg-success text-white p-2'
        >
          Back to results
        </Link> 

        <h3
          className="text-left font-weight-bold mt-3 "
        >   {theMenu[0].title} </h3>

        <div className="row mx-1">

          <div className="col-md-8 col-sm-7 px-0 mb-2">
            {/* ID: {menuId} */}

            <img
              className="maxwidth rounded mx-auto d-block "
              src={theMenu[0].menuDetail.image}
              alt={theMenu[0].menuDetail.image}
              height='150' />

            <div
            className='smallTextFont pt-3'
            dangerouslySetInnerHTML={{ __html: shortenSummary(theMenu[0].menuDetail.summary) }} />

          </div>

          <div className="col-md-4 col-sm-5 px-1">

            <div className="row mx-1">


              <div className="col-sm-12 col-4 row mx-0 px-1 py-2">
                <div className='col-sm-5 col-12 px-auto'>

                  <img
                    className="imgControl center"
                    src={clock}
                    alt={clock}
                  />

                </div>
                <div className="col-sm-7 col-12 px-0 align-self-center smallTextFont">
                  Ready in {theMenu[0].menuDetail.readyInMinutes} mins
                </div>
              </div>


              <div className="col-sm-12 col-4 row mx-0 px-1 py-2">
                <div className='col-sm-5 col-12 px-auto'>

                  <img
                    className="imgControl center"
                    src={glutenfree}
                    alt={glutenfree}
                  />

                </div>
                <div className="col-sm-7 col-12 px-0 align-self-center smallTextFont">
                  GlutenFree:   {booleanOutput(theMenu[0].menuDetail.glutenFree)}
                </div>
              </div>


              <div className="col-sm-12 col-4 row mx-0 px-1 py-2">
                <div className='col-sm-5 col-12 px-auto'>

                  <img
                    className="imgControl center"
                    src={vegitarian}
                    alt={vegitarian}
                  />

                </div>
                <div className="col-sm-7 col-12 px-0 align-self-center smallTextFont">

                  Vegetarian:  {booleanOutput(theMenu[0].menuDetail.vegetarian)}
                </div>
              </div>

            </div>

            <div className="row mx-1">

              <div className="col-sm-12 col-4 row mx-0 px-1 py-2">
                <div className='col-sm-5 col-12 px-auto'>

                  <img
                    className="imgControl center"
                    src={serve}
                    alt={serve}
                  />

                </div>
                <div className="col-sm-7 col-12 px-0 align-self-center smallTextFont">

                  Servings: {theMenu[0].menuDetail.servings}
                </div>
              </div>


              <div className="col-sm-12 col-4 px-1 py-2">

                <h5 className="pl-3 largeTextFont">Tags:
                </h5>
                <p className="capitalize pl-3 smallTextFont">
                  {getTags(theMenu[0].menuDetail.dishTypes)
                  }

                </p>
              </div>


              <div className="col-sm-12 col-4 px-1 py-2">

                <h5 className="pl-3 largeTextFont">Paired Wines:
                  </h5>

                <p className="capitalize pl-3 smallTextFont">

                  {getWine(theMenu[0].menuDetail.winePairing.pairedWines)
                  }

                </p>
              </div>


            </div>

          </div>
        </div>



        <fieldset className='fieldsetTemp'>

          <legend
            className='mx-3'
          >
            <h5 className='largeTextFont'>
              &nbsp;&nbsp;Ingredients:&nbsp;
            </h5>
          </legend>


          <ul className="row mx-1 px-1">

            {ingreList.map((data, index) =>
              <li
                className='ingreList col-sm-3 col-6 px-0'
                key={index}>
                <div className="d-block">

                  <img
                    className="mx-auto d-block"
                    src={data.image}
                    alt={data.image}
                    width='70'
                    height='70'
                  />
                </div>

                <p
                  className="text-center capitalize smallTextFont"
                >{data.name}</p>

              </li>

            )}
          </ul>


        </fieldset>


        <fieldset className='fieldsetTemp mt-3'>

          <legend
            className='mx-3'
          >
            <h5 
            className='largeTextFont'>
              &nbsp;&nbsp;Instructions:&nbsp;
              </h5>
          </legend>


          <ul className="row mx-1 px-1">

            {theMenu[0].menuDetail.analyzedInstructions[0].steps.map((data, index) =>
              <li key={index} className="instructionList col-12">
                <p className="h5 largeTextFont">Step {data.number}: </p>
                <p className='smallTextFont'
                >{data.step}</p>

              </li>

            )}

          </ul>
        </fieldset>

      </div>
    );

  }
}

export default MenuDetail;