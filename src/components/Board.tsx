import Issue from './Issue';
import { issue } from '../models/issue.model'

//import { useState } from 'react';



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
    //let [issues, setIssues] = useState(initialIssues)

    function handleChange(id: number): void {
        console.log('hi there ', id);
    }

    return (
        <>
        {initialIssues.map((item: issue) => <Issue key={item.id} handleChange={handleChange} issue={item}/>)}
        </>
    )
}