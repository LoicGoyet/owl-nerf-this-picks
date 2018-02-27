import React from 'react'
import { connect } from 'react-redux'

import * as picksActions from '../ducks/picks'
import GameBox from '../components/GameBox'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
    predict: (gameId, chronicler, winner) => dispatch(picksActions.predict(gameId, chronicler, winner)),
})

const Match = connect(
    mapStateToProps,
    mapDispatchToProps,
)((props) => (
    <GameBox
        gameId={props.gameId}
        predict={props.predict}
    />
))

export default Match