import React from 'react';
import Main from './components/main/Main';
import Header from './components/header/Header';

function App() {

  return (
    <div className="page" >
      <div className='page__content'>
        <div className='page__container'>
          <Header />


          <Main />
        </div>

      </div>
    </div>
  );
}

export default App;
