import React from 'react';
import {connect} from 'react-redux';

import * as uiActions from '../ducks/ui';
import MatchesList from '../components/MatchesList';

const mapStateToProps = (state, ownProps) => {
  const {focusTeams} = state.ui;

  let matches = ownProps.matches;

  if (focusTeams.length) {
    matches = ownProps.matches.filter(match => {
      const awayTeam = match.competitors[0];
      const homeTeam = match.competitors[1];
      if (homeTeam == null || awayTeam == null) return false;
      return focusTeams.includes(awayTeam.id) || focusTeams.includes(homeTeam.id);
    });
  }

  return {
    matches,
  };
};

export default connect(mapStateToProps)(MatchesList);
