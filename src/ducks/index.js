import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import picks, { picksSaga } from './picks'
import schedule, { scheduleSaga } from './schedule'
import teams, { teamsSaga } from './teams'
import ui from './ui'

export default combineReducers({
  picks,
  schedule,
  teams,
  ui,
})

export function* rootSaga() {
  yield all([
    scheduleSaga(),
    picksSaga(),
    teamsSaga(),
  ])
}