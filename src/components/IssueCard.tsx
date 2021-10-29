//import { useState } from 'react'
import { issue } from '../models/issue.model'
import '../App.css'

type IssueCardProps = {
    issue: issue,
    handleDescChange: (event: React.ChangeEvent<HTMLTextAreaElement>, id: number) => void;
    handleStatusChange: (event: React.ChangeEvent<HTMLSelectElement>, id: number) => void;
    toggleModal: (event: React.MouseEvent, id: number) => void;
}

export default function IssueCard({issue, handleDescChange, handleStatusChange, toggleModal}: IssueCardProps) {
    const { id, name, status, desc } = issue;

    return (
    <div className="issue-card" onClick={(event) => toggleModal(event, id)}>
        <h2>{name}</h2>
        <h3>Description</h3>
        <textarea value={desc} onChange={(event) => handleDescChange(event, id)}/>
        <h4>Status</h4>
        <select value={status} onChange={(event) => handleStatusChange(event, id)}>
            <option value="Backlog">Backlog</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
        </select>
    </div>
    )
}