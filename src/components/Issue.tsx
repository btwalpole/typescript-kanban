import { useState } from 'react'
import { issue } from '../models/issue.model'

type IssueProps = {
    issue: issue,
    handleChange: (id: number) => void;
}

export default function Issue({issue, handleChange}: IssueProps) {
    const { id, name, status } = issue;
    const [desc, setDesc ] = useState('hihi')

    return (
    <div>
        <h1>{name}</h1>
        <h2>Description</h2>
        <textarea value={desc} onChange={(id: number) => handleChange}/>
        <h3>Status</h3>
        <h2>{status}</h2>
        <select>
            <option selected value="Backlog">Backlog</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
        </select>
    </div>
    )
}