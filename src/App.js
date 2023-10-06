import './App.css';
import HeightSelector from './components/Height-selector';
import MetricHeading from './components/Metric-height';

function App () {
  return (
    <div className='main-card'>
      <h1>BMI Calculator</h1>
      <h2>Height</h2>
      <HeightSelector />
      <MetricHeading />
      <h2>Weight</h2>
    </div>
  )
}
export default App;