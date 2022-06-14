import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { returnToCurrentMatch } from '../redux/queueSlice';
import ContentEditable from './ContentEditable';
import DeleteButton from './DeleteButton';

export default function WinnersLounge() {
    const dispatch = useDispatch();
    const winnersLounge = useSelector((state) => state.queue.winnersLounge);
    const currentMatchLength = useSelector((state) => state.queue.currentMatch.length)
    const lobby = 'winnersLounge'

    const handleClick = () => {
        dispatch(returnToCurrentMatch())
    }
    return (
        <div className='container border'>
            <h2>Winner's Lounge</h2>

            {winnersLounge.map((team, index) => {
                return (
                    <div className='row'>
                        <ContentEditable key={index} index={index} team={team} lobby={lobby} />
                        <DeleteButton index={index} lobby={lobby} />
                    </div>
                )
            })}
            <div className="row justify-content-center">
                <div className="col-6 p-0 border">
                    <Button
                        onClick={handleClick}
                        disabled={currentMatchLength === 2}
                        className='w-100'
                    >

                        Return to Match
                    </Button>
                </div>
            </div>
        </div>
    )
}
