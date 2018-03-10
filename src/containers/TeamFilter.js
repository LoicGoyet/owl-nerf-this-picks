import React from 'react';
import {connect} from 'react-redux';

import * as uiActions from '../ducks/ui';
import TeamList from '../components/TeamList';

const mapStateToProps = (state, ownProps) => {
  return {
    teams: state.teams.data.map(team => team.competitor),
    activeTeams: state.ui.focusTeams,
  };
};

const mapDispatchToProps = dispatch => ({
  onItemClick: id => dispatch(uiActions.toggleTeamFocus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
