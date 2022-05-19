import React from 'react';

import ScrambledText from './lib/components/ScrambledText';

import './App.css';

function App() {
  return (
    <ScrambledText delay={60}>
      <div className="App">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
        sagittis nunc. Cras tincidunt sapien ut eros vestibulum, nec scelerisque
        lorem ultrices. Maecenas eu dictum odio, ut eleifend mauris. Maecenas ut
        turpis nec lectus egestas aliquet scelerisque et purus. In sit amet
        tempus nisi, ac suscipit neque. Nunc imperdiet quam sit amet diam
        viverra pulvinar. In ut venenatis orci. Quisque sed nulla in nibh
        commodo pulvinar. Aenean imperdiet nunc elit, ut semper leo pellentesque
        eu. Phasellus eu pellentesque mauris. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Nullam ut mi
        rhoncus, vestibulum arcu et, elementum elit. Vivamus ut vestibulum ante.
      </div>
    </ScrambledText>
  );
}

export default App;
