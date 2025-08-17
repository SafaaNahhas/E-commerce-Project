import React from 'react';

export const PrevButton = ({ onClick }) => (
  <button className="embla__button embla__button--prev" onClick={onClick}>
    &lt;
  </button>
);

export const NextButton = ({ onClick }) => (
  <button className="embla__button embla__button--next" onClick={onClick}>
    &gt;
  </button>
);
