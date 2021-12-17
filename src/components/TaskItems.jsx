import React from 'react'
import TaskItem from './TaskItem'


export default function TaskItems(props) {
    return (
        <>
        {
            props.tasks.map((task,i)=> <TaskItem key={i} title={task.title} desc={task.description} />)
        }
        </>
    )
}
