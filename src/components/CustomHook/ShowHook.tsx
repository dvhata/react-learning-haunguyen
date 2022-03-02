import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateConsoleLog from "./useUpdateConsoleLog";

export default function ShowLocalStorage() {
  const [name, setName] = useLocalStorage("name","");
  useUpdateConsoleLog(name)
  return (
    <div>
      <input type="text" name={name} onChange={(e) => setName(e.target.value)} />
      <div>Your output is saved: {name}</div>
    </div>
  );
}
