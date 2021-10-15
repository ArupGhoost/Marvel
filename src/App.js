import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Hero from './Hero';

function App() {

  const hash = '8b49f928de1b4e5866a840738afd3bef';
  const apiKey = '1ab1c5f28cc9c8eb10cd240e6589a326';
   
  const[char, setChar] = useState('iron');
  const[addchar, setAddChar] = useState([]); 

  const charSearch = (e) => {
      setChar(e.target.value);
  }

useEffect(() => {
  const marvelApi = async () => {
         const value = await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${char}&ts=1&apikey=${apiKey}&hash=${hash}`)
         .then(res => res.data.data.results)
         .then(res => setAddChar(res))
         .catch((err) => {
           console.log('error', err);
         });
  }
  marvelApi(); 
},[char]);


  

  return (
    <div className="App">
    <div className='flex justify-center items-center flex-col pt-3 gap-3 md:flex-row'>
      <div className='md:pr-40'>
       <h1 className='text-red-600 text-3xl text-center font-bold'>GhostMarvel</h1>
       </div>

       <div className='border solid border-black w-72 h-12 md:w-2/4 md:h-12 '>
         <div className='pt-2 pl-2'>
             <input type='text' placeholder='Type marvel Hero/Villian...' 
             onChange={charSearch} value={char}
             className='border-none outline-none text-red-600'/>
          </div> 
       </div>
       </div>

       <div className='text-center pt-3'>
         <span className=''>*Click on Char to Know about them</span>
       </div>

     <div className='grid grid-cols-2 px-8 gap-2 pt-16 md:grid-cols-2 md:px-48 lg:grid-cols-4 lg:px-64  mb-12' >
       {addchar.length ? addchar.map((val, idx) => {
            return <Hero 
              key={idx}
              id={idx}
              value={val}
            />
       }) : 'No Value'}
       </div>
    </div>
  );
}

export default App;
