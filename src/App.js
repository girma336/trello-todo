import React, { useState } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Section from './component/Section';

const App = () => {
  const [bar, setBar] = useState(false);
  return (
    <div className={`${bar ? 'container grid' : 'container'}`}>
      <NavBar bar={bar} setBar={setBar} />
      {/* <div className='section'> */}
      <Section bar={bar} />
      {/* </div> */}
    </div>
  );
};

export default App;
