import React from 'react';

export default function Sorry() {
  const supportedBrowsers = [
    'Chrome',
    'Edge',
    'Chrome Android',
    'WebView Android',
    'Samsumg Internet',
  ];
  return (
    <div className={'sorry'}>
      <h3>
        Uh oh! It looks like the browser you are using current does not support
        speach recognition :(
      </h3>
      <p>
        <h5>
          Try one of the following browsers to change your meditation game!
        </h5>
        <div>
          {supportedBrowsers.map((browser) => (
            <div>{browser}</div>
          ))}
        </div>
      </p>
    </div>
  );
}
