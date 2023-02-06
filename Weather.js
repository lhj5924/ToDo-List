import { React, useState, useEffect} from 'react';
import axios from 'axios';
import './Weather.css'

function Weather () {    
  
  const [iconURL, setUrl] = useState('')
  const [iconAlt, setAlt] = useState('')

  const getURL = async(position) => {
    // 현재 위치 및 날씨 정보 리소스 url 가져오기
    const coords = position.coords;
    const API_KEY = "f24ccd1ad865cd1692401d49ce32ef57";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`;

    // axios 를 사용하여 url 에서 icon 정보 가져오기
    await axios.get(url)
    .then((response) => {
          let data = response.data;
          // let icon = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`
          let icon = data.weather[0].icon
          let alt=data.weather[0].description
          // icon - 로컬에 저장한 아이콘을 사용할 순 없을까?
          // let icon = "./public/images/icons"+ data.weather[0].icon + ".png"
          setUrl(icon)
          setAlt(alt)
        })
    .catch((error)=>{
      console.warn(`ERROR(${error.code}): ${error.message}`)
    })    
    }

  useEffect(() => {getURL()} , [iconURL] )

    // console.log(iconURL);

    navigator.geolocation.getCurrentPosition(getURL)
    
    return ( 
        <>
        <div className='weather__today'>
          {/* <img src={iconURL} alt={iconAlt} className='weather__today-icon'></img> */}
          <img 
            src={`${process.env.PUBLIC_URL}/images/icons/${iconURL}.png`} 
            alt={iconAlt} 
            className='weather__today-icon'>
          </img>
        </div>
      </>
    )
  }




export default Weather;