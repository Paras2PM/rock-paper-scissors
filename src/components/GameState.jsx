import { Twemoji } from 'react-emoji-render'
import { GAMEPLAYED } from '../core/const'

export const emojiMap = {
    [GAMEPLAYED.Rock]: <Twemoji text='🪨' svg />,
    [GAMEPLAYED.Paper]: <Twemoji text='📃' svg />,
    [GAMEPLAYED.Scissors]: <Twemoji text='✂️' svg />
}

function GameState({ played }) {

    return <div style={{ fontSize: '22px', width: '26px' }} >{emojiMap[played]}</div>
}

export default GameState