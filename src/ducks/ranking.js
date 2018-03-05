import { takeLatest, put, call } from 'redux-saga/effects';

import Api from '../utils/api'

// Actions
const FETCH = 'nf-picks/ranking/FETCH'
const FETCH_SUCCESS = 'nf-picks/ranking/FETCH_SUCCESS'
const FETCH_FAILED = 'nf-picks/ranking/FETCH_FAILED'


// Reducer
const defaultState = {
    loading: false,
    data: []
}

export default function reducer (state = defaultState, action) {
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
function* fetchRanking(action) {
    try {
        const ranking = yield call(Api.fetchRanking);
        yield put({type: FETCH_SUCCESS, data: ranking})
    } catch (e) {
        yield put({type: FETCH_FAILED});
        return;
    }
}

export function* rankingSaga() {
    yield takeLatest(FETCH, fetchRanking)
}