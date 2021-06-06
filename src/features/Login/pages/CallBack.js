import { useEffect } from 'react'

import { useLocation } from 'react-router'

export default function Callback() {
    let location = useLocation()
    let params = new URLSearchParams(location.search)
    let result = {}
    for (const iterator of params.entries()) {
        result[iterator[0]] = iterator[1]
    }
    useEffect(() => {
        var event = new CustomEvent('login', {
            detail: result,
            bubbles: true,
            cancelable: true,
        })
        window.dispatchEvent(event)
        console.log('dispatch')
    })

    return <>Waiting...</>
}
