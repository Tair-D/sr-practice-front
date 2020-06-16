import React from 'react';
export default function Points() {
  let cxSmallRow = [];
  let cx = [];

  for (let i = 10; i < 310; i += 20) {
    cx.push(i);
  }
  for (let i = 10; i < 70; i += 20) {
    cxSmallRow.push(i);
  }

  return (
    <div>
      <svg width="1000" height="130" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 100" />

        {cx.map((cx) => {
          return <circle cx={cx} cy="30" r="2" fill="red" />;
        })}
        {cx.map((cx) => {
          return <circle cx={cx} cy="50" r="2" fill="red" />;
        })}
        {cxSmallRow.map((cx) => {
          return <circle cx={cx} cy="70" r="2" fill="red" />;
        })}
        {cxSmallRow.map((cx) => {
          return <circle cx={cx} cy="90" r="2" fill="red" />;
        })}
        {cxSmallRow.map((cx) => {
          return <circle cx={cx} cy="110" r="2" fill="red" />;
        })}
      </svg>
    </div>
  );
}
