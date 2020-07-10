import React, {
    Component
} from 'react';


import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

import {
    WEATHER_KEY
} from './keys';

class App extends Component {
    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }

    getWeather = async e => {
        e.preventDefault();
        const {
            city,
            country
        } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if(cityValue && countryValue)
        {
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${WEATHER_KEY}&units=metric`;

        const response = await fetch(API_URL);

        const data = await response.json();

        this.setState({
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            city: data.name,
            country: data.sys.country,
            error: null
        });
        }
        else
        {
            this.setState({error: 'Enter a city or a country'})
        }
        

    }
    //key efffc88fcf7dcac6b4034914fa53bf4c


    render() {
        return ( <
            div className = "container p-4" >
            <
            div className = "row" >
            <
            div className = "col-md-6" >
            <
            WeatherForm getWeather = {
                this.getWeather
            }
            /> <WeatherInfo {...this.state}/ >
            <
            /div> < /
            div > <
            /div>

        )
    }
}

export default App;