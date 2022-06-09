import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { dequeue } from '../redux/queueSlice'



export default function Lobby() {
    const currentMatch = useSelector((state) => state.queue.currentMatch.length)

    const handleClick = () => {
        dispatch(dequeue())
    }

    const dispatch = useDispatch();
    const lobby = useSelector((state) => state.queue.waitingLobby);
    return (
        <div className='container border'>
            <h2>Waiting Lobby</h2>
            <Button
                onClick={handleClick}
                disabled={currentMatch === 2}

            >Add to Current match</Button>
            {lobby.map(team => {
                return (
                    <div>
                        <p>{team.name}</p>
                        <Button>edit</Button>
                        <Button>delete</Button>
                    </div>
                )
            })}
        </div>
    )
}
