import React from 'react';
import Character from './Character';

function CharMap(props){
  return(
    <div>
      {props.data.map(item => <Character bio={item}/>)}
    </div>
  );
}

export default CharMap;
