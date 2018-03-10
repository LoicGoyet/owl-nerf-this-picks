import React from 'react';
import {connect} from 'react-redux';

import * as uiActions from '../ducks/ui';
import MatchesList from '../components/MatchesList';

const mapStateToProps = (state, ownProps) => {
  const {focusTeams} = state.ui;

  let matches = ownProps.matches;

  if (focusTeams.length) {
    matches = ownProps.matches.filter(match => {
      const awayTeam = match.competitors[0].id;
      const homeTeam = match.competitors[1].id;
      return focusTeams.includes(awayTeam) || focusTeams.includes(homeTeam);
    });
  }

  return {
    matches,
  };
};

export default connect(mapStateToProps)(MatchesList);
