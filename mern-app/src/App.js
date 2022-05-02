
import './App.scss';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    
      
      
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            
        </Routes>
      
      </BrowserRouter>
      
      
        
     

      
    
  );
}

export default App;
