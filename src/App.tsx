import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TaskPropsType = {
    [key: string]: TaskType[]
}

export type TodolistsPropsType = {
    id: string
    title: string
    filter: FilterValuesType
}


function App() {

    /* let [tasks, setTasks] = useState<TaskPropsType[]>([
         {id: v1(), title: "HTML&CSS", isDone: true},
         {id: v1(), title: "JS", isDone: true},
         {id: v1(), title: "ReactJS", isDone: false},
         {id: v1(), title: "Rest API", isDone: false},
         {id: v1(), title: "GraphQL", isDone: false},
     ]);*/
    let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<TodolistsPropsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TaskPropsType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(currentListId: string, id: string) {
        const filteredTasks = tasks[currentListId].filter(t => t.id !== id);

        tasks[currentListId] = filteredTasks;
        setTasks({...tasks})
    }

    function addTask(currentListId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};

        tasks[currentListId] = [task, ...tasks[currentListId]];
        setTasks({...tasks});
    }

    function changeStatus(taskId: string, isDone: boolean, id: string) {
        const listT = tasks[id];
        const currentTask = listT.find((t) => t.id === taskId);

        if(currentTask) {
            currentTask.isDone = isDone;
        }

        setTasks({...tasks});
    }

    function changeFilter(value: FilterValuesType, id: string) {
        let filteredItems = todolists.find(el => el.id === id)
        console.log(filteredItems);
        if(filteredItems) {
            filteredItems.filter = value;
            setTodolists([...todolists])
        }
    }


    return (
        <div className="App">
            {todolists.map(items => {

                let tasksForTodolist = tasks[items.id];

                if (items.filter === "active") {
                    tasksForTodolist = tasks[items.id].filter(t => t.isDone === false);
                }
                if (items.filter === "completed") {
                    tasksForTodolist = tasks[items.id].filter(t => t.isDone === true);
                }

                return (<Todolist
                    listId={items.id}
                    title="What to learn"
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={filter}
                />)
            })}

            {/*<Todolist title="What to learn"*/}
            {/*          tasks={tasksForTodolist}*/}
            {/*          removeTask={removeTask}*/}
            {/*          changeFilter={changeFilter}*/}
            {/*          addTask={addTask}*/}
            {/*          changeTaskStatus={changeStatus}*/}
            {/*          filter={filter}*/}
            {/*/>*/}
        </div>
    );
}

export default App;
