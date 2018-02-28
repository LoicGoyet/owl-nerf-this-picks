import { takeLatest, select, put } from 'redux-saga/effects';

import database from '../utils/database'

// Actions
const FETCH = 'nf-picks/picks/FETCH'
const FETCH_SUCCESS = 'nf-picks/picks/FETCH_SUCCESS'
const PREDICT = 'nf-picks/picks/PREDICT'


// Reducer
export default function reducer (state = [], action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.data

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
export function fetch() {
    return {
        type: FETCH,
    }
}

export function predict(gameId, chronicler, winner) {
    return {
        type: PREDICT,
        gameId,
        chronicler,
        winner,
    }
}


// Sagas
function* fetchPicks() {
    const data = yield database.ref('/picks').once('value')
        .then(snapshot => snapshot.val())

    yield put({type: FETCH_SUCCESS, data})
}

function* savePicks(action) {
    const picks = yield select(state => state.picks)
    yield database.ref('/picks').set(picks)
}

export function* picksSaga() {
    yield takeLatest(FETCH, fetchPicks)
    yield takeLatest(PREDICT, savePicks)
}