import React from 'react';
import { Names } from './Styled';

function Character(props){
  return (
    <div>
      <Names>Name: {props.bio.name}</Names>
      <div>Eye-color: {props.bio.hair_color}</div>
    </div>
  )
}

export default Character;
