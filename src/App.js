import wheel from './images/wheel.png'
import React from 'react';

function App() {
  
  const [wheelAngle, setWheelAngle] = React.useState(0)

  React.useEffect(() => {
    const currentAngle = wheelAngle % 360;
    if (currentAngle > 22.5 && currentAngle <= 67.5 ) {
      console.log('750 очков на барабане');
    } else if (currentAngle > 67.5 && currentAngle <= 112.5 ) {
      console.log('200 очков на барабане');
    } else if (currentAngle > 112.5 && currentAngle <= 157.5 ) {
      console.log('150 очков на барабане');
    } else if (currentAngle > 157.5 && currentAngle <= 202.5 ) {
      console.log('100 очков на барабане');
    } else if (currentAngle > 202.5 && currentAngle <= 247.5 ) {
      console.log('10 очков на барабане');
    } else if (currentAngle > 247.5 && currentAngle <= 292.5 ) {
      console.log('400 очков на барабане');
    } else if (currentAngle > 292.5 && currentAngle <= 337.5 ) {
      console.log('250 очков на барабане');
    } else {
      console.log('JACKPOT!');
    }
    console.log(currentAngle)
  }, [wheelAngle])

  function randomInteger(min, max) {
    let rand = Math.floor((min + Math.random() * (max + 1 - min)) * 10) / 10;
    if (Math.floor(rand) === 360) {
      rand = 4;
      return rand;
    }
    return rand;
  }

  const randomWheelAngle = () => {
    const randomMath = randomInteger(1, 360);
    console.log( randomMath)
    setWheelAngle(wheelAngle + randomMath + 720)
  }

  return (
    <div className="container">
      <h1> Колесо фортуны</h1>
      <div className="container__wheel" >
          <img className="container__image" src={wheel} style={{
        transform: `rotate(${wheelAngle}deg)`,
      }} alt='колесо-фортуны'/>
      </div>
      <button onClick={randomWheelAngle} style={{
        backgroundColor: 'red',
        
      }}>Испытать удачу</button>
    </div>
  );
}

export default App;
