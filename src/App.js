import React from 'react';
import Wheel from './components/wheel/Wheel';
import Header from './components/header/Header';

function App() {

  return (
    <div className="page" >
      <div className='page__content'>
        <Header />

        
        <Wheel />
      </div>
    </div>
  );
}

export default App;
