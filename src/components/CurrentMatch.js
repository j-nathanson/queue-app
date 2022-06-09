import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function CurrentMatch() {
    const currentMatch = useSelector((state) => state.queue.currentMatch)
    return (
        <div className='container border'>
            <h2>Current Match</h2>
            {currentMatch.map(team => {
                return (
                    <div>
                        <p>{team}</p>
                        <Button>edit</Button>
                        <Button>delete</Button>
                        <Button>winner</Button>
                    </div>
                )
            })}
        </div>
    )
}
