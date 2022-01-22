import PlayerGameStatus from '../PlayerGameStatus'
import styles from './index.module.css'
import getGameStatus from '../../core/getGameStatus'

function LiveGameStatus({ playerAPlayed, playerBPlayed, playerAName, playerBName }) {
    const { gameStatusA, gameStatusB } = getGameStatus(playerAPlayed, playerBPlayed)
    return <div className={styles.wrapper}>
        <PlayerGameStatus playerName={playerAName} played={playerAPlayed} gameStatus={gameStatusA} position='right' />
        <div className={styles.spliter}>:</div>
        <PlayerGameStatus playerName={playerBName} played={playerBPlayed} gameStatus={gameStatusB} position='left' />
    </div>
}

export default LiveGameStatus
