import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTeam } from '../redux/queueSlice';

export default function DeleteButton({ index, lobby }) {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTeam({ index, lobby }))
    }

    return (
        <>
            <Button
                onClick={handleDelete}
            >
                delete</Button>
        </>
    )
}
