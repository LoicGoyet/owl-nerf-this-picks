import React from 'react'
import styled from 'styled-components';

const FinalBoxScore = ({scores}) => {
    const winner = Object.keys(scores).sort((a, b) => {
        if (scores[a] > scores[b]) {
            return -1
        } else {
            return 1
        }
    })[0]

    const equality = Object.keys(scores).every(chronicler => {
        const firstScore = scores[Object.keys(scores)[0]]
        return scores[chronicler] === firstScore
    });

    return (
        <Wrapper>
            {Object.keys(scores).map(chronicler => (
                <Column key={`final-box-score-${chronicler}`}>
                    <Score winning={winner === chronicler && !equality}>
                        {scores[chronicler]}
                    </Score>

                    <Chronicler winning={winner === chronicler && !equality} equality={equality}>
                        {chronicler}
                    </Chronicler>
                </Column>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: 3rem;
`

const Column = styled.div`
    padding: 0 1rem;
    text-align: center;
`

const Score = styled.h2`
    margin: 0;
    font-size: 3.5rem;
    line-height: 1;
    font-weight: ${props => props.winning ? 'bold' : 'normal'};
`

const Chronicler = styled.h3`
    margin: 0;
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: ${props => props.winning ? 'bold' : 'normal'};
    ${props => props.winning ? `
        color: rgb(255, 137, 0);
    ` : ''}
    ${props => props.equality ? `
        color: rgb(0, 160, 234);
    ` : ''}
`

export default FinalBoxScore