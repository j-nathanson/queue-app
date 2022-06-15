import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { dequeue } from '../redux/queueSlice'
import LobbyCard from './LobbyCard'

export default function Lobby() {
    const currentMatchLength = useSelector((state) => state.queue.currentMatch.length)


    const handleClick = () => {
        dispatch(dequeue())
    }


    const dispatch = useDispatch();
    const lobby = useSelector((state) => state.queue.waitingLobby);
    return (
        <div className='container mb-3 border'>
            <h2>Waiting Lobby</h2>
            <div className="row justify-content-center mb-3">
                <div className="col-6">
                    <Button
                        onClick={handleClick}
                        className='w-100'
                        disabled={currentMatchLength === 2 || lobby.length === 0}

                    >
                        Add to Match
                    </Button>
                </div>
            </div>

            {lobby.map((team, index) => {
                return (
                    <LobbyCard key={index} team={team} index={index} />
                )
            })}
        </div>
    )
}
