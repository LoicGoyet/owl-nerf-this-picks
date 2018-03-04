import React from 'react'
import { connect } from 'react-redux'

import * as picksActions from '../ducks/picks'
import CompetitorLine from '../components/CompetitorLine'

const mapStateToProps = (state, ownProps) => {
    const index = ownProps.isHome ? 1 : 0

    return {
        ...ownProps,
        background: ownProps.isHome ? 'rgb(240, 240, 240)' : 'rgb(254, 255, 253)',
        ui: state.ui,
        score: ownProps.match.scores[index].value,
        winner: ownProps.match.winner && (ownProps.match.winner.name === ownProps.competitor.name),
        matchPicks: state.picks.find(matchPicks => matchPicks.gameId === ownProps.match.id),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    predict: (gameId, chronicler, winner, points) => dispatch(picksActions.predict(gameId, chronicler, winner, points)),
})

const MatchCompetitor = connect(
    mapStateToProps,
    mapDispatchToProps,
)((props) => (
    <CompetitorLine {...props}/>
))

export default MatchCompetitor