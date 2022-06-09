import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { winMatch } from '../redux/queueSlice';

export default function CurrentMatch() {

    const dispatch = useDispatch();
    const currentMatch = useSelector((state) => state.queue.currentMatch)
 
    const handleWin = (team) => {
        dispatch(winMatch(team))
    }

    return (
        <div className='container border'>
            <h2>Current Match</h2>
            {currentMatch.map(team => {
                return (
                    <div>
                        <p>{team.name}</p>
                        <Button>edit</Button>
                        <Button>delete</Button>
                        <Button
                            onClick={() => handleWin(team)}
                        >winner</Button>
                    </div>
                )
            })}
        </div>
    )
}
