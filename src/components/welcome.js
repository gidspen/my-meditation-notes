import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      {/* <h3>Welcome to My Meditation App!</h3> */}
      <p>
      My Meditation Notes is a voice dictation app designed to capture the 
      distracting and/or creative thoughts that arise during meditation, allowing you to 
      seemlessly remain in a meditative state.
      </p>
      <p>
        To begin, simply press Start and begin your meditation practice. If a thought crosses
        your mind that you want to capture, speak the note you want to keep and it will be recorded
        on the notepad. To end, press Stop.
      </p>
      <p>
        None of the notes are saved so if you wish to keep them, be sure to 
        copy/paste them somewhere they can be saved.
      </p>
      <p>
        Note: Be sure the sleep settings on your computer don't cause it to sleep during your 
        your meditation.
      </p>
      <p>
        If you found benefit from this, share the love by upvoting it on
        <a href='https://www.reddit.com/r/Meditation/comments/n2i7mg/how_i_overcame_distracting_thoughts_while/'>the meditation subreddit you found it on</a>or
        by telling a friend.
      </p>
      <p>
        If you have any feedback, shoot me an email at guishink1@gmail.com!
        We'd love to hear from you.
      </p>

      {/* <a href='https://twitter.com/ToolsBetter'>Twitter</a>
      <a href='https://github.com/gidspen/my-meditation-notes/issues'>GitHub</a> */}
    </div>
  );
}