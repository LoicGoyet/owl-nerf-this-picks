import React from 'react';
import styled from 'styled-components';

import MatchCompetitor from '../../containers/MatchCompetitor'
import {competitorHeight} from '../CompetitorLine'
import moment from '../../utils/moment'

const LabelWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Label = styled.label`
    background-color: rgb(60, 60, 60);
    color: white;
    transform: ${props => props.ui.hideScores ? `translateX(0)` : `translateX(-${competitorHeight}rem)`};
    width: ${competitorHeight * 2}rem;
    display: inline-block;
    text-align: center;
    font-size: 0.7em;
    padding: 0.2em;
    transition: 300ms ease-in-out;
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
`

const MatchBox = ({match, ui}) => {
    const { competitors, id, startDate, scores, winner, startDateTS } = match
    if (competitors[0] == null || competitors[1] == null) return null

    return (
        <article>
            <LabelWrapper>
                <Label ui={ui}>pronostics</Label>
            </LabelWrapper>

            {competitors.length > 0 && competitors.map((competitor, index) => (
                <MatchCompetitor
                    key={`${id}-${competitor.id}`}
                    match={match}
                    competitor={competitor}
                    isHome={index ? true : false}
                />
            ))}

            <InfoWrapper>
                <Info>{moment(startDateTS).format('LLLL')}</Info>
            </InfoWrapper>
        </article>
    )
}

export default MatchBox