import React from "react";

import style from './style'

class GameBox extends React.Component {
    componentDidMount() {
        const { prediction, gameId } = this.props
        return prediction(gameId, 'logo', 'Dynasty')
    }

    render() {
        const { gameId } = this.props

        return (
            <style.Wrapper>
                {gameId}
            </style.Wrapper>
        )
    }
}

export default GameBox