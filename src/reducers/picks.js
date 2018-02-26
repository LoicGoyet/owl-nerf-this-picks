import {
    PICKS_PREDICT_GAME
} from '../actions/picks'

const defaultState = [
    {
        gameId: 1,
        logo: "Fusion"
    },
]

const picks = (state = defaultState, action) => {
    switch (action.type) {
        case PICKS_PREDICT_GAME:
            // const otherPicks = state.filter(pick => pick.gameId !== action.gameId)
            // const pick = state.find(pick => pick.gameId === action.gameId)

            return [
                ...state,
            ]
        default:
            return state
    }
}

export default picks