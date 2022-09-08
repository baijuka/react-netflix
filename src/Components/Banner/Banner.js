import React, { useState } from 'react';
import './Banner.css';
import { useEffect } from 'react';
import {imageUrl, API_KEY} from '../../constants/constants';
import axios from '../../axios';  //This is actually the instance of axios object you created in axis.js in the name instance.

function Banner() {
  const [movie, setMovie] = useState('');
  
  useEffect(()=>{
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US'`).then((response)=>{
    setMovie(response.data.results[Math.floor(Math.random()*20)]);
    console.log(response.data.results);
   })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{!movie ? '' 
            : movie.title ? movie.title 
            : movie.original_title ? movie.original_title 
            : movie.original_name ? movie.original_name
            : ''}</h1>
        <div className='bannerbuttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ''}</h1>
      </div>
     <div className="fade_bottom"></div>

      </div>
  )
}

export default Banner
