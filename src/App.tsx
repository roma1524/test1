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
        delete tasks[todolistId]
    }

    function removeTask(todolistId: string, taskId: string) {

    }

    function addTask(todolistId: string, title: string) {

    }

    function addTodoList(title: string) {

    }

    function changeStatus(todolistId: string, taskId: string, newIsDone: boolean) {

    }

    function changeFilter(todolistId: string, filter: FilterValuesType) {
    }

    return (
        <div className="App">
            <AddItemInput addTodoList={addTodoList}/>
            {todolists.map((el) => {
                return (
                    <Todolist
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasks[el.id].data}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        changeTaskStatus={changeStatus}
                        filter={tasks[el.id].filter}
                        removeTodolist={removeTodolist}
                        addTask={addTask}
                    />
                )
            })}


        </div>
    );
}

export default App;
