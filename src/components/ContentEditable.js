import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTeam } from '../redux/queueSlice';
import Icon from '@mdi/react';
import { mdiLeadPencil } from '@mdi/js';
import { mdiCheckboxMarkedCirclePlusOutline } from '@mdi/js';

export default function ContentEditable({ index, team, lobby }) {
    const [editToggle, setEditToggle] = useState(true);
    const [name, setName] = useState(team.name)
    const dispatch = useDispatch();

    const updateToggle = () => {
        setEditToggle(!editToggle);
    }

    const handleEdit = () => {
        const payload = { index, team, name, lobby }
        dispatch(editTeam(payload));
        updateToggle();
    }
    return (
        <>
            {editToggle && (
                <>
                    <p className='col-9'>{team.name}</p>
                    <Button
                        className='col'
                        onClick={updateToggle}
                        variant='info'
                    >
                        <Icon path={mdiLeadPencil}
                            title="edit team"
                            size={1}
                            color="white"
                        />

                    </Button>
                </>
            )}
            {!editToggle && (
                <>
                    <Form.Group className='col-9 p-0'>
                        <Form.Control
                            className='w-100'
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Button
                        onClick={handleEdit}
                        className='col'
                        variant='success'
                    >
                        <Icon path={mdiCheckboxMarkedCirclePlusOutline}
                            title="edit team"
                            size={1}
                            color="white"
                        />

                    </Button>
                </>
            )}
        </>
    )
}
