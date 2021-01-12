import React from 'react';

export default function Lines({text, ...props}) {

    console.log('lines', text);

    return (
        <div>
            {text.map(line => <div>{line}</div>)}
        </div>
    )
}