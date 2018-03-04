import React from 'react'
import styled from 'styled-components';

const StatBarContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 1rem auto;
`

const StatBarBar = styled.div`
    position: relative;
    flex: 0 0 50%;
    height: 60px;
`

const StatBarFill = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    min-width: 125px;
    z-index: 1;
    width: ${props => `${props.size}%`};
    transition: width ease-in-out 1s;

    ${props => props.orientation === 'left' && `
        background-color: rgb(255, 137, 0);
        right: 0;
    `}

    ${props => props.orientation === 'right' && `
        background-color: rgb(0, 160, 234);
        left: 0;
    `}
`

const StatBarStat = styled.div`
    color: rgb(255, 255, 255);
    display: flex;
    padding-top: .075em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    text-transform: uppercase;
    align-items: center;

    ${props => props.orientation === 'left' && `
        right: 20px;
    `}

    ${props => props.orientation === 'right' && `
        flex-direction: row-reverse;
        background-color: rgb(0, 160, 234);
        left: 20px;
    `}
`

const StatBarChronicler = styled.span`
    display: inline-block;
    margin: 0 0.75rem;
`

const StatBarScore = styled.span`
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
`

const FinalBoxScore = ({scores}) => {
    const totalPoints = Object.keys(scores).reduce((total, chronicler) => {
        return total + scores[chronicler]
    }, 0)

    return (
        <StatBarContainer>
            {Object.keys(scores).map((chronicler, index) => (
                <StatBarBar key={`score-${chronicler}`}>
                    <StatBarFill
                        orientation={index ? 'right': 'left'}
                        size={(scores[chronicler] * 100 / totalPoints) || 0}
                    />

                    <StatBarStat orientation={index ? 'right': 'left'}>
                        <StatBarChronicler>
                            {chronicler}
                        </StatBarChronicler>

                        <StatBarScore>
                            {scores[chronicler]}
                        </StatBarScore>
                    </StatBarStat>
                </StatBarBar>
            ))}
        </StatBarContainer>
    )
}

export default FinalBoxScore