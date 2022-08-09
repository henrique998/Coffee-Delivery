import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: 0;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: none;
    }
`
