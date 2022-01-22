import { useState, useEffect } from 'react'
import GameState, { emojiMap } from './GameState'

const keys = Object.keys(emojiMap)

function UnknownState() {
    const [index, setIndex] = useState(Math.floor(Math.random() * keys.length))
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(v => {
                if (v === keys.length - 1) {
                    return 0
                }
                return v + 1
            })
        }, 400)

        return () => { clearInterval(interval) }
    }, [])

    return <GameState played={keys[index]} />
}

export default UnknownState