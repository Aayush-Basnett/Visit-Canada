import React, { useEffect, useState } from 'react'
import axios from "axios";
import { WiDaySunny, WiRain, WiCloudy, WiDayCloudy, WiDayFog, WiDaySnow, WiThunderstorm } from 'react-icons/wi';
import Clock from 'react-live-clock';

function Weather({ lat, lon, zone, title }) {
  let image;
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherIcon = (arnold) => {
    switch (arnold) {
      case 'Clear':
        // setWeatherImage('https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?b=1&s=170667a&w=0&k=20&c=rHd7W8nOPEdKEnuMgpSnfC2OC9B_rwMe1HS7k_d-ORc=') 
        return <WiDaySunny />;
      case 'Rain':
        // setWeatherImage('https://media.istockphoto.com/id/114313632/photo/rainy-day-apartments.jpg?b=1&s=170667a&w=0&k=20&c=3xVpXXiXu7gTnNY_D13BmGaRsRdEOvOO2w3B_sdLqAQ=') 
        return <WiRain />;
      case 'Clouds':
        // setWeatherImage('https://media.istockphoto.com/id/542795898/photo/before-the-storm.jpg?b=1&s=170667a&w=0&k=20&c=C7eoWY1sb1TdUupcASWofMR05sI_aGG4DOYmES4Y63c=') 
        return <WiCloudy />;

      case 'Mist':
        // setWeatherImage('https://media.istockphoto.com/id/626590396/photo/summer-cloudy-lofoten-islands-norway-misty-fjords.jpg?b=1&s=170667a&w=0&k=20&c=sYtFE4odSqrMdetJJbDhqb9hZ69-Bpvv1G5Uk_9z4Uo=') 
        return <WiDayFog />;

      case 'Snow':
        // setWeatherImage('https://media.istockphoto.com/id/629653980/photo/snowman.jpg?b=1&s=170667a&w=0&k=20&c=pqEAWXJ62vxOiY4DNtmu661rbQ4lPnbYG57EkKujrs8=') 
        return <WiDaySnow />;

      case 'Thunderstorm':
        // setWeatherImage('https://images.unsplash.com/photo-1585074245728-eedb0cc44a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bmRlciUyMHN0b3JtfGVufDB8fDB8fA%3D%3D&w=1000&q=80') 
        return <WiThunderstorm />;

      default:
        // setWeatherImage('https://media.istockphoto.com/id/598222542/photo/sky-background.jpg?b=1&s=170667a&w=0&k=20&c=qDq7UcDRVBiumwkBzeorTVOBnreQuIsavL02DeTTy7M=') 
        return <WiDayCloudy />;

    }
  };

  const getWeatherImage = (weather) => {
    switch (weather) {
      case 'Clear':
       return 'https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?b=1&s=170667a&w=0&k=20&c=rHd7W8nOPEdKEnuMgpSnfC2OC9B_rwMe1HS7k_d-ORc=';
        break;
      case 'Rain':
       return 'https://media.istockphoto.com/id/114313632/photo/rainy-day-apartments.jpg?b=1&s=170667a&w=0&k=20&c=3xVpXXiXu7gTnNY_D13BmGaRsRdEOvOO2w3B_sdLqAQ=';
        break;
      case 'Clouds':
       return 'https://media.istockphoto.com/id/542795898/photo/before-the-storm.jpg?b=1&s=170667a&w=0&k=20&c=C7eoWY1sb1TdUupcASWofMR05sI_aGG4DOYmES4Y63c=';
        break;
      case 'Mist':
       return 'https://media.istockphoto.com/id/626590396/photo/summer-cloudy-lofoten-islands-norway-misty-fjords.jpg?b=1&s=170667a&w=0&k=20&c=sYtFE4odSqrMdetJJbDhqb9hZ69-Bpvv1G5Uk_9z4Uo=';
        break;
      case 'Snow':
       return 'https://media.istockphoto.com/photos/snow-on-the-street-with-blurred-light-abstract-winter-background-picture-id1303053567?b=1&k=20&m=1303053567&s=170667a&w=0&h=0hGDUfJZoYmZfijD0vJ5x6z5U_E0GJhZZKnaeTHN9oQ=';
        break;
      case 'Thunderstorm':
       return 'https://images.unsplash.com/photo-1585074245728-eedb0cc44a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bmRlciUyMHN0b3JtfGVufDB8fDB8fA%3D%3D&w=1000&q=80';
        break;
        case 'light snow':
          return 'https://media.istockphoto.com/photos/snow-on-the-street-with-blurred-light-abstract-winter-background-picture-id1303053567?b=1&k=20&m=1303053567&s=170667a&w=0&h=0hGDUfJZoYmZfijD0vJ5x6z5U_E0GJhZZKnaeTHN9oQ=';
           break;
      default:
       return 'https://media.istockphoto.com/id/598222542/photo/sky-background.jpg?b=1&s=170667a&w=0&k=20&c=qDq7UcDRVBiumwkBzeorTVOBnreQuIsavL02DeTTy7M=';
    }
  };
  
  useEffect(() => {
    const API_KEY = 'b6f287dc67fbc1ec988c7197f9309e09';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    axios.get(API_URL)
      .then(response => setWeatherData(response.data))
      .catch(error => console.log(error));
  }, [lat, lon]);

  return (
    <div className='weather'>
      {weatherData && (
        <div className='text-light'>
            

         <div  className="container-fluid px-1 px-md-4 py-1 mx-auto">
    <div  className="row d-flex justify-content-center px-3">
        <div  className="card"
        style={{backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.136), rgba(0, 0, 0, 0.956)), url(${getWeatherImage(weatherData.weather[0].main)})`      }}
        >
            <h2  className="ml-auto mr-4 mt-3 mb-0">{title}</h2>
            <p  className="ml-auto mr-4 mb-0 med-font">{getWeatherIcon(weatherData.weather[0].main)} {weatherData.weather[0].description}</p>
            <h1  className="ml-auto mr-4 large-font">{weatherData.main.temp}°C&#176;</h1>
            <p  className="time-font mb-0 ml-4 mt-auto"><Clock format={'HH:mm:ss'} ticking={true} timezone={`${zone}`} />
</p>
        </div>
    </div>
</div>


        </div>
      )}
    </div>
  )
}

export default Weather
