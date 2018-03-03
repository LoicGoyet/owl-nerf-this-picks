import React from "react";
import styled from 'styled-components';

import Match from '../../containers/Match'

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-column: 1;
    grid-gap: 20px;
    margin: 3rem 1rem 1rem;

    @media (min-width: 35rem) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
`

const MatchesList = ({matches}) => (
    <Wrapper>
        {matches.map(match => <Match match={match} key={match.id}/>)}
    </Wrapper>
)

export default MatchesList