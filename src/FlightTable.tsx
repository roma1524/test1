import {Route} from "./Route";
import {Button} from "./components/Button";
import {AddNewItem} from "./components/AddNewItem";
import {UpdateItem} from "./components/UpdateItem";
// @ts-ignore
import styles from "./App2.module.css"

export type RouteType = {
    id: string;
    from: string;
    to: string;
    isBooked: boolean;
}

export type FlightProps = {
    currentDate: string;
    flightTableID: string;
    routes: RouteType[];
    toggleFTIsBooked: (flightID: string, routeID: string, isBooked: boolean) => void;
    removeFT: (flightID: string) => void;
    updateFTDate: (flightID: string, newDate: string) => void;
    updateFTRoutesFrom: (flightID: string, routeID: string, newFrom: string) => void;
    updateFTRoutesTo: (flightID: string, routeID: string, newTo: string) => void;
    removeFTRoute: (flightTableID: string, routeID: string) => void
    addNewFTRoute: (flightTableID: string, from: string, to: string) => void
}

export const FlightTable = ({
                                currentDate,
                                flightTableID,
                                routes,
                                toggleFTIsBooked,
                                removeFT,
                                updateFTDate,
                                updateFTRoutesFrom,
                                updateFTRoutesTo,
                                removeFTRoute,
                                addNewFTRoute,
                            }: FlightProps) => {


    const mappedRoutes = routes.map((route) => (
        <Route
            key={route.id}
            route={route}
            toggleFTIsBooked={toggleFTIsBooked}
            flightTableID={flightTableID}
            updateFTRoutesFrom={updateFTRoutesFrom}
            updateFTRoutesTo={updateFTRoutesTo}
            removeFTRoute={removeFTRoute}
        />
    ));

    const addNewFTRouteHandler = (from: string, to: string) => {
        addNewFTRoute(flightTableID, from, to)
    }

    const removeFlightTableHandler = () => removeFT(flightTableID);

    const updateFTDateHandler = (editedDate: string) => {
        updateFTDate(flightTableID, editedDate);
    };


    return (
        <div className={styles.ftContainer}>
            <Button title="Remove FlightTable" onClick={removeFlightTableHandler}/>
            <h2 className={styles.headerFT}>FlightTable ID: </h2>
            <h2 className={styles.dateHeader}>
                Date: <UpdateItem prevValue={currentDate} callBack={updateFTDateHandler}/>
            </h2>
            <div className={styles.addNewRouteContainer}>
                <AddNewItem
                    onClick={addNewFTRouteHandler}
                    flightTableID={flightTableID}
                    title={"Add New Route"}
                />
            </div>
            {mappedRoutes}
        </div>
    );
};


