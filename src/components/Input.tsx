import React, {ChangeEvent} from 'react';

type InputProps = {
    newTitle: string,
    setNewTitle: (newTitle: string) => void
    editHandler?: () => void
    placeholder?: string
}
export const Input = ({
                          newTitle,
                          setNewTitle,
                          placeholder,
                          editHandler
                      }: InputProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        <input
            value={newTitle}
            onChange={onChangeHandler}
            placeholder={placeholder}
            autoFocus
            onBlur={editHandler}
        />
    );
};

