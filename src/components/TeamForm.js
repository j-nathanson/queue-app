import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { enqueue } from '../redux/queueSlice';
import { useDispatch } from 'react-redux'
export default function TeamForm() {
    const [team, setTeam] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (team) {
            dispatch(enqueue(team))
            setTeam('');
        }
    }


    return (
        <div className='container border'>
            <h3>Enter your Team</h3>
            <Form>
                <div className="row mb-3">
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={team}
                            onChange={e => setTeam(e.target.value)}
                            placeholder="Team Rocket"
                        />
                    </Form.Group>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 ">
                        <Button
                            className='w-100'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}
