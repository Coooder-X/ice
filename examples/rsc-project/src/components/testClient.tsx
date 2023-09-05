'use client';

import { useState } from 'react';
import url from '../pages/ice.png';
import Bar from './bar';

export default function TestClient(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>client test  {props.name}</div>
      <img src={url} height="40" width="40" />
      <div>count: {count}</div>
      <button onClick={() => { setCount(count + 1); }}>admindd</button>
      <Bar num={count} />
    </>
  );
}

export function mul(a, b) {
  return a * b;
}