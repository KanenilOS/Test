import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hello from react</h1>}/>

      </Routes>
    </BrowserRouter>
  )
}
export default App;