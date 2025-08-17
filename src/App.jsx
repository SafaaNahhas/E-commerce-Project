import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/common/NavBar/NavBar'
import TopBanner from './components/common/TopBanner/TopBanner'

function App() {

  return (
    <>
    <TopBanner />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
