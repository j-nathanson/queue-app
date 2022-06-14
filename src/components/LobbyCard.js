import React from 'react'
import ContentEditable from './ContentEditable'
import DeleteButton from './DeleteButton'

export default function LobbyCard({ team, index }) {
    const lobby = 'waitingLobby';


    return (
        <div className='row'>
            <ContentEditable index={index} team={team} lobby={lobby} />
            <DeleteButton index={index} lobby={lobby} />
        </div>
    )
}
