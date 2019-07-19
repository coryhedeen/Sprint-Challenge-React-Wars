import React from 'react';
import { Names } from './Styled';

function Character(props){
  return (
    <div>
      <Names>{props.bio.name}</Names>
    </div>
  )
}

export default Character;
