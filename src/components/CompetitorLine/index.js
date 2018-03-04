import React from 'react'
import styled from 'styled-components'
import { animations } from '../../utils/style'

export const competitorHeight = 3

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0.4rem;
    border-left-color: transparent;
    background-color: ${props => props.background || 'transparent'};
    color: rgb(51, 51, 51);
    overflow: hidden;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        background-color: ${props => `#${props.secondaryColor}` || ( props.background || 'white')};
        top: 0;
        bottom: 0;
        animation: ${animations.lineFiller1} 400ms forwards ease-in-out;
        z-index: 1;
        transform: translate3d(0, 0, 0);
    }

    &::after {
        content: '';
        position: absolute;
        background-color: ${props => `#${props.primaryColor}` || 'transparent'};
        top: 0;
        bottom: 0;
        animation: ${animations.lineFiller2} 400ms forwards ease-in-out;
        z-index: 1;
        transform: translate3d(0, 0, 0);
    }
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
    transform: ${props => props.ui.hideScores ? `translateX(${competitorHeight}rem)` : `translateX(0)`};
    transition: 300ms ease-in-out;
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
    transform: ${props => props.ui.hideScores ? `translateX(${competitorHeight}rem)` : `translateX(0)`};
    transition: 300ms ease-in-out;

    &:focus {
        outline-width: 0;
    }
`

const CompetitorLine = ({ competitor, background, score, winner, match, predict, matchPicks, ui }) => {
    const { icon, name, primaryColor, secondaryColor, id } = competitor

    return (
        <Wrapper primaryColor={primaryColor} secondaryColor={secondaryColor} background={background}>
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
                        key={`match-${match.id}--competitor-${id}--chronicler-${chronicler}`}
                        onClick={() => predict(match.id, chronicler, id, futurePoints)}
                        bgcolor={bgColor}
                        ui={ui}
                    >
                        {chronicler.charAt(0).toUpperCase()}
                    </Pick>
                )
            })}

            <Score ui={ui} winner={winner}>{score}</Score>
        </Wrapper>
    )
}

CompetitorLine.defaultProps = {
    matchPicks: {},
}

export default CompetitorLine