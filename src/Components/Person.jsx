import React from 'react'

export const Person = ({ name, role, img, handleEdit  }) => {
  return (
    <div className='col'>
     <div class="card" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt={name}/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{role}</p>
          </div>
          <div className='mb-4'>
            <button className="btn btn-success me-2" onClick={handleEdit}>Editar</button>
            <button className="btn btn-danger">Eliminar</button>
          </div>
    </div>
    </div>
  )
}
