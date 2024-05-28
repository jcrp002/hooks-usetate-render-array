import logo from './logo.svg';
import './App.css';
import { Persons } from './Components/Persons';
import { useState } from 'react';

function App() {

  const  [ persons, setPersons ] = useState([
    {
      id: 1,
      name: "Camilo",
      role: "Frontend Dev",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png"
    },
    {
      id: 2,
      name: "Alfred",
      role: "Backend Dev",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png"
    },
    {
      id: 3,
      name: "Wayne",
      role: "Aguatero",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
  ]);

  return (
  <div className='App'>
   <div className='container'>
     <Persons persons={persons} setPersons={setPersons}/> 
   </div>
  </div>
  );
}

export default App;
