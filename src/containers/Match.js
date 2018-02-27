import React from 'react'
import { connect } from 'react-redux'

import * as picksActions from '../actions/picks'
import GameBox from '../components/GameBox'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
    prediction: (gameId, chronicler, winner) => dispatch(picksActions.prediction(gameId, chronicler, winner)),
})

const Match = connect(
    mapStateToProps,
    mapDispatchToProps,
)((props) => (
    <GameBox
        gameId={props.gameId}
        prediction={props.prediction}
    />
))

export default Match