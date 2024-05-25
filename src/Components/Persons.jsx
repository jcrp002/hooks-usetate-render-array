import React from 'react'
import { useState } from 'react'
import { Person } from './Person';

export const Persons = () => {

  const  [ persons, setPersons ] = useState([
    {
      id: 1,
      name: "Camilo",
      role: "Frontend Dev",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png"
    },
    {
      id: 3,
      name: "Alfred",
      role: "Backend Dev",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png"
    },
    {
      id: 1,
      name: "Wayne",
      role: "Aguatero",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },]
  );


  return (
    <div>
      <h2>IT TEAM</h2>
      <div className='container d-flex justify-content-center '>
      <div className='d-flex flex-row'>
      {persons.map((person) => {
        return(  
        <div>
          <Person 
          key={person.id}
          name={person.name}
          role={person.role}
          img={person.img}
          />
        </div>
        
        )
      })}
      </div>
      </div>
      </div>
  )
}
