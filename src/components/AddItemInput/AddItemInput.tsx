import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemInputPropsType = {
    callback?: (todolistId: string, title: string) => void;
    todolistId?: string
    addTodoList?: (title: string) => void
}

export const AddItemInput = (props: AddItemInputPropsType) => {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    // const addTask = () => {
    //     if (title.trim() !== "") {
    //         if(props.callback && props.todolistId) {
    //             props.callback(props.todolistId, title.trim());
    //         }
    //         setTitle("");
    //     } else {
    //         setError("Title is required");
    //         setTitle("");
    //     }
    // }

    const addTask = () => {
        if (title.trim() !== "") {
            if(props.addTodoList) {
                props.addTodoList(title.trim());
            }
            setTitle("");
        } else {
            setError("Title is required");
            setTitle("");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default AddItemInput;