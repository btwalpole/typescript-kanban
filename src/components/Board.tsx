import Issue from './Issue';
import { issue } from '../models/issue.model'

//import { useState } from 'react';
/*
type issue = {
    status: "Backlog" | "In Progress" | "Done",
    name: string
}
*/

function handleChange() {
    console.log('hi there')
}

let initialIssues: issue[] = [
    {
        status: "Backlog",
        name: "Cool Task 1"
    },
    {
        status: "Done",
        name: "Cool Task 2"
    }
]

export default function Board() {
    //let [issues, setIssues] = useState(initialIssues)

    return (
        <>
        {initialIssues.map((item: issue) => <Issue {...item}/>)}
        </>
    )
}