import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { enqueue } from '../redux/queueSlice';
import { useDispatch } from 'react-redux'
export default function TeamForm() {
    const [team, setTeam] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (team) {
            dispatch(enqueue(team))
        }
    }


    return (
        <div className='container'>
            <h3>Enter your Team</h3>
            <div className="row">
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            onChange={e => setTeam(e.target.value)}
                            placeholder="Team Rocket"
                        />
                    </Form.Group>
                </Form>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 ">
                    <Button
                        className='w-100'
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>

        </div>
    )
}
