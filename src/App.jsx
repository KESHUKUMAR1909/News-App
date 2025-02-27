import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CustomRoutes from './Routes/CustomRoutes';

function App() {
  return (
    <BrowserRouter> 
      <CustomRoutes />
    </BrowserRouter>
  );
  console.log(process.env.API_KEY)
}

export default App;
