'use client';

import { useEffect, useState } from 'react';
import { useServerAppContext } from '@ice/runtime';
import url from '../pages/ice.png';
import Bar from './bar';

export default function TestClient(props) {
  const [count, setCount] = useState(0);
  const value = useServerAppContext();
  // console.log('useAppContext', useAppContext, useAppContext())

  const [obj, setObj] = useState(null);
  useEffect(() => {
    console.log('value', value);
    if (value) setObj(value);
  }, [value]);
  console.log('client context', value);
  return (
    <>
      <div>client test  {props.name}</div>
      <img src={url} height="40" width="40" />
      <div>count: {count}</div>
      <button onClick={() => { setCount(count + 1); }}>admindd</button>
      <Bar num={count} />
      {JSON.stringify(obj)}
    </>
  );
}

export function mul(a, b) {
  return a * b;
}