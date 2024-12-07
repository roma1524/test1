import React from 'react';

type ButtonPropsType = {
    name: string,
    callback: () => void
}

export const Button = ({callback, name}: ButtonPropsType) => {

    function onClickButtonHandler() {
        callback();
    }

    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};