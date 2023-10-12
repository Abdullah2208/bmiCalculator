import './App.css';

import React, { useState} from 'react';

import HeightSelector from './components/Height-selector';
import MetricHeight from './components/Metric-height';
import WeightSelector from './components/Weight-selector';
import ImperialHeight from './components/Imperial-height';
import MetricWeight from './components/Metric-weight';
import ImperialWeight from './components/Imperial-weight';
import Output from './components/Output';
import Submit from './components/Submit';


export const heightContext = React.createContext();
export const weightContext = React.createContext();

function App () {

  const [activeHeightButton, setActiveHeightButton ] = useState('metric');
  const [activeWeightButton, setActiveWeightButton ] = useState('metric');

  return (
    <div className='main-card'>
        <heightContext.Provider value={{activeHeightButton, setActiveHeightButton}}>
            <h1>BMI Calculator</h1>
            <h2>Height</h2>
            <HeightSelector />
            {activeHeightButton === 'metric' ? <MetricHeight /> : <ImperialHeight />}
        </heightContext.Provider>
        <weightContext.Provider value={{activeWeightButton, setActiveWeightButton}}>
            <h2>Weight</h2>
            <WeightSelector />
            {activeWeightButton === 'metric' ? <MetricWeight /> : <ImperialWeight />}
        </weightContext.Provider>

        <Output />
        <Submit />
        
    </div>
  )
}
export default App;