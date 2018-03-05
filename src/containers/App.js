import React from 'react'
import { connect } from 'react-redux'

import * as scheduleActions from '../ducks/schedule'
import * as picksActions from '../ducks/picks'
import * as teamsActions from '../ducks/teams'
import * as rankingActions from '../ducks/ranking'
import * as uiActions from '../ducks/ui'
import Base from '../components/Base'
import MatchesList from '../components/MatchesList'

const mapStateToProps = (state, ownProps) => {
    const loadings = {
        schedule: state.schedule.loading,
        teams: state.teams.loading,
        ranking: state.ranking.loading,
    }
    return {
        stages: (state.schedule.data.stages || []).filter(stage => stage.enabled),
        hideScores: state.ui.hideScores,
        loadings: Object.keys(loadings).reduce((acc, state) => {
            if (loadings[state]) return [...acc, state]
            return acc
        }, []),
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPicks: () => dispatch(picksActions.fetch()),
    fetchSchedule: () => dispatch(scheduleActions.fetch()),
    fetchTeams: () => dispatch(teamsActions.fetch()),
    fetchRanking: () => dispatch(rankingActions.fetch()),
    toggleScoreVisibility: () => dispatch(uiActions.toggleScoreVisibility())
})

export default connect(mapStateToProps, mapDispatchToProps)(Base)