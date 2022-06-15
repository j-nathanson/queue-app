import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTeam } from '../redux/queueSlice';
import Icon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';

export default function DeleteButton({ index, lobby }) {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTeam({ index, lobby }))
    }

    return (
        <>
            <Button
                className='col-2'
                onClick={handleDelete}
                variant='danger'
            >
                <Icon path={mdiTrashCan}
                    title="edit team"
                    size={1}
                    color="white"
                />
            </Button>
        </>
    )
}
