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
            const picks = state.picks.find(pick => pick.gameId === match.id) || {logo: {}, althi: {}}
            const winner = match.winner ? match.winner.id : 0

            const logoPick = picks.logo || {}
            const althiPick = picks.althi || {}

            return {
                logo: scores.logo + ((logoPick.points || 0) * (winner === logoPick.winner || 0)),
                althi: scores.althi + ((althiPick.points || 0) * (winner === althiPick.winner || 0)),
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