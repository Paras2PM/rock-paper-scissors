import HistoricalResults from './HistoricalResults'
import { FixedSizeList as List, areEqual } from 'react-window'
import { memo } from 'react'

function HistoricalResultsList({ games, parentRef }) {
    return (
        <List
            width='100%'
            height={parentRef.current?.clientHeight ?? 0}
            itemSize={37}
            itemCount={games.length}
            itemData={{ games }}
        >
            {Row}
        </List>)
}

const Row = memo(({ index, data: { games }, style }) => {
    const game = games[index]

    return <HistoricalResults
        key={game.gameId}
        style={style}
        playerPlayed={game.playerPlayed}
        opponentName={game.name}
        opponentPlayed={game.opponentPlayed}
        opponentStatus={game.status.gameStatusB}
    />
}, areEqual)

export default HistoricalResultsList