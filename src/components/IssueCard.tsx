//import { useState } from 'react'
import { issue } from '../models/issue.model'
import '../App.css'

type IssueCardProps = {
    issue: issue,
    handleDescChange: (event: React.ChangeEvent<HTMLTextAreaElement>, id: number) => void;
    handleStatusChange: (event: React.ChangeEvent<HTMLSelectElement>, id: number) => void;
    toggleModal: (event: React.MouseEvent, id: number) => void;
}

export default function IssueCard({issue, toggleModal}: IssueCardProps) {
    const { id, name } = issue;

    return (
    <div className="issue-card" onClick={(event) => toggleModal(event, id)}>
        <h2>{name}</h2>
    </div>
    )
}