//import { useState } from 'react'
import { issue } from '../models/issue.model'

type IssueProps = {
    issue: issue,
    handleDescChange: (event: React.ChangeEvent<HTMLTextAreaElement>, id: number) => void;
    handleStatusChange: (event: React.ChangeEvent<HTMLSelectElement>, id: number) => void;

}

export default function Issue({issue, handleDescChange, handleStatusChange}: IssueProps) {
    const { id, name, status, desc } = issue;

    return (
    <div>
        <h1>{name}</h1>
        <h2>Description</h2>
        <textarea value={desc} onChange={(event) => handleDescChange(event, id)}/>
        <h3>Status</h3>
        <h2>{status} {id}</h2>
        <select value={status} onChange={(event) => handleStatusChange(event, id)}>
            <option value="Backlog">Backlog</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
        </select>
    </div>
    )
}