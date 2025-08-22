import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail.jsx'
import Support from './pages/Support'
import Navbar from './components/common/NavBar/NavBar'
import TopBanner from './components/common/TopBanner/TopBanner'
import Footer from './components/common/Footer/Footer'




function App() {
  return (
    <>
    <TopBanner />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Products' element={<Products/>} />
      <Route path="/Product/:id" element={<ProductDetail/>} />
      <Route path='/Support' element={<Support/>} />
    </Routes>
    <Footer />
    </>
  )
  
}

export default App;
