import React from "react";

import style from './style'

const GameBox = ({ predict, gameId }) => (
    <style.Wrapper>
        <button onClick={() => predict(gameId, 'logo', 'Fusion')}>
            Fusion
        </button>

        <button onClick={() => predict(gameId, 'logo', 'Dynasty')}>Dynasty</button>
    </style.Wrapper>
)

export default GameBox