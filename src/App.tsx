import './App.css';

import { textAndBackgroundChange, displayOverlay } from './chrome-utils'

function App() {
  function handleOnTextChange() {
    textAndBackgroundChange();
  }

  function handleOnCreateOverlay() {
    displayOverlay();
  }

  return (
    <div className="App">
      <header className="App-header" style={{ padding: 40 }}>
        <div>Actions</div>
        <button onClick={handleOnTextChange}>change font and color</button>
        <button onClick={handleOnCreateOverlay}>Create overlay</button>
      </header>
    </div>
  );
}

export default App;
