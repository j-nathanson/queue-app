import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTeam } from '../redux/queueSlice';

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
                    <p>{team.name}</p>
                    <Button
                        onClick={updateToggle}
                    >edit</Button>
                </>
            )}
            {!editToggle && (
                <>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Button
                        onClick={handleEdit}
                    >
                        submit</Button>
                </>
            )}
        </>
    )
}
