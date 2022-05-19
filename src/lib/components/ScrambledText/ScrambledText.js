import React, { useRef, useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Scrambler from './Scrambler.js';

const ScrambledText = (props) => {
  const scramblerRef = useRef(new Scrambler());
  const wrapper = useRef();

  const { children, onComplete = () => null } = props;

  const [scrambledText, setScrambledText] = useState(
    renderToStaticMarkup(children)
  );

  useEffect(() => {
    scramblerRef.current.scramble(
      scrambledText,
      setScrambledText,
      props.delay,
      onComplete
    );
  }, [null]);

  return (
    <span
      ref={wrapper}
      dangerouslySetInnerHTML={{ __html: scrambledText }}
    ></span>
  );
};

export default ScrambledText;
