import {
    PICKS_PREDICTION
} from '../actions/picks'

const defaultState = [
    {
        gameId: 1,
        logo: "Fusion",
        althiron: "Uprising",
    },
]

const picks = (state = defaultState, action) => {
    switch (action.type) {
        case PICKS_PREDICTION:
            const otherPicks = state.filter(pick => pick.gameId !== action.gameId)
            const pick = {
                gameId: action.gameId,
                ...state.find(pick => pick.gameId === action.gameId),
                [action.chronicler]: action.winner,
            }

            return [
                ...otherPicks,
                pick
            ]
        default:
            return state
    }
}

export default picks