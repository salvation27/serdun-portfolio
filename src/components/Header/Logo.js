import React from 'react'
import logo from '../../logo.svg'
import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <div className='col-3'>
            <Link to='/'>
                <img className="App-logo" src={logo} alt="" />
            </Link>
        </div>
    )
}
