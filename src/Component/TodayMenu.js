import React from 'react';
import { Link } from 'react-router-dom'
import './TodayMenu.css';
import menu from '../Img/menu.png';




const TodayMenu = props => {

  // console.log(typeof props.menus[0]);

  return (

    <div className="mx-2 mt-3 mb-3 pb-3">

      <ul className="row pl-0 mx-0">

        {props.menus.map(data =>


          <li key={data.id} className="row col-md-12 mx-0 px-0 my-3">

            <div className="col-sm-5 col-12 border px-0">
              {/* <p>FoodID: {data.id}</p> */}

              <Link className="menuLink d-block mb-0 h-100" to={`/MenuDetail/${data.id}`}>

                <div className='row mx-0'>

                  <div className='col-2 px-0 align-self-center'>
                    <img
                      className=""
                      src={menu}
                      alt={menu}
                      height='50' />
                  </div>

                  <div className='col-10 px-0 text-center align-self-center smallTextFont2'>

                      {data.title}
                  </div>
                </div>
                
                <div className=''>
                  <img
                    className="picImg mx-auto d-block maxwidth align-self-end"
                    src={data.image}
                    alt={data.image}
                    height='150' />
                </div>
              </Link>

            </div>

            <div className="col-sm-7 col-12">

              <p
              className='missingIngre my-2 largeTextFont'
              >Plus {data.missedIngredientCount} Additional Ingredients:</p>

              <ul className="row pl-0 mx-0 mt-4">

                {data.missedIngredients.map(data =>

                  <li
                    key={data.id}
                    className="ingreList col-4 px-0 my-2"
                  >
                    <div className="d-block">
                      <img
                        className="mx-auto d-block"
                        src={data.image}
                        alt={data.image}
                        height='45'
                      />
                    </div>
                    <div
                      className="text-center capitalize smallTextFont"
                    >{data.name}</div>


                  </li>

                )}
              </ul>

            </div>

          </li>

        )}

      </ul>
    </div>
  );
}

export default TodayMenu;