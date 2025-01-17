import {Input} from "./Input";
import {Button} from "./Button";
import {useState} from "react";
// @ts-ignore
import styles from '../App2.module.css'

export type RouteUseStateType = {
    from: string;
    to: string;
};


type Props = {
    onClick: (from: string, to: string) => void;
    flightTableID?: string;
    title:string
};

export const AddNewItem = ({ onClick, title}:Props) => {
    const [route, setRoute] = useState<RouteUseStateType>({ from: '', to: '' });
    const handleFromChange = (newFrom: string) => {
        setRoute({...route, from: newFrom});
    };

    const handleToChange = (newTo: string) => {
        setRoute({...route, to: newTo});
    };

    const addRouteHandler = () => {
        if (route.from.trim() !== '' && route.to.trim() !== '') {
            onClick( route.from, route.to);
            setRoute({from: '', to: ''});
        } else {
            alert('Please fill in both "From" and "To" fields.');
        }
    };

    return (
        <div className={styles.addNewItemWrapper}>
            <Input
                newTitle={route.from}
                setNewTitle={handleFromChange}
                placeholder="From"
            />
            <Input
                newTitle={route.to}
                setNewTitle={handleToChange}
                placeholder="To"
            />
            <Button title={title} onClick={addRouteHandler}/>
        </div>
    );
};