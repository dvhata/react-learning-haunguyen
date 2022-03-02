import React from 'react';
import './App.scss';
import ColorBox from './components/ColorBox/ColorBox';
import ShowLocalStorage from './components/CustomHook/ShowLocalStorage';

function App() {
  return (
    <div className="App">
      <h1> USE STATE - Box color changing when click</h1>
      <ColorBox/>
      <h1> How to custom hook</h1>
      <ShowLocalStorage/>
    </div>
  );
}

export default App;
