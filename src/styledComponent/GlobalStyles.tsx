import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* border: 1px solid blue; */
    }


body {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: center;
    align-items: center;

    background: rgb(245, 245, 245);
}
`