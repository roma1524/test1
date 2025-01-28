import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemInputPropsType = {
    addTodoList?: (title: string) => void;
    addTask?: (todolistId: string, title: string) => void;
    todolistId?: string
}

export const AddItemInput = (props: AddItemInputPropsType) => {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            if(props.todolistId && props.addTask) {
                props.addTask(props.todolistId, title.trim());
            } else if(props.addTodoList) {
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