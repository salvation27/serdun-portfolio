import React from 'react'

const AboutSkill = ({item}) => {
    const{title,text,icon} = item
    return (
      <div className="wrap_skill_card">
        <div className="skill_card_icon">
          <i class={icon}></i>
        </div>
        <div className="skill_card_descr">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
}

export default AboutSkill;
