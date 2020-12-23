import React from 'react';
import { Link } from 'react-router-dom'



const TodayMenu = props => {



  return (

    <div className="col">
      <p className="font-weight-bold">TodayMenu</p>
      <ul>

        {props.menus.map(data =>
          <li key={data.foodID} className="border">
            <Link className="" to={`/MenuDetail/${data.foodID}`}>
              {data.properties.foodName}
            </Link>
            <p>FoodID: {data.foodID}</p>

            <p>Category: {data.properties.Category}</p>
            <p>Ingredients Missing : {data.ingredientsMissing}</p>

          </li>

        )}

      </ul>
    </div>
  );
}

export default TodayMenu;