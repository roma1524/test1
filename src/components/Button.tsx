import React from 'react';

type ButtonProps={
    title:string
    onClick:()=>void
}
export const Button= ({title,onClick}:ButtonProps) => {

    const onClickHandler=()=>{
        onClick()
    }

    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};

