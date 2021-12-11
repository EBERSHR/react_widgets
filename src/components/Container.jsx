import React from 'react';
import { AnalogTemperature, DigitalTemperature } from './Temperature';

export default function Container() {
    return (
        <div className='containerComponent'>
            {/* <AnalogTemperature /> */}
            <DigitalTemperature />
        </div>
    )
}
