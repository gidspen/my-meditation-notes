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
      <header className="App-header">
        My Meditation Notes
      </header>
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

