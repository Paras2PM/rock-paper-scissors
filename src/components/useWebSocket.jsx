import { useRef, useState, useEffect } from 'react'
import { updateHistoryAction } from './HistoryDataProvider/state'
import { useSetRecoilState } from 'recoil'

const useWebSocket = () => {
    const updateHistory = useSetRecoilState(updateHistoryAction)
    const [data, setData] = useState([])

    const removeItem = (gameId) => {
        setData((oldData) => {
            return oldData.filter(x => x.gameId !== gameId)
        })
    }

    const websocket = useRef()

    useEffect(() => {
        websocket.current = new WebSocket('ws://bad-api-assignment.reaktor.com/rps/live')
        websocket.current.onmessage = (event) => {
            const message = JSON.parse(JSON.parse(event.data))

            switch (message.type) {
                case 'GAME_BEGIN':
                    setData((oldData) => {
                        return [message, ...oldData]
                    })
                    break
                case 'GAME_RESULT':
                    updateHistory([message])
                    setData((oldData) => {
                        const index = oldData.findIndex(x => x.gameId === message.gameId)

                        if (index > -1) {
                            setTimeout(() => removeItem(message.gameId), 6000)

                            const newData = [...oldData]
                            newData[index] = message

                            return newData
                        }
                        return oldData
                    })
                    break
                default: break
            }
        }

        websocket.current.onopen = () => {
            console.log('connected')
        }

        return () => {
            websocket.current?.close()
        }
    }, [updateHistory])

    return { data, isLoading: data.length === 0 }
}

export default useWebSocket