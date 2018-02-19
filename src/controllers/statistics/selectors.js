const statisticsSelector = state => state.statistics || {};

export const lastWinnersSelector = state => statisticsSelector(state).lastWinners || {};
export const jackpotSelector = state => statisticsSelector(state).jackpot || {};
