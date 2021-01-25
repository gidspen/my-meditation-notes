import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      {/* <h3>Welcome to My Meditation App!</h3> */}
      <p>
      My Meditation Notes is a voice dictation app designed to capture the 
      creative thoughts that arise during meditation, allowing you to 
      seemlessly remain in a meditative state while engaging your muse.
      </p>
      <p>
        To begin, simply press Start. To end, press Stop. When the light to 
        the right of the Stop button is Red, it's recording. When Green, it's not. 
        To clear the notepad, you can refresh the page.
      </p>
      <p>
        None of the notes are saved so if you wish to keep them, be sure to 
        copy/paste them into a file you can save.
      </p>
      <p>
        If you have any feedback or find this useful, shoot us an email at gidspen@gmail.com or tweet us below! 
        We'd love to hear from you.
      </p>
      <a href='https://twitter.com/ToolsBetter'>Twitter</a>
      <a href='https://github.com/gidspen/my-meditation-notes/issues'>GitHub</a>
    </div>
  );
}