import React from 'react';

const WeatherForm = props => (

    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="city name" className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="country name" className="form-control"/>
            </div>
            <button className="btn btn-success btn-block">Get Weather</button>
        </form>
    </div>
);

export default WeatherForm;