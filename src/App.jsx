import Header from './Components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import './App.css'
import Home from "./home/Home"
import NewsPage from './News/NewsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Home /> */}
        <Home />
        {/* <NewsPage category={"technology"}  country={"us"} size={8} /> */}
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App        