import { takeLatest, put, call } from 'redux-saga/effects';

import Api from '../utils/api'

// Actions
const FETCH = 'nf-picks/teams/FETCH'
const FETCH_SUCCESS = 'nf-picks/teams/FETCH_SUCCESS'
const FETCH_FAILED = 'nf-picks/teams/FETCH_FAILED'

// Reducer
export default function reducer (state = {}, action) {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                loading: true,
            }

        case FETCH_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
            }

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

// Sagas
function* fetchTeams(action) {
    try {
        const teams = yield call(Api.fetchTeams);
        yield put({type: FETCH_SUCCESS, data: teams.competitors})
    } catch (e) {
        yield put({type: FETCH_FAILED});
        return;
    }
}

export function* teamsSaga() {
    yield takeLatest(FETCH, fetchTeams)
}