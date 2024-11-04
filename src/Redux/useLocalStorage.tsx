import React, { useState } from 'react'

function useLocalStorage(keyName: string, defaultValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      }
      else{
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  });
  const setValue = (newValue: any) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (error) {
      console.error(error);
    }
    setStoredValue(newValue);
  }
  return [storedValue, setStoredValue];
}

export default useLocalStorage