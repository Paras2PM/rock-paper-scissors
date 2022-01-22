import {
    atom,
    selector,
    selectorFamily,
} from 'recoil'
import {
    addGameData
} from "./addGameData"

export const historyState = atom({
    key: 'historyState',
    default: new Map()
})

export const updateHistoryAction = selector({
    key: 'updateHistoryAction',
    get: ({
        get
    }) => {
        throw new Error()
    },
    set: ({
        set,
        get
    }, games) => {
        const dataMap = get(historyState)

        const newValue = new Map(dataMap)
        for (let game of games) {
            if (game.playerA.name === game.playerB.name) {
                continue
            }

            addGameData(newValue, game.gameId, game.playerA, game.playerB)
            addGameData(newValue, game.gameId, game.playerB, game.playerA)
        }
        set(historyState, newValue)
    }
})

let memorizePlayersName = []

function memorizePlayers(newValue) {
    if (newValue.length !== memorizePlayersName.length) {
        memorizePlayersName = newValue
        return newValue
    }

    return newValue
}

export const historyPlayersState = selector({
    key: 'historyPlayersState',
    get: ({
        get
    }) => {
        const map = get(historyState)
        return memorizePlayers([...map.keys()])
    },
})


export const historyItemState = selectorFamily({
    key: 'historyItemState',
    get: (name) => ({
        get
    }) => {
        return get(historyState).get(name)
    },
})