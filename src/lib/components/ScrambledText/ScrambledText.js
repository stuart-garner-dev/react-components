import React, { useRef, useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Scrambler from './Scrambler.js';

const ScrambledText = (props) => {
  const scramblerRef = useRef(new Scrambler());
  const wrapper = useRef();

  const {
    children,
    delay = 2,
    onComplete = () => null,
    placeHolder = '',
  } = props;

  const [scrambledText, setScrambledText] = useState('');

  useEffect(() => {
    scramblerRef.current.scramble(
      renderToStaticMarkup(children),
      setScrambledText,
      delay,
      onComplete,
      placeHolder
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <span
      ref={wrapper}
      dangerouslySetInnerHTML={{ __html: scrambledText }}
    ></span>
  );
};

export default ScrambledText;
