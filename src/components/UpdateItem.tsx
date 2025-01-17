import React, {useState} from 'react';
import {Input} from "./Input";
// @ts-ignore
import styles from '../App2.module.css';

type UpdateRouteProps = {
    oldTitle: string;
    callBack: () => void;
};

export const UpdateItem = ({ oldTitle, callBack }: UpdateRouteProps) => {
    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(oldTitle);

    const editHandler = () => {
        alert('Двоечники подсказали, что и в локальном стейте сойдет!')
        setEdit(false);
          };

       return (
        edit
            ? <Input newTitle={newTitle} setNewTitle={setNewTitle} editHandler={editHandler}/>
            : <span className={styles.hoverEffect} onDoubleClick={() => setEdit(true)}>{newTitle}</span>
    );
};


