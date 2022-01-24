import React from "react";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export const TaskForm = ({ task, setEditMode, data, setData }) => {
    const params = useParams();
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
    });
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            Title: task.Title,
            Type: task.Type,
            Priority: task.Priority,
            Status: task.Status,
            Estimate: task.Estimate,
            Assignee: task.Assignee,
            CreatedAt: task.CreatedAt,
            Description: task.Description
        },
        criteriaMode: "all"
    });
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setTask((state) => ({
            ...state,
            [name]: value
        }))
    }

    const onSubmit = (data) => {
        data.filter(data => data.Name == params.id).map((project) => {
            project.Backlog = project.Backlog.map(element =>
                element.Title == params.task_id
                ? currentTask
                : element)
        })

        setData(data)
        setEditMode(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Title</label><br />
                <input type='text' name="Title" {...register("Title", {required: "Please enter a title"})}
                onChange={handleInputChange} /><br />
                <label>Type</label><br />
                <input type='text' name="Type" {...register("Type", {validate: value => ["Story","Bug"].includes(value) })}
                onChange={handleInputChange}/><br />
                {errors.Type && (<span role="alert">This input is not valid</span>)}
                <label>Priority</label><br />
                <input type='text' name="Priority"
                {...register("Priority", {validate: value => ["Low","Normal","High","Critical"].includes(value) })}
                onChange={handleInputChange}/><br />
                {errors.Priority && (<span role="alert">This input is not valid</span>)}
                <label>Status</label><br />
                <input type='text' name="Status"
                {...register("Status", {validate: value => ["To Do","In Progress","Ready for Test","Done"].includes(value) })}
                onChange={handleInputChange}/><br />
                {errors.Status && (<span role="alert">This input is not valid</span>)}
                <label>Estimate</label><br />
                <input type='text' name="Estimate"
                {...register("Estimate", {validate: {
                    positive: number => parseInt(number) > 0
                  }})}
                defaultValue={task.Estimate}
                onChange={handleInputChange}/><br />
                {errors.Estimate && (<span role="alert">Please insert a positive number</span>)}
                <label>Assignee</label><br />
                <input type='text' name="Assignee"
                {...register("Assignee", {required: true})}
                defaultValue={task.Assignee} 
                onChange={handleInputChange}/><br />
                <label>Created at:</label><br />
                <input type='text' name="CreatedAt"
                {...register("CreatedAt", {valueAsDate: true})}
                defaultValue={task.CreatedAt} 
                onChange={handleInputChange}/><br />
                <label>Description</label><br />
                <input type='text' name="Description"
                {...register("Description", {required: true})}
                defaultValue={task.Description}
                onChange={handleInputChange}/><br />
                <input type="submit"/>
            </form>
        </> 

    );
};