// import React from 'react'
import "./Component.css"
function Component(props) {
  return (
    <div className='Component'>
        <div className="image">
            <img src="{props.imageUrl}" alt="" />
        </div>
        <div className="data">
            {/* <h3>{props.login}</h3> */}
            <p>{props.title}</p>

        </div>
    </div>
  )
}

export default Component