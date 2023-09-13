'use client';
import { useState } from 'react';
import styles from './index.module.css';
import { clientPrint } from './EditButton';

type Name = string;
interface Obj {
  name: Name;
  age: number;
}

export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  const obj: Obj = { name: 'name', age: 100 };

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <button className={styles.button} type="button" onClick={updateCount}>
      👍🏻 {count}
      <div> {clientPrint('clientPrint call')} </div>
      {children}
      <div> {JSON.stringify(obj)} </div>
    </button>
  );
}