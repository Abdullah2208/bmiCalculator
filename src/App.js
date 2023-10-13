import './App.css';

import React, { useState} from 'react';

import HeightSelector from './components/Height-selector';
import MetricHeight from './components/Metric-height';
import WeightSelector from './components/Weight-selector';
import ImperialHeight from './components/Imperial-height';
import MetricWeight from './components/Metric-weight';
import ImperialWeight from './components/Imperial-weight';
import Output from './components/Output';

export const heightContext = React.createContext();
export const weightContext = React.createContext();


function App () {

  const [activeHeightButton, setActiveHeightButton ] = useState('metric');
  const [activeWeightButton, setActiveWeightButton ] = useState('metric');

  const [metricHeightValue, setMetricHeightValue] = useState('');
  const [feetValue, setFeetValue] = useState('');
  const [inchesValue, setInchesValue] = useState('');

  const [metricWeightValue, setMetricWeightValue] = useState('');
  const [imperialWeightValue, setImperialWeightValue] = useState('');

  const handleChange = ()  => {
    let totalHeight;
    let totalWeight;

    if (activeHeightButton === 'imperial') {
      let totalInches = (feetValue * 12) + parseInt(inchesValue, 10);
      totalHeight = Math.floor(totalInches * 2.54)/100;
    }else {
      totalHeight = metricHeightValue/100
    };

    if (activeWeightButton === 'imperial') {
      totalWeight = Math.round(imperialWeightValue * 0.45359237);
    }else{
      totalWeight = metricWeightValue
    };

    let bmi = Math.round(totalWeight/Math.pow(totalHeight, 2));
    
    
    return bmi;
  }

  const bmi = handleChange();
  return (
    <div className='main-card'>
        <h1>BMI Calculator</h1>

        <heightContext.Provider value={{activeHeightButton, setActiveHeightButton, metricHeightValue, setMetricHeightValue, feetValue, setFeetValue, inchesValue, setInchesValue}}>

            <h2>Height</h2>
            <HeightSelector />
            {activeHeightButton === 'metric' ? <MetricHeight /> : <ImperialHeight />}
        </heightContext.Provider>

        <weightContext.Provider value={{activeWeightButton, setActiveWeightButton, metricWeightValue, setMetricWeightValue, imperialWeightValue, setImperialWeightValue}}>
            <h2>Weight</h2>
            <WeightSelector />
            {activeWeightButton === 'metric' ? <MetricWeight /> : <ImperialWeight />}
        </weightContext.Provider>

        <Output value={bmi}/>

        <button className='result-button' onClick={handleChange}>Result</button>
      
    </div>
  )
}
export default App;