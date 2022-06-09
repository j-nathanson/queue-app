import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTeamLobby, editTeamNameLobby } from '../redux/queueSlice'

export default function LobbyCard({ team, index }) {

    const [editToggle, setEditToggle] = useState(true);
    const [name, setName] = useState(team.name)
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteTeamLobby(index))
    }

    const updateToggle = () => {
        setEditToggle(!editToggle);
    }

    const handleEdit = () => {
        const payload = { index,team, name }
        dispatch(editTeamNameLobby(payload));
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
                onClick={() => handleDelete(index)}
            >
                delete</Button>
        </div>
    )
}
