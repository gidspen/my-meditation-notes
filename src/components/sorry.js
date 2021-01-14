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
      <h5>Sorry! This browser does not currectly support speech recognition</h5>
      <p>
        Try one of the following:
        <ul>
          {supportedBrowsers.map((browser) => (
            <li>{browser}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}
