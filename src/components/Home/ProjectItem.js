import React from 'react'
// import{Link} from 'react-router-dom'
import './ProjectItem.css'

// import background from '../../img/lab-sveta.jpg';


export default function ProjectItem({ item }) {
  return (
    <div className="card_item">
      <div className="face face1">
        <div className="content">
          <h3>{item.title}</h3>
          <p>{item.text}</p>

          <a href={item.link_site} target="_blank" rel="noreferrer">
            Посмотреть
          </a>


          {/* <Link target={"_blank"} to={item.link_site}>
            Your Link
          </Link> */}
          {/* <Link to={item.link_site} target="_blank" rel="noopener noreferrer" /> */}
        </div>
      </div>
      <div
        className="face face2"
        style={{
          backgroundImage: `url(${item.background})`,
        }}
      >
        {/* <h2>{num}</h2> */}
      </div>
    </div>
  );
}
