import React from 'react'

const FinalBoxScore = ({scores}) => {

    return (
        <div>
            {Object.keys(scores).map(chronicler => (
                <div key={`score-${chronicler}`}>
                    {chronicler}: {scores[chronicler]}
                </div>
            ))}
        </div>
    )
}

export default FinalBoxScore