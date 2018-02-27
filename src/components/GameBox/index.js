import React from "react";

import style from './style'

class GameBox extends React.Component {
    componentDidMount() {
        const { predict, gameId } = this.props
        return predict(gameId, 'logo', 'Dynasty')
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