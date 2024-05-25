import React from 'react'

export const Person = (props) => {
  return (
    <div className='col'>
     <div class="card" style={{width: "18rem"}}>
        <img src={props.img} class="card-img-top" alt={props.name}/>
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.role}</p>
          </div>
    </div>
    </div>
  )
}
