import React from 'react'
import {Link} from "react-router-dom";
import menu from '../../data/dataMenu.json'

const menuItem = menu.map((item,index)=>{
    return(
      <li key={index}>
            <Link to={item.path}>{item.name}</Link>
        </li> 
    )
})


export default function Menu() {
    return (
      <div className='col-5'>
        <div className='menu'>
                    <ul className='flex'>
                      {
                        menuItem  
                      }
                  </ul>
                </div>
      </div>
    )
}
