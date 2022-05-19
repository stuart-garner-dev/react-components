import React, { useState } from 'react';

import ScrambledText from './lib/components/ScrambledText';

import './App.css';

function App() {
  const [test, setTest] = useState('Hello');
  return (
    <>
      <ScrambledText
        delay={5}
        onComplete={() => console.log('complete')}
        placeHolder={'_'}
      >
        <div className="App">
          Lorem ipsum dolor sit{' '}
          <span className="color-red">
            amet, consectetur adipiscing elit. In sit amet
          </span>
          sagittis nunc. Cras tincidunt sapien ut eros vestibulum, nec
          scelerisque lorem ultrices.
          <strong>Maecenas eu dictum odio, ut eleifend mauris.</strong> Maecenas
          ut turpis nec lectus egestas aliquet scelerisque et purus. In sit amet
          tempus nisi, ac suscipit neque. Nunc imperdiet quam sit amet diam
          viverra pulvinar.
          <span className="color-green">{test}</span>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nullam ut mi rhoncus, vestibulum arcu et,
          elementum elit. Vivamus ut vestibulum ante.
        </div>
      </ScrambledText>
      <br />
      <br />
      <div className="App">
        Lorem ipsum dolor sit{' '}
        <span className="color-red">
          amet, consectetur adipiscing elit. In sit amet
        </span>
        sagittis nunc. Cras tincidunt sapien ut eros vestibulum, nec scelerisque
        lorem ultrices.
        <strong>Maecenas eu dictum odio, ut eleifend mauris.</strong> Maecenas
        ut turpis nec lectus egestas aliquet scelerisque et purus. In sit amet
        tempus nisi, ac suscipit neque. Nunc imperdiet quam sit amet diam
        viverra pulvinar.
        <span className="color-green">{test}</span>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Nullam ut mi rhoncus, vestibulum arcu et, elementum elit.
        Vivamus ut vestibulum ante.
      </div>
      <br />
      <br />
      <button onClick={() => setTest(new Date().toString())}>Button</button>
    </>
  );
}

export default App;
