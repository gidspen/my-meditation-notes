import React from 'react';

const supportedBrowsers = ['Chrome Desktop', 'Chrome Android', 'Edge', 'WebView Android', 'Samsumg Internet'];

export default function Sorry() {
    return (
        <div className={'sorry'}>
            <h5>
            Sorry! This browser does not currectly support speech recognition
            </h5>
            <h5>
            Try one of the following:
            </h5>
            <div>
                {supportedBrowsers.map(browser => <div>{browser}</div>)}
            </div>
        </div>
    )
}