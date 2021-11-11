import React from "react";
import "./Skillitem.css";

export default function Skillitem({ items }) {
  return (
    <>
      <div className="skills">
        {items.map((item, index) => {
          return (
            <div className="skill" key={index}>
              <div className="skill-name">{item.title}</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per={item.prosent}
                  style={{
                    maxWidth: item.prosent,
                    background: item.background,
                  }}
                ></div>
              </div>
            </div>
          );
        })}

        {/* <div className="skill">
    <div className="skill-name">CSS</div>
    <div className="skill-bar">
      <div className="skill-per" per="70%" style={{maxWidth:'70%'}}></div>
    </div>
  </div>

  <div className="skill">
    <div className="skill-name">Javascript</div>
    <div className="skill-bar">
      <div className="skill-per" per="60%"  style={{maxWidth:'60%'}}></div>
    </div>
  </div> */}
      </div>
    </>
  );
}
