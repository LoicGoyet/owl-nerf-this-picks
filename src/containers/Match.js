import React from 'react'
import { connect } from 'react-redux'

import * as picksActions from '../ducks/picks'
import MatchBox from '../components/MatchBox'

const mapStateToProps = (state, ownProps) => ({
    matchPicks: state.picks.find(matchPicks => matchPicks.gameId === ownProps.match.id)
})

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
        matchPicks={props.matchPicks}
    />
))

export default Match