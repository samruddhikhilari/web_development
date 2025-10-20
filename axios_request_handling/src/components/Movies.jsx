import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Movies.css';

const Movies = () => {
 const [data, setData] = useState([]);
 async function  getData(){
        try{
        const res = await axios.get("https:www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1");
         setData(res.data.Search);

        }catch(error){
            console.log(error);
        }
}

useEffect(()=>{
        getData();
  },[]);

return (
    <div className='main'>
      {
        data.map((ele)=>{
            return (
                <div key={ele.imdbID} className='container'>
                <img src={ele.Poster} alt={ele.imdbID} className='image'></img>
                <h1 className='title'>Title : {ele.Title}</h1>
                <h3 className='year'>Year : {ele.Year}</h3>
                </div>
            );
        })
      }
    </div>
  )
}

export default Movies
