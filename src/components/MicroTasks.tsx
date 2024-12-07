import {useState} from "react"
import {Input} from "./Input";
import {Button} from "./Button";

export const MicroTasks = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);
    let [title, setTitle] = useState('');

    function updateState(inputMessage: string) {
        setMessage([{message: inputMessage}, ...message]);
    }

    function callbackButtonHandler() {
        updateState(title);
        setTitle('');
    }

    return (
        <div className="MicroTasks">
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callback={callbackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}