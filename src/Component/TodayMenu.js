import React from 'react';
import { Link } from 'react-router-dom'



const TodayMenu = props => {



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

            {/* <p>Category: {data.title}</p> */}
            <p>Number of Missed Ingredients: {data.missedIngredientCount}</p>

          </li>

        )}

      </ul>
    </div>
  );
}

export default TodayMenu;