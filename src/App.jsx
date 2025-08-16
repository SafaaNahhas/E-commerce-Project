import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/common/Footer/Footer'
import DiscoverFashion from './components/common/HomePage/DiscoverFashion/DiscoverFashion'
import LindaSlider from './components/common/LindaSlider/LindaSlider'



function App() {
  return (
    <div className="App">
      <DiscoverFashion/>
    </div>
  );
}

export default App;
