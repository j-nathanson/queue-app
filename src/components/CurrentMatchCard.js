import React from 'react'
import ContentEditable from './ContentEditable'
import WinButton from './WinButton'

export default function CurrentMatchCard({ index, team, lobby }) {

    return (
        <div key={index} className='row mx-auto mb-2'>
            <ContentEditable index={index} team={team} lobby={lobby} />
            <WinButton team={team} />
        </div>
    )
}
