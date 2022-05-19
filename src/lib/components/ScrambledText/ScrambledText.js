import React, { useRef, useEffect, useState } from 'react';

import Scrambler from './Scrambler.js';

const ScrambledText = (props) => {
  const scramblerRef = useRef(new Scrambler());

  const { text } = props;
  const [scrambledText, setScrambledText] = useState(text);

  useEffect(() => {
    scramblerRef.current.scramble(text, onScramble);
  }, [text]);

  const onScramble = (value) => {
    setScrambledText(value);
  };

  return <span dangerouslySetInnerHTML={{ __html: scrambledText }}></span>;
};

export default ScrambledText;
