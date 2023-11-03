import React from 'react';
import Main from './components/main/Main';
import Header from './components/header/Header';

function App() {

  return (
    <div className="page" >
      <div className='page__content'>
        <Header />

        
        <Main />
      </div>
    </div>
  );
}

export default App;
