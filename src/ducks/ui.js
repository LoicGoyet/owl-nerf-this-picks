// Actions
const TOGGLE_SCORE_VISIBILITY = 'nf-picks/ui/TOGGLE_SCORE_VISIBILITY'


// Reducer
const defaultState = {
    hideScores: false
}

export default function reducer (state = defaultState, action) {
    switch (action.type) {
        case TOGGLE_SCORE_VISIBILITY:
            return {
                ...state,
                hideScores: !state.hideScores,
            }

        default:
            return state
    }
}


// Action Creators
export function toggleScoreVisibility() {
    return {
        type: TOGGLE_SCORE_VISIBILITY,
    }
}
