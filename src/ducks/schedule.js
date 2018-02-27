import { takeLatest, put, call } from 'redux-saga/effects';

import Api from '../utils/api'

// Actions
const FETCH = 'nf-picks/schedule/FETCH'
const FETCH_SUCCESS = 'nf-picks/schedule/FETCH_SUCCESS'
const FETCH_FAILED = 'nf-picks/schedule/FETCH_FAILED'


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
function* fetchSchedule(action) {
    try {
        const schedule = yield call(Api.fetchSchedule);
        yield put({type: FETCH_SUCCESS, data: schedule})
    } catch (e) {
        yield put({type: FETCH_FAILED});
        return;
    }
}

export function* scheduleSaga() {
    yield takeLatest(FETCH, fetchSchedule)
}