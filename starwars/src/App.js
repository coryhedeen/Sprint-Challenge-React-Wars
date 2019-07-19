import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  const [star, setStar] = useState([])

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {console.log(res.data)
      setStar(res.data.results)})
      .catch(err => console.log(err))
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Character bio={star.map(item => item.name)}/>
    </div>
  );
}

export default App;
