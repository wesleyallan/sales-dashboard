import { useEffect, useState } from 'react';

export function usePersistentBoolean(keyStorage) {
  const [value, setValue] = useState(() => {
    const valueLocalStorage = localStorage.getItem(keyStorage);
    return valueLocalStorage === 'true';
  });

  useEffect(() => {
    localStorage.setItem(keyStorage, String(value));
  }, [value]);

  return { value, setValue };
}
