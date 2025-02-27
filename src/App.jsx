import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CustomRoutes from './Routes/CustomRoutes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.innerWidth < 768) {
        alert("Please switch to a desktop for a better experience.");
    }
}, []);
  return (
    <BrowserRouter> 
      <CustomRoutes />
    </BrowserRouter>
  );
}

export default App;
