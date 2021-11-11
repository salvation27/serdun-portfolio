import React from 'react'
import './TagButton.css'


const TagButton = ({name,handleSetTag,tagActive}) => {
    return (
      <>
        <div
          className={` tag ${tagActive ? "active" : ""}`}
          onClick={() => handleSetTag(name)}
        >
          <span>{name.toUpperCase()}</span>
        </div>
      </>
    );
}

export default TagButton
