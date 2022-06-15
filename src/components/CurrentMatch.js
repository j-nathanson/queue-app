import React from 'react'
import {  useSelector } from 'react-redux'
import CurrentMatchCard from './CurrentMatchCard';

export default function CurrentMatch() {

    const currentMatch = useSelector((state) => state.queue.currentMatch)
    const lobby = 'currentMatch';

    return (
        <div className='container mb-3 border'>
            <h2>Current Match</h2>
            {currentMatch.length === 0 && (
                <div className='text-center p-5'>add teams</div>
            )}
            {currentMatch.map((team, index) =>
                <CurrentMatchCard index={index} team={team} lobby={lobby} />
            )}
        </div>
    )
}
