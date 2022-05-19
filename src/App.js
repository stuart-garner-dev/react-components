import React from 'react';

import ScrambledText from './lib/components/ScrambledText';

import './App.css';

function App() {
  return (
    <ScrambledText delay={60}>
      <div className="App">react-scrambled-text</div>
    </ScrambledText>
  );
}

export default App;
