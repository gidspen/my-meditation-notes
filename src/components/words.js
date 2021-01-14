import React, { useEffect, useState } from 'react';
import Lines from './lines';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export default function Words() {
  const [isActive, setIsActive] = useState(false);
  const [transcriptList, setTranscriptList] = useState([]);
  const { listening, transcript, finalTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (!listening && isActive) {
      if (
        transcriptList[transcriptList.length - 1] !== finalTranscript ||
        transcriptList[transcriptList.length - 1] !== ''
      ) {
        setTranscriptList([...transcriptList, transcript]);
      }
      start();
    }
  }, [listening, isActive]);

  function start() {
    SpeechRecognition.startListening({ continuous: false });
    setIsActive(true);
  }

  function stop() {
    console.log('stoping');
    SpeechRecognition.stopListening();
    setIsActive(false);
  }

  return (
    <div className='words'>
      <div className='recorder-controls'>
        <button onClick={() => setIsActive(true)}>Start</button>
        <button onClick={stop}>Stop</button>
        <div
          className='mic-on-indicator'
          style={{ backgroundColor: listening ? '#73A580' : '#DB5461' }}
        />
      </div>
      <div className='paper'>
        <div className='paper-header'>Today's Notes</div>
        <Lines text={transcriptList} />
        <div className='line'>{transcript}</div>
      </div>
    </div>
  );
}
