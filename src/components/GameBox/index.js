import React from "react";

import style from './style'

class GameBox extends React.Component {
    // componentDidMount() {
    //     const { predict, gameId } = this.props
    //     return predict(gameId, 'logo', 'Dynasty')
    // }

    render() {
        const { predict, gameId } = this.props

        return (
            <style.Wrapper>
                <button onClick={() => predict(gameId, 'logo', 'Fusion')}>Fusion</button>
                <button onClick={() => predict(gameId, 'logo', 'Dynasty')}>Dynasty</button>
            </style.Wrapper>
        )
    }
}

export default GameBox