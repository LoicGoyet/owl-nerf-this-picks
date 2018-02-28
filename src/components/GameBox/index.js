import React from "react";

import style from './style'

const GameBox = ({ predict, match }) => {
    const awayTeam = match.competitors[0]
    const homeTeam = match.competitors[1]

    return (
        <style.Wrapper>
            gamebox
            {/* <button onClick={() => predict(match, 'logo', 'Fusion')}>
                Fusion
            </button>

            <button onClick={() => predict(gameId, 'logo', 'Dynasty')}>Dynasty</button> */}
        </style.Wrapper>
    )
}

export default GameBox