import './App.css';
import Words from './components/words'
import React from 'react';
import Sorry from './components/sorry';
import Welcome from './components/welcome';
import SpeechRecognition from 'react-speech-recognition';

function App() {
  
  const supported = SpeechRecognition.browserSupportsSpeechRecognition();

  return (
    <div className="App">
      <button onClick={()=> {throw new Error("oh no!")} }>BreakIt!</button>
      <header className="App-header">
        My Meditation Notes
      </header>
      <div className='name'>
        A Better Life Product
      </div>
      <div className='tagline'>
        <strong>
        My Meditation Notes
        </strong>
      </div>
      <div className='content'>
        <div className='recorder'>
          {supported ? <Words /> : <Sorry />}
        </div>
        <Welcome />
      </div>
    </div>
  );
}

export default App;

