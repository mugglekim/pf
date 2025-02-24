import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './components/Main';


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={
          <div className='app'>
            <Main/>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;