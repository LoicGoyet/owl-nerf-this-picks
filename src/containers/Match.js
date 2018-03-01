import React from 'react'
import { connect } from 'react-redux'

import * as picksActions from '../ducks/picks'
import MatchBox from '../components/MatchBox'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
    predict: (gameId, chronicler, winner) => dispatch(picksActions.predict(gameId, chronicler, winner)),
})

const Match = connect(
    mapStateToProps,
    mapDispatchToProps,
)((props) => (
    <MatchBox
        match={props.match}
        predict={props.predict}
    />
))

export default Match