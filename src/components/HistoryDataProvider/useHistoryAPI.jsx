import { useEffect, useRef } from 'react'
import { updateHistoryAction } from './state'
import { useSetRecoilState } from 'recoil'

async function callAPI(url) {
    const apiResult = await fetch(`http://localhost:8010/proxy${url}`)
    const json = await apiResult.json()
    return json
}

async function fetchNext4Pages(url) {
    const page1 = await callAPI(url)
    const page2 = await callAPI(page1.cursor)
    const page3 = await callAPI(page2.cursor)
    const page4 = await callAPI(page3.cursor)

    return {
        cursor: page4.cursor,
        data: [...page1.data, ...page2.data, ...page3.data, ...page4.data]
    }
}

function useHistoryAPI() {
    const updateHistory = useSetRecoilState(updateHistoryAction)
    const lastCursor = useRef('/rps/history')

    useEffect(() => {
        const fetch = async () => {
            const res = await fetchNext4Pages(lastCursor.current)
            updateHistory(res.data)
            lastCursor.current = res.cursor
        }

        fetch()

        const handle = setInterval(fetch, 3 * 60 * 1000)
        return () => clearInterval(handle)
    }, [updateHistory])
}

export default useHistoryAPI