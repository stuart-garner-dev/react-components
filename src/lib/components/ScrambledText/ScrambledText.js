import React, { useRef, useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Scrambler from './Scrambler.js';

const ScrambledText = (props) => {
  const scramblerRef = useRef(new Scrambler());
  const wrapper = useRef();

  const { children, delay, onComplete = () => null, placeHolder = '' } = props;

  const [scrambledText, setScrambledText] = useState(
    renderToStaticMarkup(children)
  );

  useEffect(() => {
    scramblerRef.current.scramble(
      scrambledText,
      setScrambledText,
      delay,
      onComplete,
      placeHolder
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
