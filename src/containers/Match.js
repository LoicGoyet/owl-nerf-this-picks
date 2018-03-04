import React from 'react'
import { connect } from 'react-redux'

import * as picksActions from '../ducks/picks'
import MatchBox from '../components/MatchBox'

const mapStateToProps = (state, ownProps) => ({
    ui: state.ui
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(props => <MatchBox {...props}/>)
