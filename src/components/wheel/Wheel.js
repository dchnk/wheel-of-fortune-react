import wheel from '../../images/wheel.png'
import pin from '../../images/pin.png'
import React from 'react';


function Wheel() {

  const [wheelAngle, setWheelAngle] = React.useState(0)


  React.useEffect(() => {
    const currentAngle = wheelAngle % 360;
    if (currentAngle > 22.5 && currentAngle <= 67.5) {
      console.log('750 очков на барабане');
    } else if (currentAngle > 67.5 && currentAngle <= 112.5) {
      console.log('200 очков на барабане');
    } else if (currentAngle > 112.5 && currentAngle <= 157.5) {
      console.log('150 очков на барабане');
    } else if (currentAngle > 157.5 && currentAngle <= 202.5) {
      console.log('100 очков на барабане');
    } else if (currentAngle > 202.5 && currentAngle <= 247.5) {
      console.log('10 очков на барабане');
    } else if (currentAngle > 247.5 && currentAngle <= 292.5) {
      console.log('400 очков на барабане');
    } else if (currentAngle > 292.5 && currentAngle <= 337.5) {
      console.log('250 очков на барабане');
    } else {
      console.log('JACKPOT!');
    }
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
    setWheelAngle(wheelAngle + randomMath + 3600)
  }

  return (
    <div className="wheel">
      <div className="wheel__container">
          <img className="wheel__pin" src={pin} alt='указатель'></img>
        <img className="wheel__image" src={wheel} alt='колесо-фортуны' style={{
          transform: `rotate(${wheelAngle}deg)`,
        }} />
      </div>
      <button className="wheel__button" onClick={randomWheelAngle} style={{
        backgroundColor: 'red',

      }}>Spin wheel</button>
    </div>
  );
}

export default Wheel;