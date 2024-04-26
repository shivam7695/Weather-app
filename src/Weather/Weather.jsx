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
       <button className='btn' onClick={()=>{search()}}><img src="search.png" alt="" /></button>
      </div>
      <div className='weather-image'>
            <img src="cloud.png" alt="" />
      </div>
      <div className="weather-temp">31°C</div>
      <div className="weather-location">Pune</div>
      <data className="containers">
        <div className="element">
          <img src="humidity.png" alt="" />
          <div className="data">
            <div className="humidity">42%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src="wind.png" alt="" />
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
