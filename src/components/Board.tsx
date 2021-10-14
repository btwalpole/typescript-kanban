import Issue from './Issue';
import { issue } from '../models/issue.model'
import { useState } from 'react';

let initialIssues: issue[] = [
    {
        id: 1,
        status: "Backlog",
        name: "Cool Task 1"
    },
    {
        id: 2,
        status: "Done",
        name: "Cool Task 2"
    }
]

export default function Board() {
    let [issues, setIssues] = useState(initialIssues)

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>, id: number): void {
        console.log('hi there ', id);
        console.log('value', event.target.value);

        setIssues(prevArray => prevArray.map(issue => {
            return issue;
            /*
            if(issue.id === id) {
                return {}
            } else {
                return issue
            }
            */
        }))

        const issueToUpdate = issues.find(issue => issue.id === id)
    }

    return (
        <>
        {issues.map((item: issue) => <Issue key={item.id} handleChange={handleChange} issue={item}/>)}
        </>
    )
}