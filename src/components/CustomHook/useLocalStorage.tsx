import React, { useEffect } from "react";

function getSavedValue(key: string, initialValue: any): any {
  const savedValue = localStorage.getItem(key);
  if (savedValue) return savedValue;
  else return initialValue;
}

export default function useLocalStorage(key: any, initialValue: any) {
  const [value, setValue] = React.useState(() => {
      return getSavedValue(key, initialValue);
  });

  // whenever the value changes, update the localStorage
  useEffect(() => {
      localStorage.setItem(key, value);
  }, [value])

  return [value, setValue];
}
