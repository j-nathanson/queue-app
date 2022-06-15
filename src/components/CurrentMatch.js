import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { winMatch } from '../redux/queueSlice';
import ContentEditable from './ContentEditable';
import Icon from '@mdi/react';
import { mdiTrophy } from '@mdi/js';

export default function CurrentMatch() {

    const dispatch = useDispatch();
    const currentMatch = useSelector((state) => state.queue.currentMatch)
    const lobby = 'currentMatch';


    const handleWin = (team) => {
        dispatch(winMatch(team))
    }

    return (
        <div className='container mb-3 border'>
            <h2>Current Match</h2>

            {currentMatch.length === 0 && (
                <div className='text-center p-5'>add teams</div>
            )}

            {currentMatch.map((team, index) => {
                return (
                    <div key={index} className='row mx-auto mb-2'>
                        <ContentEditable index={index} team={team} lobby={lobby} />
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
                    </div>
                )
            })}
        </div>
    )
}
