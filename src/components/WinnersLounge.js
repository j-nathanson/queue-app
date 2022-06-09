import React from 'react'
import { useSelector } from 'react-redux'

export default function WinnersLounge() {
    const winnersLounge = useSelector((state) => state.queue.winnersLounge)
    return (
        <div className='container border'>
            <h2>Winner's Lounge</h2>

            {winnersLounge.map(team => {
                return (
                    <div>
                        {team.name}
                    </div>
                )
            })}

        </div>
    )
}
