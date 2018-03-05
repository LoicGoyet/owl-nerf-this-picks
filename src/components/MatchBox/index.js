import React from 'react';
import styled from 'styled-components'

import { animations } from '../../utils/style'
import MatchCompetitor from '../../containers/MatchCompetitor'
import {competitorHeight} from '../CompetitorLine'
import moment from '../../utils/moment'

const LabelWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Label = styled.label`
    position: relative;
    background-color: rgb(60, 60, 60);
    color: white;
    width: ${competitorHeight * 2}rem;
    display: inline-block;
    text-align: center;
    font-size: 0.7em;
    padding: 0.2em;
    transition: 300ms ease-in-out;
    transform: ${props => props.ui.hideScores ? `translateX(0)` : `translateX(-${competitorHeight}rem)`};
    ${props => !props.slide ? `
        transform: none;
    ` : `
    `}

    &::before {
        content: '';
        position: absolute;
        background-color: rgb(20,10,67);
        top: 0;
        bottom: 0;
        animation: ${animations.lineFiller1} 400ms forwards ease-in-out;
        z-index: 1;
        transform: translate3d(0, 0, 0);
    }

    &::after {
        content: '';
        position: absolute;
        background-color: rgb(20,10,67);
        top: 0;
        bottom: 0;
        animation: ${animations.lineFiller2} 400ms forwards ease-in-out;
        z-index: 1;
        transform: translate3d(0, 0, 0);
    }
`
const InfoWrapper = styled.div`
    display: flex;
    padding-left: ${0.4 + competitorHeight}rem;
`

const Info = styled.div`
    background-color: rgb(60, 60, 60);
    color: white;
    font-size: 0.7em;
    padding: 0.2em 0.6em;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        background-color: rgb(20,10,67);
        top: 0;
        bottom: 0;
        animation: ${animations.lineFiller1} 800ms forwards ease-in-out;
        z-index: 1;
        transform: translate3d(0, 0, 0);
    }

    &::after {
        content: '';
        position: absolute;
        background-color: rgb(20,10,67);
        top: 0;
        bottom: 0;
        animation: ${animations.lineFiller2} 400ms forwards ease-in-out;
        z-index: 1;
        transform: translate3d(0, 0, 0);
    }
`

const MatchBox = ({match, ui}) => {
    const { competitors, id, startDate, scores, winner, startDateTS, state } = match
    if (competitors[0] == null || competitors[1] == null) return null
    const pending = state === 'PENDING'

    return (
        <article>
            <LabelWrapper>
                <Label ui={ui} slide={!pending}>pronostics</Label>
            </LabelWrapper>

            {competitors.length > 0 && competitors.map((competitor, index) => (
                <MatchCompetitor
                    key={`${id}-${competitor.id}`}
                    match={match}
                    competitor={competitor}
                    isHome={index ? true : false}
                    pending={pending}
                />
            ))}

            <InfoWrapper>
                <Info>{moment(startDateTS).format('LLLL')}</Info>
            </InfoWrapper>
        </article>
    )
}

export default MatchBox