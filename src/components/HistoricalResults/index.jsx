import GameState from '../GameState'
import styles from './index.module.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { GAMESTATUS } from '../../core/const'

function HistoricalResults({ playerPlayed,
    opponentName,
    opponentPlayed,
    opponentStatus,
    style }) {
    let gameStatusColor = '#EE9B00'
    if (opponentStatus === GAMESTATUS.Win) {
        gameStatusColor = '#0A9396'
    } else if (opponentStatus === GAMESTATUS.Lose) {
        gameStatusColor = '#AE2012'
    }

    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.player_wrapper}>
                <OverlayTrigger
                    key='bottom'
                    placement='bottom'
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                            {opponentStatus}
                        </Tooltip>
                    }
                >
                    <div className={styles.game_status_pointer} style={{ backgroundColor: gameStatusColor }}></div>
                </OverlayTrigger>
                <div className={styles.player_name}>{opponentName}</div>
            </div>
            <div className={styles.game_state_wrapper}>
                <GameState played={opponentPlayed}></GameState>
                <span>:</span>
                <GameState played={playerPlayed}></GameState>
            </div>
        </div>
    )

}

export default HistoricalResults