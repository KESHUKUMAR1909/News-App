import Header from './Components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import './App.css'
import Spinner from './Components/Spinner/Spinner'
import Home from "./home/Home"

function App() {

  return (
    <>
    <BrowserRouter>
       <Header />
       <Home />
       <Footer />
    </BrowserRouter>

    </>
  )
}

export default App
