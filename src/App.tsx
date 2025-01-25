import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import AddItemInput from "./components/AddItemInput/AddItemInput";

export type FilterValuesType = "all" | "active" | "completed";
type TodolistsType = { id: string, title: string };
type DataTypes = {
    data: TaskType[]
    filter: FilterValuesType
}
type TasksType = {
    [key: string]: DataTypes
}

function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistId1, title: "What to learn"},
        {id: todolistId2, title: "What to buy"}
    ])

    let [tasks, setTasks] = useState<TasksType>({
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
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId];
        setTasks({...tasks})
        console.log(tasks)
    }

    function removeTask(todolistId: string, taskId: string) {
        setTasks({
            ...tasks,
            [todolistId]: {...tasks[todolistId], data: tasks[todolistId].data.filter(el => el.id !== taskId)}
        })
    }

    function addTask(todolistId: string, title: string) {
        let newTask = {id: v1(), title, isDone: false}
        setTasks({...tasks, [todolistId]: {...tasks[todolistId], data: [newTask, ...tasks[todolistId].data]}})
    }

    function addTodoList(title: string) {
        const newIdForTodoList = v1();
        const newTodoList = {id: newIdForTodoList, title}
        setTodolists([newTodoList, ...todolists])
        const newTaskItem: DataTypes = {
            data: [],
            filter: "all"
        }
        tasks[newIdForTodoList] = newTaskItem;
        setTasks({...tasks})
    }

    function changeStatus(todolistId: string, taskId: string, newIsDone: boolean) {
        setTasks({
            ...tasks, [todolistId]: {
                ...tasks[todolistId], data: tasks[todolistId].data.map(el => {
                    return el.id === taskId ? {...el, isDone: newIsDone} : el
                })
            }
        })
    }

    function changeFilter(todolistId: string, filter: FilterValuesType) {
        setTasks({...tasks, [todolistId]: {...tasks[todolistId], filter}})
    }

    return (
        <div className="App">
            <AddItemInput addTodoList={addTodoList} />
            {todolists.map((el) => {
                return (
                    <Todolist
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasks[el.id].data}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tasks[el.id].filter}
                        removeTodolist={removeTodolist}
                        addTodoList={addTodoList}
                    />
                )
            })}


        </div>
    );
}

export default App;
