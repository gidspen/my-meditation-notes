import React from 'react';

export default function Lines({text, ...props}) {

    return (
        <div>
            {text.map((line, i) => <div className='line' key={i}>{line}</div>)}
        </div>
    )
}