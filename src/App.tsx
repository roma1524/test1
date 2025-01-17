import React, {useState} from "react";
// @ts-ignore
import styles from "./App2.module.css"
import './App.css';
import {v1} from "uuid";
import {FlightTable} from "./FlightTable";
import {AddNewItem} from "./components/AddNewItem";


function App() {
    //TODO: ТРИ задания от простого к сложному:
    //TODO: 1. Не работает кнопка удаления маршрута (routes) в App ничего править не нужно -ok
    //TODO: 2. Не работает ЧЕКБОКС -ошибки даже в APP! Вместо того чтобы передавать значение,в функции перещелкивается противоположное! -ok
    //TODO: 3. Обновление МАРШРУТА И ДАТЫ научились работать без функции в App, это нормально? Но в App ничего править не нужно
    //TODO: 3. Вначале почини ДАТУ, а потом убедись, что и ОБНОВЛЕНИЕ МАРШРУТА "починилось" каким-то волшебным образом, но так ли это?


    const [flightTables, setFlightTables] = useState([
        {
            date: '2024-04-20',
            flightTableID: v1(),
            routes: [
                {id: v1(), from: "Berlin", to: "Tokyo", isBooked: true},
                {id: v1(), from: "Amsterdam", to: "Beijing", isBooked: true},
                {id: v1(), from: "Paris", to: "Seoul", isBooked: false}
            ]
        },
        {
            date: '2024-05-15',
            flightTableID: v1(),
            routes: [
                {id: v1(), from: "Sydney", to: "Los Angeles", isBooked: true},
                {id: v1(), from: "Melbourne", to: "San Francisco", isBooked: false},
                {id: v1(), from: "Brisbane", to: "Vancouver", isBooked: false}
            ]
        },
        {
            date: '2024-06-10',
            flightTableID: v1(),
            routes: [
                {id: v1(), from: "London", to: "New York", isBooked: true},
                {id: v1(), from: "Madrid", to: "Miami", isBooked: false},
                {id: v1(), from: "Rome", to: "Toronto", isBooked: true}
            ]
        }
    ]);

    const addNewFTRoute = (flightTableID: string, from: string, to: string) => {
        const newRoute = {id: v1(), from, to, isBooked: true};
        setFlightTables(prevState =>
            prevState.map(table =>
                table.flightTableID === flightTableID
                    ? {...table, routes: [...table.routes, newRoute]}
                    : table
            )
        );
    };

    const removeFTRoute = (flightTableID: string, routeID: string) => {
        setFlightTables(flightTables.map(flightTable =>
            flightTable.flightTableID === flightTableID
                ? {
                    ...flightTable,
                    routes: flightTable.routes.filter(route => route.id !== routeID)
                }
                : flightTable
        ));
    };

    const toggleFTIsBooked = (flightTableID: string, routeID: string) => {
        setFlightTables(flightTables.map(ft =>
            ft.flightTableID === flightTableID ? {
                    ...ft,
                    routes: ft.routes.map(route =>
                        route.id === routeID ? {...route, isBooked: !route.isBooked} : route
                    )
                }
                : ft
        ));
    };

    const addNewFT = (from: string, to: string) => {
        const newFlightTable = {
            date: new Date().toISOString().split('T')[0], //установит текущую дату для нового flight table
            flightTableID: v1(),
            routes: [
                {id: v1(), from, to, isBooked: false}
            ]
        };
        setFlightTables([...flightTables, newFlightTable]);
    };

    const removeFT = (flightTableID: string) => {
        setFlightTables(flightTables.filter(ft => ft.flightTableID !== flightTableID));
    };

    const updateFTDate = (flightTableID: string, newDate: string) => {
        setFlightTables(flightTables.map(ft =>
            ft.flightTableID === flightTableID ? {...ft, date: newDate} : ft
        ));
    };

    const updateFTRoutesFrom = (flightTableID: string, routeID: string, newFrom: string) => {
        setFlightTables(flightTables.map(ft =>
            ft.flightTableID === flightTableID ? {
                ...ft,
                routes: ft.routes.map(route =>
                    route.id === routeID ? {...route, from: newFrom} : route
                )
            } : ft
        ));
    };

    const updateFTRoutesTo = (flightTableID: string, routeID: string, newTo: string) => {
        setFlightTables(flightTables.map(ft =>
            ft.flightTableID === flightTableID ? {
                ...ft,
                routes: ft.routes.map(route =>
                    route.id === routeID ? {...route, to: newTo} : route
                )
            } : ft
        ));
    };

    return (
        <>
            <header className={styles.header}>
                <AddNewItem
                    title={"Add New FlightTable"}
                    onClick={addNewFT}
                />
            </header>
            <div className={styles.appContainer}>
                {flightTables.map(el => {
                    return (
                        <FlightTable
                            key={el.flightTableID}
                            flightTableID={el.flightTableID}
                            date={el.date}
                            routes={el.routes}
                            toggleFTIsBooked={toggleFTIsBooked}
                            removeFT={removeFT}
                            updateFTDate={updateFTDate}
                            updateFTRoutesFrom={updateFTRoutesFrom}
                            updateFTRoutesTo={updateFTRoutesTo}
                            removeFTRoute={removeFTRoute}
                            addNewFTRoute={addNewFTRoute}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default App;