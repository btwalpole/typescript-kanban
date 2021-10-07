import { issue } from '../models/issue.model'

export default function Issue({ name, status }: issue) {
    return (
    <div>
        <h1>{name}</h1>
        <h2>Description</h2>
        <textarea value={`hi`} />
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