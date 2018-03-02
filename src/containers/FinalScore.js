import React from 'react'
import { connect } from 'react-redux'

import * as picksActions from '../ducks/picks'
import FinalBoxScore from '../components/FinalBoxScore'

const mapStateToProps = (state, ownProps) => {
    const stages = state.schedule.data.stages || []

    const matches = stages.reduce((matches, stage) => {
        return [
            ...matches,
            ...stage.matches,
        ]
    }, [])

    return {
        scores: matches.reduce((scores, match) => {
            const picks = state.picks.find(pick => pick.gameId === match.id) || {}
            const winner = match.winner ? match.winner.id : 0

            return {
                logo: scores.logo + (1 * (winner === picks.logo)),
                althi: scores.althi+ (1 * (winner === picks.althi)),
            }
        }, {logo: 0, althi: 0})
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const FinalScore = connect(
    mapStateToProps,
    mapDispatchToProps,
)((props) => (
    <FinalBoxScore {...props}/>
))

export default FinalScore