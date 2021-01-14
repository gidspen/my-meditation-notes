import React, { useState } from 'react';
import Lines from './lines';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const transcriptList = [];

export default function Words() {
    const supportedBrowsers = ['Chrome', 'Edge', 'Chrome Android', 'WebView Android', 'Samsumg Internet'];
    const [isActive, setIsActive] = useState(true);
    // const [transcriptList, setTranscriptList] = useState([]);
    const { transcript, resetTranscript, finalTranscript, listening, interimTranscript } = useSpeechRecognition();

    console.log('from the top', listening, isActive);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return (
            <div className={'sorry'}>
                <h5>
                Sorry! This browser does not currectly support speech recognition
                </h5>
                <p>
                Try one of the following:
                    <ul>
                        {supportedBrowsers.map(browser => <li>{browser}</li>)}
                    </ul>
                </p>
            </div>
        )
    }

    console.log('is listening: ', listening);

    async function start() {
        try {
            console.log('started startListening');
            await SpeechRecognition.startListening({ continuous: false })
            console.log('finished startListening');

            if (!listening && isActive) {
                console.log('inside the big if!');
                
                if (transcriptList[transcriptList.length - 1 ] !== finalTranscript ) {
                    console.log('setting transcript');
                    // setTranscriptList([...transcriptList, transcript]);

                    transcriptList.push(finalTranscript);
                    console.log('transcript set');
                }
                console.log('the current tList: ', transcriptList);
            };
        } catch (error) {
            console.log(error);
        }
    }

    async function stop() {
        try {
            console.log('stopping');
            await SpeechRecognition.stopListening()
            await setIsActive(false);
            console.log('stopped');
        } catch (error) {
            console.log(error);
        }
    }
    

    console.log('not listening and is active: ', (!listening && isActive));

    // appends the transcript once the we stop listening
    // then starts listening again
    

    start();

    return (
        <div>
          <button onClick={() => setIsActive(true)}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
            <ul>
              {transcriptList.map((transcriptItem, i) => <li key={i}>{transcriptItem}</li>)}
            </ul>
          <p>t {transcript}</p>
          {/* <p>ft {finalTranscript}</p>*/}
          <p>tlist {transcriptList}</p>
        </div>
      )
    
    // return (
    //     <div>Words
    //        {/* <Lines text={text}/> */}
    //     </div>
    // )
}

// show current transcript as the end

