import React, {useState} from 'react';
import {Input} from "./Input";
// @ts-ignore
import styles from '../App2.module.css';

type UpdateRouteProps = {
    currentDate: string;
    callBack: (editedDate: string) => void;
};

export const UpdateItem = ({currentDate, callBack}: UpdateRouteProps) => {
    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(currentDate);

    const editHandler = () => {
        callBack(newTitle);
        setEdit(false);
    };

    return (
        edit
            ? <Input newTitle={newTitle} setNewTitle={setNewTitle} editHandler={editHandler}/>
            : <span className={styles.hoverEffect} onDoubleClick={() => setEdit(true)}>{newTitle}</span>
    );
};


