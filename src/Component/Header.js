import React from 'react';
import { Link } from 'react-router-dom'


import Logo from '../Img/Fridge2.jpg'

const Header = () => {

    return (

        <div className="Header border">

            <div className="contentwidth mx-auto">
                <Link className="LogoElement" to="./" >
                    <img className="m-2 rounded" src={Logo} width="80" alt="Restaurant Logo" />
                </Link>
            </div>

        </div>
    )
}

export default Header;
