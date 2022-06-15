import { mdiTrophy } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { winMatch } from '../redux/queueSlice'

export default function WinButton({ team }) {

    const dispatch = useDispatch();

    const handleWin = (team) => {
        dispatch(winMatch(team))
    }
    return (
        <Button
            onClick={() => handleWin(team)}
            variant='warning'
            className='col p-0 '
        >
            <Icon path={mdiTrophy}
                title="edit team"
                size={1}
                color="white"
            />
        </Button>
    )
}
