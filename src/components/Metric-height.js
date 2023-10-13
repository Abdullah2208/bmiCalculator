import '../App.css';
import { useContext } from 'react';

import { heightContext } from '../App';


function MetricHeight() {
    const {activeHeightButton, setActiveHeightButton, metricHeightValue, setMetricHeightValue, feetValue, setFeetValue, inchesValue, setInchesValue} = useContext(heightContext);

    const handleChange = (e) => {
        setMetricHeightValue(e.target.value);
        setFeetValue('');
        setInchesValue('')
      }
    return(
            <input
                value={metricHeightValue}
                onChange={handleChange} 
                type='text'
                inputMode="numeric"
                placeholder="Centimeters"
                id="metric-input"            
            />
    )
}

export default MetricHeight;