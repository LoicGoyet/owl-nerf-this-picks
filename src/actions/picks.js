export const PICKS_PREDICT_GAME = 'PICKS_PREDICT_GAME'
export const picksPredictGame = (gameId, chronicler, winner) => ({
    type: PICKS_PREDICT_GAME,
    gameId,
    chronicler,
    winner,
})