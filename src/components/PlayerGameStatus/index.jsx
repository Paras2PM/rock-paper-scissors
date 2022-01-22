import GameState from '../GameState'
import UnknownState from '../UnknownState'
import winner from './winner.png'
import clsx from 'clsx'
import styles from './index.module.css'
import Profil from '../Profile'
import { GAMESTATUS } from '../../core/const'

function PlayerGameStatus({ gameStatus, playerName, played, position }) {
    let stateIcon = <GameState played={played} />
    if (gameStatus === 'Unknown') {
        stateIcon = <UnknownState />
    }
    const isLoser = gameStatus === GAMESTATUS.Lose
    const isWinner = gameStatus === GAMESTATUS.Win

    return (
        <div className={styles.wrapper}>
            {position === 'left' && stateIcon}
            <Profil playerName={playerName} nameClassName={styles.player_name} avatarClassName={clsx(styles.avatar, isLoser && styles.loser_avatar)} >
                {isWinner && <img src={winner} alt='avatar' className={styles.winner_badge} />}
                {/* {isLoser && <img src={loser} alt='avatar' className={styles.loser_badge} />} */}
            </Profil>
            {position === 'right' && stateIcon}
        </div>
    )
}

export default PlayerGameStatus