import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export const TaskForm = ({ task, setEditMode, data, setData }) => {
    const params = useParams();

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

    const onSubmit = (taskToSave) => {
        const projectIndex = data.findIndex(project => project.Name === params.id);
        if(projectIndex < 0) return;
        const taskIndex = data[projectIndex].Backlog.findIndex(task => task.Title === params.task_id);
        if(taskIndex < 0) return;

        data[projectIndex].Backlog[taskIndex] = taskToSave;

        setData([...data]);
        setEditMode(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Title</label>
                <input type='text' name="Title"
                    {...register("Title", { required: "Please enter a title" })}
                    />
                <ErrorMessage errors={errors} name="Title"
                    render={({ message }) => <p className="error">{message}</p>} />
                <label>Type</label>
                <input type='text' name="Type"
                    {...register("Type", {
                        required: "Type is required",
                        validate: value => ["Story", "Bug"].includes(value) || "Invalid input" })}
                    />
                <ErrorMessage errors={errors} name="Type"
                    render={({ message }) => <p className="error">{message}</p>} />
                <label>Priority</label>
                <input type='text' name="Priority"
                    {...register("Priority", { validate: value => ["Low", "Normal", "High", "Critical"].includes(value) || "Invalid input" })}
                    />
                <ErrorMessage errors={errors} name="Priority"
                    render={({ message }) => <p className="error">{message}</p>} />
                <label>Status</label>
                <input type='text' name="Status"
                    {...register("Status", { 
                        required: "Status is required",
                        validate: value => ["To Do", "In Progress", "Ready for Test", "Done"].includes(value) || "Input is not valid" })}
                    />
                <ErrorMessage errors={errors} name="Status"
                    render={({ message }) => <p className="error">{message}</p>} />
                <label>Estimate</label>
                <input type='text' name="Estimate"
                    {...register("Estimate", {
                        validate: {
                            positive: number => parseInt(number) > 0 || "Please provide positive integer"
                        }
                    })}
                    defaultValue={task.Estimate}
                    />
                <ErrorMessage errors={errors} name="Estimate"
                    render={({ message }) => <p className="error">{message}</p>} />
                <label>Assignee</label>
                <input type='text' name="Assignee"
                    {...register("Assignee", { required: true })}
                    defaultValue={task.Assignee}
                    />
                <ErrorMessage errors={errors} name="Assignee"
                    render={({ message }) => <p className="error">{message}</p>} />
                <label>Created at:</label>
                <input type='text' name="CreatedAt"
                    {...register("CreatedAt", { required: true,
                        pattern: {value: /^([0-9]{4})-([0-1][0-9])-([0-3][0-9])\s([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$/,
                                  message: "Invalid date"}
                    })}
                    defaultValue={task.CreatedAt}
                    />
                <ErrorMessage errors={errors} name="CreatedAt"
                    render={({ message }) => <p className="error">{message}</p>} />
                <label>Description</label>
                <input type='text' name="Description"
                    {...register("Description", { required: "Description is required", maxLength:{ value:200, message: "Description too long" }})}
                    defaultValue={task.Description}
                    />
                <ErrorMessage errors={errors} name="Description"
                    render={({ message }) => <p className="error">{message}</p>} />
                <input type="submit" />
            </form>
        </>

    );
};