import React, { useEffect, useState } from 'react'
import '../components/Weather.css'
import { BsSun,BsFillCloudsFill,BsCloudRain,BsFillCloudHazeFill } from "react-icons/bs";

const WeatherCard = ({individualData}) => {
    const[weatherImg,setWeatherImg]=useState('');
    const{temp,name,pressure,speed,country,humidity,main,description}=individualData;
    useEffect(()=>{
        if(main==='Clouds'){
            setWeatherImg(<BsFillCloudsFill style={{color:'grey'}} />)
        }
        else if(main==='Rain'){
            setWeatherImg(<BsCloudRain style={{color:'grey'}} />)
        }
        else if(main==='Haze'){
            setWeatherImg(<BsFillCloudHazeFill style={{color:'grey'}} />)
        }
        else{
            setWeatherImg(<BsSun style={{color:'green'}} />);
        }
    },[main])
  return (
    <div>
        <div className='weatherCard'>
            <div className='countryName'>
                <div className='countryBox'>
                    <h3>Name : <i>{name}</i></h3>
                    <h3>Country : <b>{country}</b></h3>
                </div>
                <div className='iconBox'>
                    {weatherImg}
                </div>
            </div>
            <div className='otherDetails'>
                <h2>Temperature : <i>{temp}</i></h2>
                <h2>Pressure : <i>{pressure}</i></h2>
                <h2>Humidity : <i>{humidity}</i></h2>
                <h2>Speed : <i>{speed}</i></h2>
                <h2>Weather : <i>{main}</i></h2>
                <h2>Description : <i>{description}</i></h2>
            </div> 
        </div>
    </div>
  )
}

export default WeatherCard