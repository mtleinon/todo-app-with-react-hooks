import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });
  useEffect(() =>
    window.localStorage.setItem(key, JSON.stringify(state), [state])
  );
  return [state, setState];
}
