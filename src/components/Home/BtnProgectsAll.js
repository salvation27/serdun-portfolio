import React from 'react'
import { Link } from "react-router-dom";
import './BtnProgectsAll.css'

const BtnProgectsAll = () => {
    return (
      <div className="projects_all">
        <Link to="/portfolio" className="btn_style">
          {/* <div className="pro_btn">Посмотреть все проекты</div> */}
          <span>View all projects</span>
        </Link>
      </div>
    );
}

export default BtnProgectsAll
