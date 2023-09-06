'use client';
import { useEffect, useState } from 'react';
// import { useAppContext } from '@ice/runtime';
import { useServerAppContext } from '@ice/runtime';

export default function Input() {
  const [text, setText] = useState('');
  const [obj, setObj] = useState(null);
  // const value = useAppContext();
  console.log('useServerAppContext', useServerAppContext, useServerAppContext());
  const value = useServerAppContext();

  useEffect(() => {
    console.log('value', value);
    if (value) {
      console.log('context arrive', value);
      setObj(value);
    }
  }, [value]);

  return (
    <>
      <input
        placeholder={obj?.name ?? 'default'}
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
        }}
      />
      {`context: ${JSON.stringify(value)}`}
    </>
  );
}