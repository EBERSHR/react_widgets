import React from 'react';
import './styles.css'

export const AnalogTemperature = () => {
    return (
        <div className='analogTemperatureComponent'>
        </div>
    )
}

export const DigitalTemperature = () => {
    return (
        <div className='digitalTemperatureComponent'>
            Temperature
            <br />
            <br />
            <div className='digitalData'>
                28.5°c
            </div>
        </div>
    )
}