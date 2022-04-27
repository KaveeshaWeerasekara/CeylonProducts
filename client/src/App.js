import './App.css';
import './App.scss';


import ContactUsPage from './Component/pages/ContactUsPage';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div >
  
   <BrowserRouter>
      <Routes>
      <Route path="/contactus" element={<ContactUsPage/>}></Route>
      </Routes>
   </BrowserRouter>
   </div>



  );
}

export default App;
