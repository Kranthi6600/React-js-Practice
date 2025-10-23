import React, { useState } from 'react'
import Receiver from './Receiver';

function Notes() {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [task, setTask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();

        const copyTask = [...task]

        copyTask.push({ title, details })

        setTask(copyTask);

        setTitle('')
        setDetails('')

    }

    const deleteHandler = (index)=>{
        const updatedTasks = task.filter((_, idx)=> idx !== index)
        setTask(updatedTasks)
    }

    return (
        <div className='parent'>
            <h1 className='text-center'>Notes</h1>
            <div className='form m-4'>
                <h2 className='text-center'>New Note</h2>
                <form className='d-flex flex-column g-2' onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder='Enter Notes Heading'
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        value={title}
                    />
                    <textarea
                        type="text"
                        name=""
                        id=""
                        placeholder='Enter Details'
                        onChange={(e) => {
                            setDetails(e.target.value)
                        }}
                        value={details}
                    />
                    <button
                        className='btn text-white'
                        disabled={!details.trim()}>
                        Add Note
                    </button>
                </form>

            </div>
            <div className="notes-container m-4">
                {task.map((note, idx) => (
                    <Receiver
                        key={idx}
                        index={idx}
                        title={note.title}
                        details={note.details}
                        onDelete={deleteHandler}
                    />
                ))}
            </div>


        </div>
    )
}

export default Notes