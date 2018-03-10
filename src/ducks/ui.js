// Actions
const TOGGLE_SCORE_VISIBILITY = 'nf-picks/ui/TOGGLE_SCORE_VISIBILITY';
const TOGGLE_TEAM_FOCUS = 'nf-picks/ui/TOGGLE_TEAM_FOCUS';

// Reducer
const defaultState = {
  hideScores: false,
  focusTeams: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_SCORE_VISIBILITY:
      return {
        ...state,
        hideScores: !state.hideScores,
      };

    case TOGGLE_TEAM_FOCUS:
      const removeTeam = state.focusTeams.find(teamId => teamId === action.teamId);

      if (removeTeam) {
        return {
          ...state,
          focusTeams: [],
        };
      } else {
        return {
          ...state,
          focusTeams: [action.teamId],
        };
      }

    default:
      return state;
  }
}

// Action Creators
export function toggleScoreVisibility() {
  return {
    type: TOGGLE_SCORE_VISIBILITY,
  };
}

export function toggleTeamFocus(teamId) {
  return {
    type: TOGGLE_TEAM_FOCUS,
    teamId,
  };
}
