import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import picks, { picksSaga } from './picks'
import schedule, { scheduleSaga } from './schedule'
import ranking, { rankingSaga } from './ranking'
import teams, { teamsSaga } from './teams'
import ui from './ui'

export default combineReducers({
  picks,
  schedule,
  ranking,
  teams,
  ui,
})

export function* rootSaga() {
  yield all([
    scheduleSaga(),
    rankingSaga(),
    picksSaga(),
    teamsSaga(),
  ])
}