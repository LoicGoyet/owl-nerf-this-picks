import React from "react";

import Match from '../../containers/Match'

import style from './style'

const GameList = ({matches}) => (
    matches.map(match => <Match match={match} key={match.id}/>)
)

export default GameList