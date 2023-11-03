import React from 'react';
import Avs from '../../images/Avatar.svg'
function Winner({avatar, name}) {
  const ava = avatar;


  return (
        <li className='winner__item'>
          <img className='winner__photo' src={Avs}/>
          <p className='winner__name'>{name}</p>
        </li>
  );
}

export default Winner;