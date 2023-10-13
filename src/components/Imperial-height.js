import '../App.css'
import { useContext } from 'react';
import { heightContext } from '../App';


function ImperialHeight () {

    const {activeHeightButton, setActiveHeightButton, metricHeightValue, setMetricHeightValue, feetValue, setFeetValue, inchesValue, setInchesValue} = useContext(heightContext);

    const feetChange = (e) => {
        setFeetValue(e.target.value);
        setMetricHeightValue('')
    }
    const inchesChange = (e) => {
        setInchesValue(e.target.value);
        setMetricHeightValue('')
    }
    return (

        <div className="imperial-input-div">
            <input
                value={feetValue} 
                type='text'
                inputMode="numeric"
                placeholder="Feet"
                id="feet-input"
                onChange={feetChange}            
            />
            <input
                value={inchesValue} 
                type='text'
                inputMode="numeric"
                placeholder="Inches"
                id="inches-input"
                onChange={inchesChange}            
            />
        </div>
    )
}

export default ImperialHeight;