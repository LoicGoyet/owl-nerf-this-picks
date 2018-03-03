import React from 'react'
import styled from 'styled-components';

export const competitorHeight = 3

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border-left: 0.4rem solid;
    border-left-color: ${props => `#${props.border}` || 'transparent'};
    background-color: ${props => props.background || 'transparent'};
    color: rgb(51, 51, 51);
`

const Logo = styled.img`
    width: ${competitorHeight}rem;
    height: 2.5rem;
    flex-shrink: 0;
    padding: 0 0.5rem;
`

const Name = styled.h3`
    font-size: 1.25rem;
    margin: 0.125em 0 0;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Score = styled.div`
    width: ${competitorHeight}rem;
    height: ${competitorHeight}rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    background-color: ${props => props.winner ? 'rgb(255, 137, 0)' : 'rgba(0, 0, 0, 0.25)'};
    color: white;
    flex-shrink: 0;
`

const Pick = styled.button`
    width: ${competitorHeight}rem;
    height: ${competitorHeight}rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border: 0;
    background-color: ${props => `${props.bgcolor}` || 'rgba(0, 0, 0, 0.05)'};
    flex-shrink: 0;
    padding: 0;
    font-size: 0.8em;
    cursor: pointer;

    &:focus {
        outline-width: 0;
    }
`

const Competitor = ({ competitor, background, score, winner, matchId, predict, matchPicks }) => {
    const { icon, name, primaryColor, id } = competitor


    return (
        <Wrapper border={primaryColor} background={background}>
            <Logo src={icon} alt={name}/>
            <Name>{name}</Name>
            {['althi', 'logo'].map(chronicler => {
                const pick = matchPicks[chronicler] || {}
                const picked = pick.winner === id;

                let points = pick.points || 0;
                let futurePoints = 1
                if (points == 2 && picked) {
                    futurePoints = 0
                } else if (points == 1 && picked) {
                    futurePoints = 2
                }

                let bgColor = 'rgba(0, 0, 0, 0.05)'
                if (picked && points == 1) {
                    bgColor = 'rgba(0, 160, 234, 0.9)'
                } else if (picked && points == 2) {
                    bgColor = 'rgba(255, 137, 0, 0.9)'
                }

                return (
                    <Pick
                        key={`match-${matchId}--competitor-${id}--chronicler-${chronicler}`}
                        onClick={() => predict(matchId, chronicler, id, futurePoints)}
                        bgcolor={bgColor}
                    >
                        {chronicler.charAt(0).toUpperCase()}
                    </Pick>
                )
            })}
            <Score winner={winner}>{score}</Score>
        </Wrapper>
    )
}

Competitor.defaultProps = {
    matchPicks: {},
}

export default Competitor