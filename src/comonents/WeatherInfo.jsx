import React from 'react';

const WeatherInfo = ({weater}) => {

    return (
        <div className='infoWeath'>
            {weater.city &&
                <div>
                    <p>Мустополпжение: {weater.city}, {weater.county}</p>
                    <p>Температура: {weater.temp}</p>
                    <p>Давение: {weater.pressure}</p>
                    <p>Заход солнца: {weater.sunset}</p>
                </div>
            }
            <p className='error'>{weater.error}</p>
        </div>
    );
};

export default WeatherInfo;