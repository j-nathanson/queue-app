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
        <div className='container mb-3 border'>
            <h2>Winner's Lounge</h2>

            {winnersLounge.map((team, index) => {
                return (
                    <div className='row mb-3 mx-auto'>
                        <ContentEditable key={index} index={index} team={team} lobby={lobby} />
                        <DeleteButton index={index} lobby={lobby} />
                    </div>
                )
            })}
            <div className="row justify-content-center">

                <Button
                    onClick={handleClick}
                    disabled={currentMatchLength === 2}
                    className="col-5 mb-3"
                >
                    Return to Match
                </Button>

            </div>
        </div>
    )
}
