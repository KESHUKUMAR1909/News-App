import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CustomRoutes from './Routes/CustomRoutes';

function App() {
  return (
    <BrowserRouter> 
      <CustomRoutes />
    </BrowserRouter>
  );
}

export default App;
