import '../App.css'
import { weightContext } from '../App';
import React, { useContext} from 'react';


function WeightSelector () {

    const {activeWeightButton, setActiveWeightButton} = useContext(weightContext);

    const metricChange = () => {
        setActiveWeightButton('metric')
    }
    const imperialChange = () => {
        setActiveWeightButton('imperial')
    }

    return (
        <div className="height-buttons-div">
            <button onClick={metricChange}>Metric</button>
            <button onClick={imperialChange}>Imperial</button>
        </div>
    )
}

export default WeightSelector;