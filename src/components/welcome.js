import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      {/* <h3>Welcome to My Meditation App!</h3> */}
      <p>
      My Meditation Notes is a voice dictation app designed to capture the 
      distracting or creative thoughts that arise during meditation, allowing you to 
      seemlessly remain in a meditative state.
      </p>
      <p>
        To begin, simply press Start and begin your meditative practice. If a thought crosses
        your mind that you want to capture, speak the note you want to keep and it will be recorded
        on the notepad. To end, press Stop.
      </p>
      <p>
        None of the notes are saved so if you wish to keep them, be sure to 
        copy/paste them into a file you can save.
      </p>
      <p>
        If you found benefit from this, share the love by upvoting it wherever you found it or
        telling a friend.
        If you have any feedback or find this useful, shoot us an email at gidspen@gmail.com! 
        We'd love to hear from you.
      </p>
      {/* <a href='https://twitter.com/ToolsBetter'>Twitter</a>
      <a href='https://github.com/gidspen/my-meditation-notes/issues'>GitHub</a> */}
    </div>
  );
}