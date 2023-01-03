import { useEffect, useState } from 'react';
import './App.css';
// import {useState} from "react"
import Component from './Component';


function App() {
  
  const [users,setUsers] = useState([]);
  const getUsers = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    setUsers(await response.json());
    console.log(users);

  }
  useEffect(()=>{
    getUsers();
  },
  [])
  // const value = props.value;




  return (
    <div className='App'>
      <div className='section-one'>
        <h1>List of Github users</h1>
      </div>

      {
        users.map((curElem)=>{
          return(
            <div className='section-two' >
                      <Component login={curElem.login} title={curElem.title} imageUrl= {curElem.thumbnailUrl}/>
            </div>
          )
        })

      }

      {/* <div className='section-two'>
        <Component/>


      </div> */}
    </div>
  );
}

export default App;
