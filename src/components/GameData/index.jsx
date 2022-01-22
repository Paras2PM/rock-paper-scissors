import { useRef } from 'react'
import { historyPlayersState } from '../HistoryDataProvider/state'
import useHistoryAPI from '../HistoryDataProvider/useHistoryAPI'
import ScoreItem from '../ScoreItem'
import { useRecoilValue, } from 'recoil'
import styles from './index.module.css'

function GameData() {
    useHistoryAPI()
    const players = useRecoilValue(historyPlayersState)
    const parentRef = useRef()

    return (
        <div className={styles.wrapper} ref={parentRef}>
            <div className={styles.game_data_wrapper}>
                {players.map((name) => (
                    <ScoreItem
                        key={name}
                        playerName={name}
                        parentRef={parentRef}
                    />
                ))}
            </div>
        </div>
    )
}


export default GameData