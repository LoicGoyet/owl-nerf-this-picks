import React from "react";

import Match from '../../containers/Match'

import style from './style'

const GameList = ({gameList}) => (
    gameList.map((gameId, index) => <Match gameId={gameId} key={index}/>)
)

export default GameList