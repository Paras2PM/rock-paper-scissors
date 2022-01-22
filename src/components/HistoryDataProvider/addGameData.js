import {
    GAMEPLAYED,
    GAMESTATUS
} from '../../core/const'
import getGameStatus from '../../core/getGameStatus'

class GameDetail {
    name = ''
    rock = 0
    paper = 0
    scissors = 0
    win = 0
    opponent = new Map()

    clone() {
        const result = new GameDetail()
        result.name = this.name
        result.rock = this.rock
        result.paper = this.paper
        result.scissors = this.scissors
        result.win = this.win
        result.opponent = new Map(this.opponent)

        return result
    }

    getWinRatio() {
        if (this.opponent.size === 0) {
            return 0
        }
        return Math.round((this.win / this.opponent.size) * 100)
    }

    getMostPlayedHand() {
        let mostPlayed = this.rock
        let nameMostPlayed = GAMEPLAYED.Rock.toLowerCase()
        if (mostPlayed <= this.paper) {
            mostPlayed = this.paper
            nameMostPlayed = GAMEPLAYED.Paper.toLowerCase()
        }
        if (mostPlayed <= this.scissors) {
            mostPlayed = this.scissors
            nameMostPlayed = GAMEPLAYED.Scissors.toLowerCase()
        }
        return nameMostPlayed
    }
}

export function addGameData(dataMap, gameId, playerA, playerB,) {
    let playerDetail
    if (dataMap.has(playerA.name)) {
        playerDetail = dataMap.get(playerA.name).clone()
    } else {
        playerDetail = new GameDetail()
    }

    //already addedd
    if (playerDetail.opponent.has(gameId)) {
        return
    }

    playerDetail.name = playerA.name
    dataMap.set(playerA.name, playerDetail)

    if (playerA.played === GAMEPLAYED.Rock) {
        playerDetail.rock += 1
    } else if (playerA.played === GAMEPLAYED.Paper) {
        playerDetail.paper += 1
    } else {
        playerDetail.scissors += 1
    }
    const {
        gameStatusA,
        gameStatusB
    } = getGameStatus(playerA.played, playerB.played)

    if (gameStatusA === GAMESTATUS.Win) {
        playerDetail.win += 1
    }

    playerDetail.opponent.set(gameId, {
        gameId: gameId,
        name: playerB.name,
        opponentPlayed: playerB.played,
        playerPlayed: playerA.played,
        status: {
            gameStatusA,
            gameStatusB
        }
    })
}