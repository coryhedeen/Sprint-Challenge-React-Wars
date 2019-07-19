import React from 'react';
import { Names, EyeColor } from './Styled';

function Character(props){
  return (
    <div>
      <Names>Name: {props.bio.name}</Names>
      <EyeColor>Eye-color: {props.bio.hair_color}</EyeColor>
    </div>
  )
}

export default Character;
