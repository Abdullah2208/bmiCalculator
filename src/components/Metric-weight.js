import '../App.css';
import { weightContext } from '../App';
import { useContext } from 'react';

function MetricWeight() {
    const {activeWeightButton, setActiveWeightButton, metricWeightValue, setMetricWeightValue, imperialWeightValue, setImperialWeightValue} = useContext(weightContext);
    
    const changeHandler = (e) => {
        setMetricWeightValue(e.target.value)
        setImperialWeightValue('')
        
    }
    return(
        <input 
        value={metricWeightValue}
        onChange={changeHandler}
        type='text'
        inputMode="numeric"
        placeholder="Kilograms"
        id="metric-input"            
    />
    )
}
export default MetricWeight;