import React, { useState } from 'react';
import Lines from './lines';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';



export default function Words() {

    // const [text, setText] = useState([]);
    const text = [];

    console.log('inside useEff', recognition);
        
    recognition.addEventListener('result', e => {
        console.log(e.results);
        const transcript = Array.from(e.results)
        .map(result => result[0].transcript)
        .join('');
        
        console.log(transcript);
        // setText([...text, transcript])
        text.push(transcript);
        }
    )
    
    console.log('this is the text', text);

    recognition.addEventListener('end', recognition.start);
    
    recognition.start();


    
    return (
        <div>Words
           <Lines text={text}/>
        </div>
    )
}