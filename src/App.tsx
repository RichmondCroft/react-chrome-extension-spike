import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { changeBg } from './chrome-utils/index'

function App() {
  function handleOnTextChange() {
    changeBg();
  }

  return (
    <div className="App">
      <header className="App-header" style={{ padding: 40 }}>
        <div>Actions</div>
        <button onClick={handleOnTextChange}>change font and color</button>
      </header>
    </div>
  );
}

export default App;
