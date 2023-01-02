import React from 'react';
import './App.css';
import Body from './Components/Body/Body';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from './Components/form/form';
import Thanks from './Components/thanks/thanks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/contactus' element={<Form />} />
          <Route path='/thanks' element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
