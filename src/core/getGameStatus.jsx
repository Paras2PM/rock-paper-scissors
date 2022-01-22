import { GAMESTATUS, GAMEPLAYED } from './const'
const playedMap = { [GAMEPLAYED.Rock]: 0, [GAMEPLAYED.Paper]: -1, [GAMEPLAYED.Scissors]: 1 }

function getGameStatus(playerA, playerB) {
    if (!playerA || !playerB) {
        return { gameStatusA: GAMESTATUS.Unknown, gameStatusB: GAMESTATUS.Unknown }
    }
    if (playerA === playerB) {
        return { gameStatusA: GAMESTATUS.Draw, gameStatusB: GAMESTATUS.Draw }
    }
    const playerAStatus = playedMap[playerA]
    const playerBStatus = playedMap[playerB]
    let winner

    if (Math.abs(playerAStatus) === Math.abs(playerBStatus)) {
        winner = Math.max(playerAStatus, playerBStatus)
    }
    else {
        winner = Math.min(playerAStatus, playerBStatus)
    }

    if (winner === playerAStatus) {
        return { gameStatusA: GAMESTATUS.Win, gameStatusB: GAMESTATUS.Lose }
    }
    else {
        return { gameStatusA: GAMESTATUS.Lose, gameStatusB: GAMESTATUS.Win }
    }
}

export default getGameStatus