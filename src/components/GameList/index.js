import React from "react";

import Game from "../Game";

import style from './style'

const GameList = ({gameList}) => (
    gameList.map((game, index) => <Game game={game} key={index}/>)
)

export default GameList