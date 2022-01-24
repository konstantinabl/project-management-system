import React from "react";
import { useState } from 'react';
import { useParams } from "react-router-dom";

export const TaskForm = ({ task, setEditMode, data, setData }) => {
    const params = useParams()
    const [currentTask, setTask] = useState(() => {
        return {
            Title: task.Title,
            Type: task.Type,
            Priority: task.Priority,
            Status: task.Status,
            Estimate: task.Estimate,
            Assignee: task.Assignee,
            CreatedAt: task.CreatedAt,
            Description: task.Description
        }
    })
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setTask((state) => ({
            ...state,
            [name]: value
        }))
    }

    const save = () => {
        data.filter(data => data.Name == params.id).map((project) => {
            project.Backlog = project.Backlog.map(element =>
                element.Title == params.task_id
                ? currentTask
                : element)
        })

        setData(data)
    }

    return (
        <>
            <form>
                <label>Title</label><br />
                <input type='text' name="Title"
                defaultValue={task.Title} 
                onChange={handleInputChange} /><br />
                <label>Type</label><br />
                <input type='text' name="Type"
                defaultValue={task.Type} 
                onChange={handleInputChange}/><br />
                <label>Priority</label><br />
                <input type='text' name="Priority"
                defaultValue={task.Priority} 
                onChange={handleInputChange}/><br />
                <label>Status</label><br />
                <input type='text' name="Status"
                defaultValue={task.Status} 
                onChange={handleInputChange}/><br />
                <label>Estimate</label><br />
                <input type='text' name="Estimate"
                defaultValue={task.Estimate} 
                onChange={handleInputChange}/><br />
                <label>Assignee</label><br />
                <input type='text' name="Assignee"
                defaultValue={task.Assignee} 
                onChange={handleInputChange}/><br />
                <label>Created at:</label><br />
                <input type='text' name="CreatedAt"
                defaultValue={task.CreatedAt} 
                onChange={handleInputChange}/><br />
                <label>Description</label><br />
                <input type='text' name="Description"
                defaultValue={task.Description}
                onChange={handleInputChange}/><br />
            </form>
            <button type="button" onClick={()=> {setEditMode(false); save();}}>Save</button>
        </>
    );
};