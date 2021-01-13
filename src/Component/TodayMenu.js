import React from 'react';
import { Link } from 'react-router-dom'
import './TodayMenu.css';



const TodayMenu = props => {

  // console.log(typeof props.menus[0]);

  return (

    <div className="">
      <p className="font-weight-bold">TodayMenu</p>
      <ul className="row">

        {props.menus.map(data =>


          <li key={data.id} className="row border col-md-6">

            <div className="col border">
              <Link className="font-weight-bold d-block text-center my-3" to={`/MenuDetail/${data.id}`}>
                {data.title}
              </Link>
              {/* <p>FoodID: {data.id}</p> */}


              <img
                className="picImg rounded mx-auto d-block maxwidth"
                src={data.image}
                alt={data.image}
                height='150' />

              {/* <p>Number of Missed Ingredients: {data.missedIngredientCount}</p> */}

            </div>

            <div className="col border">

              <p>Missing Ingredients:</p>

              <ul className="row pl-0">

                {data.missedIngredients.map(data =>

                  <li
                    key={data.id}
                    className="ingreList col-sm-4 px-0"
                  >
                    <div className="d-block">
                      <img
                        className="mx-auto d-block"
                        src={data.image}
                        alt={data.image}
                        height='50'
                        />
                    </div>
                    <div
                      className="text-center"
                    >{data.name}</div>


                  </li>

                )}
              </ul>

            </div>


            {/* <p>missedIngredients: {data.missedIngredients[0].aisle}</p> */}


          </li>

        )}

      </ul>
    </div>
  );
}

export default TodayMenu;