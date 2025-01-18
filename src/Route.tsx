import {UpdateItem} from "./components/UpdateItem";
// @ts-ignore
import styles from "./App2.module.css";
import {CheckBox} from "./components/CheckBox";
import {Button} from "./components/Button";
import {RouteType} from "./FlightTable";
import {useState} from "react";

type RouteProps = {
    route: RouteType
    toggleFTIsBooked: (flightTableID: string, routeID: string, isBooked: boolean) => void;
    flightTableID: string;
    updateFTRoutesFrom: (flightID: string, routeID: string, newFrom: string) => void;
    updateFTRoutesTo: (flightID: string, routeID: string, newTo: string) => void;
    removeFTRoute: (flightTableID: string, routeID: string) => void

};

export const Route = ({
                          route,
                          toggleFTIsBooked,
                          flightTableID,
                          updateFTRoutesFrom,
                          updateFTRoutesTo,
                          removeFTRoute
                      }: RouteProps) => {

    const handleRemoveFTRoute = () => {
        removeFTRoute(flightTableID, route.id)
    };

    const handleUpdateRouteFrom = () => {
        // updateFTRoutesFrom()
    };

    const handleUpdateRouteTo = () => {
        //updateFTRoutesTo();
    }

    const handleToggleFTIsBooked = (isBookedValue: boolean) => {
        toggleFTIsBooked(flightTableID, route.id, isBookedValue)
    }

    return (
        <>
            <table className={styles.ftTable}>
                <tbody>
                <tr className={styles.ftRow}>
                    <td className={styles.ftCell}>
                        <button onClick={handleRemoveFTRoute}>X</button>
                    </td>
                    <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
                        <UpdateItem currentDate={route.from} callBack={() => 'handleUpdateRouteFrom'}/>
                    </td>
                    <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
                        ➔
                    </td>
                    <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
                        <UpdateItem currentDate={route.to} callBack={() => 'handleUpdateRouteTo'}/>
                    </td>
                    <td className={styles.checkboxContainer}>
                        <label>
                            <CheckBox isDone={route.isBooked} updateCheckBox={handleToggleFTIsBooked}/>
                            {route.isBooked ? ' Booked' : ' Available'}
                        </label>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

