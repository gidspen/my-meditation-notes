import React from 'react';

export default function Welcome() {
  return (
    <div className='welcome'>
      <h3>Welcome to My Meditation App!</h3>
      <p>
        Here you can record your thoughts and emotions with out having to break
        your meditation. No more writting down that epiphiny you dont want to
        forget, but runing your flow!
      </p>
      <p>
        To get started, just press start! when you are finished you can just
        press stop or leave the page.
      </p>
      <p>
        If you want take your notes with you, just copy and paste the text into
        your journalling/note taking app of your choice :)
      </p>
      <p>
        If you have any feedback, feel free to let us know using any of the
        links below!
      </p>
      <a href='https://twitter.com/ToolsBetter'>Twitter</a>
      <a href='https://github.com/gidspen/my-meditation-notes/issues'>GitHub</a>
    </div>
  );
}