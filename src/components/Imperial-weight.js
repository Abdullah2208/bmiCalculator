import '../App.css';
import { useContext } from 'react';
import { weightContext } from '../App';


function ImperialWeight() {
    const {activeWeightButton, setActiveWeightButton, metricWeightValue, setMetricWeightValue, imperialWeightValue, setImperialWeightValue} = useContext(weightContext);

    const changeHandler = (e) => {
        setImperialWeightValue(e.target.value);
        setMetricWeightValue('')
    }
    return (
        <input
         value={imperialWeightValue}
         onChange={changeHandler}
        type='text'
        inputMode="numeric"
        placeholder="Pounds"
        id="imperial-weight-input"            
    />
    )

}

export default ImperialWeight;