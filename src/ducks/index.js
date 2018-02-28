import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import picks, { picksSaga } from './picks'
import schedule, { scheduleSaga } from './schedule'
import teams, { teamsSaga } from './teams'

export default combineReducers({
  picks,
  schedule,
  teams,
})

export function* rootSaga() {
  yield all([
    scheduleSaga(),
    picksSaga(),
    teamsSaga(),
  ])
}