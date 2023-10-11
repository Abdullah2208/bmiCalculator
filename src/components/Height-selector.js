import '../App.css'

import { heightContext } from '../App';
import React,{ useContext } from 'react';

function HeightSelector () {

const {activeHeightButton, setActiveHeightButton} = useContext(heightContext);

const metricChange = () => {
    setActiveHeightButton('metric')
}
const imperialChange = () => {
    setActiveHeightButton('imperial')
}

    return (
        <div className="height-buttons-div">
            <button onClick={metricChange}>Metric</button>
            <button onClick={imperialChange}>Imperial</button>
        </div>
    )
}

export default HeightSelector;