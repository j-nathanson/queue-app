import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTeam, editTeam, } from '../redux/queueSlice'

export default function LobbyCard({ team, index }) {

    const [editToggle, setEditToggle] = useState(true);
    const [name, setName] = useState(team.name)
    const dispatch = useDispatch();
    const lobby = 'waitingLobby';

    const handleDelete = () => {
        dispatch(deleteTeam({ index, lobby }))
    }

    const updateToggle = () => {
        setEditToggle(!editToggle);
    }

    const handleEdit = () => {
        const payload = { index, team, name, lobby }
        dispatch(editTeam(payload));
        updateToggle();
    }

    return (
        <div>

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
            <Button
                onClick={handleDelete}
            >
                delete</Button>
        </div>
    )
}
