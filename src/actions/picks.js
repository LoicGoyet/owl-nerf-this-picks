export const PICKS_PREDICTION = 'PICKS_PREDICTION'
export const prediction = (gameId, chronicler, winner) => ({
    type: PICKS_PREDICTION,
    gameId,
    chronicler,
    winner,
})