import React from 'react'
import { useState } from 'react'
import { Person } from './Person';

export const Persons = ({ persons, setPersons }) => {

      const [editingId, setEditinID] = useState(null);
      const [editedPerson, setEditedPerson] = useState({
        name: '',
        role: '',
        img: ''
      });

      const [isEditing, setIsEditing] = useState(false);
      

      const handleChange = (e) => {
        const { name, value} = e.target;
        setEditedPerson(prevState => ({
          ...prevState,
          [name]: value
        }));
      }

      const handleEdit = (id) => {
        
        setEditinID(id);
        setIsEditing(true);
        const personToEdit = persons.find(person => person.id === id);
        setEditedPerson({... personToEdit})
      }

      const handleSave = (e) => {
        setPersons(persons.map(person => person.id === editingId ? editedPerson : person))
        setEditinID(null)
        setEditedPerson({ name: '', role: '', img: '' })
      }

      return (
        <div>
          <h2>IT Team</h2>
          <div className='container d-flex justify-content-center '>
            <div className='d-flex flex-row'>
              {persons.map((person) => {
                return (
                  <div>
                    <Person
                      key={person.id}
                      name={person.name}
                      role={person.role}
                      img={person.img}
                      handleEdit={() => handleEdit(person.id)}
                    />
                  </div>
                )
              })}
            </div>
           
          </div>
          <div>
              <div className='mt-4 row p-2'> 
                <h2>Modificar datos</h2>
                <input type='text' name='name' value={editedPerson.name} onChange={handleChange}
                 placeholder='Nombre' className='form-control mb-2'/>  
                <input type='text' name='role' value={editedPerson.role} onChange={handleChange}
                 placeholder='Rol' className='form-control mb-2'/>  
                <input type='text' name='img'  value={editedPerson.img} onChange={handleChange}
                placeholder='Imagen' className='form-control mb-2'/>  
                <div className='mt-2'>
                <button className='btn btn-primary' onClick={handleSave} >Guardar</button>
                </div>
              </div>
            </div>
        </div>
        
  )
}
