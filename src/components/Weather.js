import React, { useEffect, useState } from 'react'
import '../components/Weather.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const Weather = () => {
  const [inputText,setInputText]=useState('Delhi');
  const [individualData,setIndividualData]=useState('');

  
  const getWeatherInfo=async ()=>{
    const fetchedData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=8ecafee68dd6c8ddb072603564e57925`)
    const jsonData=await fetchedData.json();
    const {temp,pressure,humidity}=jsonData.main;
    const {speed}=jsonData.wind;
    const {country}=jsonData.sys;
    const {name}=jsonData;
    const{main,description}=jsonData.weather[0];
    const weather_data={temp,name,pressure,speed,country,humidity,main,description}
    setIndividualData(weather_data);
    // console.log('TEMP : ',name);
    // console.log('J : ',jsonData);
    // console.log(weather_data);

    //  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=pune&appid=8ecafee68dd6c8ddb072603564e57925`)
    // .then(data => setData(data.data) )
    // .catch(error=>console.log(error))
  }
  useEffect(()=>{
    getWeatherInfo()
  },[]);

  return (
    <div>
        <div className='container'>
            <div className='searchBox'>
                <h2>Weather App</h2>
                <TextField name='weather' value={inputText} onChange={(e)=>setInputText(e.target.value)} className='searchInput' id="outlined-basic" label="search..." variant="outlined" />
                <Button  onClick={getWeatherInfo} variant="contained">search</Button>
            </div>
        </div>
        <WeatherCard individualData={individualData}/>
    </div>
  )
}

export default Weather