import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/common/Footer/Footer'
import DiscoverFashion from './components/common/HomePage/DiscoverFashion/DiscoverFashion'
import LindaSlider from './components/common/LindaSlider/LindaSlider'

function App() {

  const slides = [
        {
            image: 'public\assets\img\Home_Page\discover_fashion\Pants.png',
            icon: '🌟',
            description: 'Description for Slide 1',
            price: '$10'
        },
        {
            image: "public\assets\img\Home_Page\discover_fashion\Pants.png'",
            icon: '🌟',
            description: 'Description for Slide 2',
            price: '$20'
        },
        {
            image: 'public\assets\img\Home_Page\discover_fashion\Pants.png',
            icon: '🌟',
            description: 'Description for Slide 3',
            price: '$30'
        },
        {
            image: 'public\assets\img\Home_Page\discover_fashion\Pants.png',
            icon: '🌟',
            description: 'Description for Slide 4',
            price: '$40'
        },
        {
            image: 'public\assets\img\Home_Page\discover_fashion\Pants.png',
            icon: '🌟',
            description: 'Description for Slide 5',
            price: '$50'
        },
        {
            image: 'public\assets\img\Home_Page\discover_fashion\Pants.png',
            icon: '🌟',
            description: 'Description for Slide 6',
            price: '$60'
        },
        {
            image: 'public\assets\img\Home_Page\discover_fashion\Pants.png',
            icon: '🌟',
            description: 'Description for Slide 7',
            price: '$70'
        },
        {
            image: 'public\assets\img\Home_Page\discover_fashion\Pants.png',
            icon: '🌟',
            description: 'Description for Slide 8',
            price: '$80'
        }
    ];


    return (
        <div>
            <h1>Image Slider</h1>
            <LindaSlider slides={slides} />
        </div>
    );
}

export default App
