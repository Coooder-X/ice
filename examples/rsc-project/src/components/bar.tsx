'use client';
import { mul } from './testClient';

export default function Bar({ num }) {
  return (
    <div>
      bar {mul(num, 5)}
    </div>
  );
}
