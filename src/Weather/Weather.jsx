import React, { useState } from 'react'
import "./weather.css"

const Weather = () => {
 
  const search = async()=>{
    const searchCity = document.getElementsByClassName("city");
    
    
    if(searchCity[0].value ===""){
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?&appid=a6347b783b7884ca7667688febb524ce&units=metric&q=${searchCity[0].value}`;
  

    let resposne = await fetch(url);
    let data = await resposne.json();
  
    const humidity  = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind")
    const temp = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")

      humidity[0].innerHTML = data.main.humidity +"%";
      wind[0].innerHTML = data.wind.speed +"km/h" ;
      temp[0].innerHTML =  Math.round(data.main.temp)  + "°C";
      location[0].innerHTML = data.name ;


    
  }

  return (
    <div className='container'>
         <div className='card'>
      <div className='search'>
        <input className='city' type="text" placeholder='Enter City' />
       <button className='btn' onClick={()=>{search()}}><img src="https://imgs.search.brave.com/X_uwqfioeJlBGvA4Lo5OrBGlXjZYo3rKLDf5zaXVuQk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzY1Lzk0LzY3/LzM2MF9GXzY2NTk0/Njc5NV9PNGxkYTU4/QW16enVGZVVkVzNQ/UGltMzFWdlhWWHUz/bC5qcGc" alt="" /></button>
      </div>
      <div className='weather-image'>
            <img src="https://imgs.search.brave.com/pv7ZTaaQoL4vtAmzNBFbNSFZdWh7BxgzJK177IVir7Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zMzEyLzMzMTI4/MjIucG5n" alt="" />
      </div>
      <div className="weather-temp">31°C</div>
      <div className="weather-location">Pune</div>
      <data className="containers">
        <div className="element">
          <img src="https://imgs.search.brave.com/gk097VKD7Iv4mpfg9GUgm9UlraiNy-C2c_73M8SjgqA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tLzdO/TkF2MmpiU1hYTG03/aFppNEZVRU1lUTZU/M211WDluQS1Zd2xy/bE5WQk80dU5HdVIx/a0FSOXhCUllvWjBJ/ek55bnc9dzMwMA.jpeg" alt="" />
          <div className="data">
            <div className="humidity">42%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src="https://imgs.search.brave.com/YQH2S0Fhduwux0O9BCxxjlMwaTsw8etKSfYUxYQ0IjY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL0o1/RXdaTDRPZzhQckNP/bDk5cDJIM2k3QmIx/bVhaWmtuVVo3TnY4/dDhsVkNXVTVnZF9S/TXU0ZkpqMS1yOFgx/cWJvXzg9dzMwMA.jpeg" alt="" />
          <div className="data">
            <div className="wind">3.19km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </data>

     </div>
    </div>
  )
}

export default Weather
