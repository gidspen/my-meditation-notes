import './App.css';
import Words from './components/words';
import Sorry from './components/sorry';
import SpeechRecognition from 'react-speech-recognition';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>My Meditation Notes</header>
      <div className='content'>
        <div className='recorder'>
          {SpeechRecognition.browserSupportsSpeechRecognition() ? (
            <Words />
          ) : (
            <Sorry />
          )}
        </div>
        <div className='welcome'>
          <h3>Welcome to My Meditation App!</h3>
          <p>
            Here you can record your thoughts and emotions with out having to
            break your meditation. No more writting down that epiphiny you dont
            want to forget, but runing your flow!
          </p>
          <p>
            To get started, just press start! when you are finished you can just
            press stop or leave the page!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
