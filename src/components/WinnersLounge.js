import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { returnToCurrentMatch } from '../redux/queueSlice';

export default function WinnersLounge() {
    const dispatch = useDispatch();
    const winnersLounge = useSelector((state) => state.queue.winnersLounge);
    const currentMatchLength = useSelector((state) => state.queue.currentMatch.length)

    const handleClick = () => {
        dispatch(returnToCurrentMatch())
    }
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
            <Button
                onClick={handleClick}
                disabled={currentMatchLength === 2}

            >add back to current match</Button>
        </div>
    )
}
