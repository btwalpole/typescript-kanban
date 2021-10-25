import Issue from './Issue';
import { issue } from '../models/issue.model'
import { useState } from 'react';
import '../App.css'

let initialIssues: issue[] = [
    {
        id: 1,
        status: "Backlog",
        name: "Task 1",
        desc: 'Do some stuff'
    },
    {
        id: 2,
        status: "Done",
        name: "Task 2",
        desc: 'Do some other stuff'
    }
]

export default function Board() {
    let [issues, setIssues] = useState(initialIssues)

    function handleDescChange(event: React.ChangeEvent<HTMLTextAreaElement>, id: number): void {
        console.log('hi there ', id);
        console.log('value', event.target.value);
        const newValue = event.target.value;

        setIssues(prevArray => prevArray.map(issue => {
            if(issue.id === id) {
                return {...issue, desc: newValue}
            } else {
                return issue
            }
        }));
    }

    function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>, id: number): void {
        console.log('handling status change', id);
        console.log('new status value ', event.target.value);
        const newStatusValue = event.target.value;

        setIssues(prevArray => prevArray.map(issue => {
            if(issue.id === id && (newStatusValue === "Backlog" || newStatusValue === "In Progress" || newStatusValue === "Done")) {
                return {...issue, status: newStatusValue}
            } else {
                return issue
            }
        }));
    }


    return (
        <div className="column">
            {issues.map((item: issue) => {
                return (
                    <Issue 
                        key={item.id} 
                        handleDescChange={handleDescChange} 
                        handleStatusChange={handleStatusChange} 
                        issue={item}/>
                )
            })}
        </div>
    )
}