import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

export const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    // console.log(timestamp) // 2023-03-06T04:04:23.737Z
    if (timestamp) {
        const date = parseISO(timestamp)
        // console.log(date) // Mon Mar 06 2023 13:04:23 GMT+0900 (GMT+09:00)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}