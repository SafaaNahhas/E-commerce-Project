import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/common/NavBar/NavBar'
import TopBanner from './components/common/TopBanner/TopBanner'
import Footer from './components/common/Footer/Footer'
import DiscoverFashion from './components/common/HomePage/DiscoverFashion/DiscoverFashion'
import LindaSlider from './components/common/LindaSlider/LindaSlider'



function App() {
  return (
    <>
    <TopBanner />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <div className="App">
        <DiscoverFashion/>  
      </div>
    </Routes>
    </>
  )
  
}

export default App;
