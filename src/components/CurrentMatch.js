import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { winMatch } from '../redux/queueSlice';
import ContentEditable from './ContentEditable';

export default function CurrentMatch() {

    const dispatch = useDispatch();
    const currentMatch = useSelector((state) => state.queue.currentMatch)
    const lobby = 'currentMatch';

    const handleWin = (team) => {
        dispatch(winMatch(team))
    }

    return (
        <div className='container border'>
            <h2>Current Match</h2>
            {currentMatch.map((team, index) => {
                return (
                    <div key={index}>
                        <ContentEditable index={index} team={team} lobby={lobby} />
                        <Button
                            onClick={() => handleWin(team)}
                        >winner</Button>
                    </div>
                )
            })}
        </div>
    )
}
