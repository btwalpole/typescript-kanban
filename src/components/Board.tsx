import Issue from './Issue';
import IssueModal from './IssueModal'
import { issue } from '../models/issue.model'
import { useState, useRef, useEffect } from 'react';
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
        name: "Taskify",
        desc: 'Do some other stuff'
    },
    {
        id: 3,
        status: "In Progress",
        name: "Thangy",
        desc: 'Do some more other stuff'
    },
    {
        id: 4,
        status: "Done",
        name: "Thingy",
        desc: 'Do different other stuff'
    }
]

export default function Board() {
    let [issues, setIssues] = useState(initialIssues)
    const [modalActive, setModalActive] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    function logMouseEvent() {
        console.log('mouseDown event detected')
    }

    useEffect(() => {
        console.log(ref.current)
        const checkIfClickedOutside: {(event: React.MouseEvent<Element, MouseEvent>): void} = (event: React.MouseEvent<Element, MouseEvent>) => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (modalActive > 0 && ref.current && !ref.current.contains(event.target as Node)) {
            setModalActive(0);
            console.log('clicked outside of modal, now closing')
          }
          console.log('click registered as inside modal')
        }
    
        document.addEventListener("mousedown", (ev: React.MouseEvent) => checkIfClickedOutside(ev))
        document.addEventListener("mousedown", logMouseEvent)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("onMouseDown", (e) => checkIfClickedOutside)
        }
      })

    function toggleModal(event: React.MouseEvent, id: number) {
        event.preventDefault();
        console.log('toggling modal ', id);
        setModalActive(id);
    }

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
        <div className="board-container">
            <h1>Modal Active: {modalActive}</h1>
            <div ref={ref} className="issue-modal">
                {modalActive > 0 && (
                    issues.map((item: issue) => {
                        if(item.id === modalActive) {
                            return (
                                <Issue 
                                    key={item.id} 
                                    handleDescChange={handleDescChange} 
                                    handleStatusChange={handleStatusChange} 
                                    issue={item}
                                    toggleModal={toggleModal}  
                                />
                            )
                        }
                    })
                )}
            </div>
            <div className="column">
                <h1>Backlog</h1>
                {issues.map((item: issue) => {
                    if(item.status === 'Backlog') {
                        return (
                            <Issue 
                                key={item.id} 
                                handleDescChange={handleDescChange} 
                                handleStatusChange={handleStatusChange} 
                                issue={item}
                                toggleModal={toggleModal}  
                            />
                        )
                    }
                })}
            </div>
            <div className="column">
                <h1>In Progress</h1>
                {issues.map((item: issue) => {
                    if(item.status === 'In Progress') {
                        return (
                            <Issue 
                                key={item.id} 
                                handleDescChange={handleDescChange} 
                                handleStatusChange={handleStatusChange} 
                                issue={item}
                                toggleModal={toggleModal}  
    
                            />
                        )
                    }
                })}
            </div>
            <div className="column">
                <h1>Done</h1>
                {issues.map((item: issue) => {
                    if(item.status === 'Done') {
                        return (
                            <Issue 
                                key={item.id} 
                                handleDescChange={handleDescChange} 
                                handleStatusChange={handleStatusChange} 
                                issue={item}
                                toggleModal={toggleModal}  
 
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}