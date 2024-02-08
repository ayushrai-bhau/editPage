import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Update from "./Update"

import Home from "./App"

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
    </Routes>
    
    </BrowserRouter>
   </div>
  );
};

export default App;
