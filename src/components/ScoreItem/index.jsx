import styles from './index.module.css'
import Profil from '../Profile'
import trophy from './trophy.png'
import console from './console.png'
import rockPaperScissors from './rock-paper-scissors.png'
import Metric from '../Metric'
import Button from 'react-bootstrap/Button'
import { useState, memo } from 'react'
import HistoricalResultsView from '../HistoricalResultsView'
import { useRecoilValue, } from 'recoil'
import { historyItemState } from '../HistoryDataProvider/state'

function ScoreItem({ playerName, parentRef }) {
    const item = useRecoilValue(historyItemState(playerName))
    const [openDetail, setOpenDetail] = useState(false)

    const clickHandler = () => {
        setOpenDetail(!openDetail)
    }
    return (
        <div className={styles.item_wrapper}>
            <Profil playerName={playerName} nameClassName={styles.player_name} avatarClassName={styles.avatar} />
            <div className={styles.detail_wrapper}>
                <div className={styles.data_wrapper}>
                    <Metric metricImage={trophy} metricName='WIN RATIO' metricValue={item.getWinRatio() + '%'} />
                    <Metric metricImage={console} metricName='TOTAL MATCHES' metricValue={item.opponent.size} />
                    <Metric metricImage={rockPaperScissors} metricName='MOST PLAYED' metricValue={item.getMostPlayedHand()} />
                </div>
                <Button as='a' type='button' onClick={clickHandler} variant='secondary' siz='sm' className={styles.detail_button}>Details</Button>
                <HistoricalResultsView show={openDetail} onClose={clickHandler} playerName={playerName} opponent={[...item.opponent.values()]} parentRef={parentRef} />
            </div>
        </div>
    )
}

export default memo(ScoreItem)