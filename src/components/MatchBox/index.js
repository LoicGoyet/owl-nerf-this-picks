import React from 'react';
import styled from 'styled-components';

import Competitor, {competitorHeight} from '../Competitor'
import moment from '../../utils/moment'

const Wrapper = styled.article`
  margin-bottom: 1rem;
`;

const LabelWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Label = styled.label`
    background-color: rgb(60, 60, 60);
    color: white;
    margin-right: ${competitorHeight}rem;
    width: ${competitorHeight * 2}rem;
    display: inline-block;
    text-align: center;
    font-size: 0.7em;
    padding: 0.2em;
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
    /* margin-right: ${competitorHeight * 3}rem; */
`

const MatchBox = ({ predict, match, matchPicks }) => {
    const { competitors, id, startDate, scores, winner, startDateTS } = match

    return (
        <Wrapper>
            <LabelWrapper>
                <Label>pronostics</Label>
            </LabelWrapper>

            {competitors.length > 0 && competitors.map((competitor, index) => (
                <Competitor
                    key={`${id}-${competitor.id}`}
                    competitor={competitor}
                    background={index ? 'rgb(240, 240, 240)' : 'rgb(254, 255, 253)'}
                    score={scores[index].value}
                    winner={winner && (winner.name === competitor.name)}
                    matchId={id}
                    predict={predict}
                    matchPicks={matchPicks}
                />
            ))}

            <InfoWrapper>
                <Info>{moment(startDateTS).format('LLLL')}</Info>
            </InfoWrapper>
        </Wrapper>
    )
}

export default MatchBox