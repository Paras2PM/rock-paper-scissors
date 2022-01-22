import HistoricalResultsList from '../HistoricalResultsList'
import Profil from '../Profile'
import Collapse from 'react-bootstrap/Collapse'
import styles from './index.module.css'
import { createPortal } from 'react-dom'
import backButton from './left-arrow.png'

function HistoricalResultsView({ show, onClose, playerName, opponent, parentRef }) {

    if (!parentRef.current) return null

    return createPortal(
        <Collapse timeout={300} className={styles.root} in={show} appear mountOnEnter={true} unmountOnExit={true}>
            <div className={styles.collapsed_wrapper}>
                <div className={styles.collapsed_profile_wrapper}>
                    <button onClick={onClose} className={styles.back_button_wrapper}>
                        <img src={backButton} alt='back icon' className={styles.back_button_image_wrapper} />
                    </button>
                    <Profil playerName={playerName} nameClassName={styles.player_name} avatarClassName={styles.avatar} />
                </div>
                <HistoricalResultsList games={opponent} parentRef={parentRef} />
            </div>
        </Collapse>
        , parentRef.current)
}

export default HistoricalResultsView