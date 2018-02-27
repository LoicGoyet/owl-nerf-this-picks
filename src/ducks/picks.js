// Actions
const PREDICT = 'nf-picks/picks/PREDICT'


// Reducer
const defaultState = [{
    gameId: 1,
    logo: "Fusion",
    althiron: "Uprising",
}]

export default function reducer (state = defaultState, action) {
    switch (action.type) {
        case PREDICT:
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


// Action Creators
export function predict(gameId, chronicler, winner) {
    return {
        type: PREDICT,
        gameId,
        chronicler,
        winner,
    }
}