import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import picks from './picks'
import schedule, {scheduleSaga} from './schedule'

export default combineReducers({
    picks,
    schedule,
})

export function* rootSaga() {
  yield all([
    scheduleSaga(),
  ])
}