import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'


export default function Lobby() {
    const lobby = useSelector((state) => state.queue.waitingLobby)
    return (
        <div className='container border'>
            <h2>Waiting Lobby</h2>
            {lobby.map(team => {
                return (
                    <div>
                        <p>{team}</p>
                        <Button>edit</Button>
                        <Button>delete</Button>
                    </div>
                )
            })}
        </div>
    )
}
