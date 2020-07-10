import React, {Component} from 'react';


import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

import {WEATHER_KEY} from './keys';

class App extends Component 
{
    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }

    getWeather= async e=> {
        e.preventDefault();
        const {city,country} = e.target.elements;
        const cityValue = city.value; 
        const countryValue = country.value; 
        console.log(cityValue,countryValue);

        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${WEATHER_KEY}`;

        const response = await fetch(API_URL);

        const data = await response.json();

        console.log(data,'funciona');

    }
    //key efffc88fcf7dcac6b4034914fa53bf4c


    render() 
    {
        return(
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo/>
                    </div>
                </div>
            </div>

        )
    }
}

export default App;