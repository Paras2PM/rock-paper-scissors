import LiveBoardItem from '../LiveBoardItem'
import useWebSocket from '../useWebSocket'
import styles from './index.module.css'

function LiveBoard() {
    const { isLoading, data } = useWebSocket()

    if (isLoading) return null

    return <div className={styles.transition_wrapper}>
        {data.map(game => <LiveBoardItem
            key={game.gameId}
            id={game.gameId}
            playerAName={game.playerA.name}
            playerBName={game.playerB.name}
            playerAPlayed={game.playerA.played}
            playerBPlayed={game.playerB.played}
        />)}
    </div >
}

export default LiveBoard

