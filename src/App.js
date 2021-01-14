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
          <p>
            If you want ti kate your notes with you, just copy and paste the
            text into your journalling/note taking app of your choice :)
          </p>
          <p>
            If you have any feedback, feel free to let us know using any of the
            links below!
            <a href=''>Twitter</a>
            <a href='https://github.com/gidspen/my-meditation-notes/issues'>
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
