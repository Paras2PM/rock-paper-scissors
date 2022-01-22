import { useRef } from 'react'
import LiveGameStatus from '../LiveGameStatus'
import { CSSTransition } from 'react-transition-group'
import styles from './index.module.css'

const timeout = {
    appear: 500,
    enter: 300,
    exit: 5000,
}

const classNames = {
    enterActive: styles.live_board_item_enter_active,
    enter: styles.live_board_item_enter,
    exitActive: styles.live_board_item_exit_active,
    exit: styles.live_board_item_exit
}

function LiveBoardItem(props) {
    const ref = useRef()

    return <CSSTransition
        in={props.playerAPlayed === undefined}
        nodeRef={ref}
        unmountOnExit
        classNames={classNames}
        timeout={timeout}
    >
        <div ref={ref}>
            <LiveGameStatus {...props} />
        </div>
    </CSSTransition>
}

export default LiveBoardItem