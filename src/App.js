import logo from './logo.svg';
import './App.css';
import Words from './components/words'
import React, { useState } from 'react';


function MyComponent() {
  return <div>
    My String
  </div>
}

function MyOtherComponent() {
  return <div>
    My Second String
  </div>
}


function App() {
  const [ShowComponent, setShowComponent] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        My Meditation Notes {ShowComponent.toString()}
      </header>
      {ShowComponent ? <MyComponent /> : <MyOtherComponent />}
      <Words />
      <button onClick={ () => setShowComponent(!ShowComponent)}>
        Button
      </button>
    </div>
  );
}

export default App;

