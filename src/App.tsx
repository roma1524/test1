import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistsType = { id: string, title: string }
type DataType = {
    data: TaskType[]
    filter: FilterValuesType
}
type TasksPropsType = {
    [key: string]: DataType
}

function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistId1, title: "What to learn"},
        {id: todolistId2, title: "What to buy"}
    ])

    let [tasks, setTasks] = useState<TasksPropsType>({
        [todolistId1]: {
            data: [
                {id: v1(), title: "HTML&CSS1111", isDone: true},
                {id: v1(), title: "JS1111", isDone: true}
            ],
            filter: "all"
        },
        [todolistId2]: {
            data: [
                {id: v1(), title: "HTML&CSS22222", isDone: true},
                {id: v1(), title: "JS2222", isDone: true}
            ],
            filter: "all"
        }
    });


    const removeTodolist = (todolistId: string) => {
        const filteredList = todolists.filter(el => el.id !== todolistId);
        setTodolists(filteredList)
        delete tasks[todolistId];
        setTasks({...tasks})
    }

    function removeTask(todolistId: string, taskId: string) {
        setTasks({...tasks, [todolistId] : {...tasks[todolistId], data: [...tasks[todolistId].data.filter(el => el.id !== taskId)]}})
    }

    function addTask(todolistId: string, title: string) {
        const newTask = {id: v1(), title, isDone: false}
        setTasks({...tasks, [todolistId] : {...tasks[todolistId], data: [newTask, ...tasks[todolistId].data]}})
    }

    function changeStatus(todolistId: string, taskId: string, newIsDone: boolean) {
        const newIsDoneValue = tasks[todolistId].data.find(el => {
            if(el.id === taskId) {
                el.isDone = newIsDone;
            }
            setTasks({...tasks})
        })
    }

    function changeFilter(todolistId: string, filter: FilterValuesType) {
        setTasks({...tasks, [todolistId] : {...tasks[todolistId], filter}})
    }

    return (
        <div className="App">
            {todolists.map((el) => {
                let tasksForTodolist = tasks[el.id].data
                if (tasks[el.id].filter === "active") {
                    tasksForTodolist = tasks[el.id].data.filter(t => t.isDone === false);
                }
                if (tasks[el.id].filter === "completed") {
                    tasksForTodolist = tasks[el.id].data.filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tasks[el.id].filter}
                        removeTodolist={removeTodolist}
                    />
                )
            })}


        </div>
    );
}

export default App;
