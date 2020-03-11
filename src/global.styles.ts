import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'Open Sans Condensed', 'Roboto', serif;
        height: 100vh;
        min-width: 100%;
    }

    .page-container {
        padding: 0 1rem;
        max-width: 1600px;
        margin: 0 auto;

        @media (max-width: 350px) {
            padding: 0 0;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }
`;
