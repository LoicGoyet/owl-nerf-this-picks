import React from 'react'
import { connect } from 'react-redux'

import * as scheduleActions from '../ducks/schedule'
import * as picksActions from '../ducks/picks'
import * as teamsActions from '../ducks/teams'
import Base from '../components/Base'
import MatchesList from '../components/MatchesList'

const mapStateToProps = (state, ownProps) => ({
    stages: (state.schedule.data.stages || []).filter(stage => stage.enabled),
    loadings: {
        schedule: state.schedule.loading,
        teams: state.teams.loading,
    },
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPicks: () => dispatch(picksActions.fetch()),
    fetchSchedule: () => dispatch(scheduleActions.fetch()),
    fetchTeams: () => dispatch(teamsActions.fetch()),
})

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Base)

export default App