import React from 'react';
import { Link } from 'react-router-dom'



const TodayMenu = props => {

  // console.log(typeof props.menus[0]);

  return (

    <div className="col">
      <p className="font-weight-bold">TodayMenu</p>
      <ul>

        {props.menus.map(data =>


          <li key={data.id} className="border">
            <Link className="" to={`/MenuDetail/${data.id}`}>
              {data.title}
            </Link>
            <p>FoodID: {data.id}</p>


            <img
              className="picImg rounded mx-auto d-block"
              src={data.image}
              alt={data.image}
              height='150' />

            {/* <p>Number of Missed Ingredients: {data.missedIngredientCount}</p> */}

            <div>Missing Ingredients:

              <ul>

                {data.missedIngredients.map(data =>

                  <li key={data.id}>

                    <img
                      
                      src={data.image}
                      alt={data.image}
                      height='50' />

                    {data.name}


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