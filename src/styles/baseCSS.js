import { css } from "styled-components"
import dimensions from 'styles/dimensions';

const baseCSS = css`
    html,
    body,
    #root {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100%;
    }

    body {
        width: 100%;
        margin: 0 auto;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        line-height: 1.5;
        color: ${props => props.theme.colors.grey900};
        -webkit-font-smoothing: antialiased;

        @supports (font-variation-settings: normal) {
            html {
                font-family: 'Inter var', sans-serif;
            }
        }

        @media(max-width: ${dimensions.maxwidthMobile}px) {
            font-size: 14px;
        }


        * {
            box-sizing: border-box;

            &::selection {
                background: ${props => props.theme.colors.orange500};
                color: white;
            }
        }
    }
    h1 {
        font-size: 2.8em;
        line-height: 1.45;
        font-weight: 800;

        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 2.25em;
        }

        @media(max-width:${dimensions.maxwidthMobile}px) {
            font-size: 2em;
        }
    }

    h2 {
        margin-bottom: 2rem;
        font-size: 1.9em;
        line-height: 1.1;
    }

    h3 {
        line-height: 1.2;
        font-size: 1.5em;
    }

    h5 {
        margin-bottom: 1.45rem;
        font-weight: 500;
        line-height: 20px;
        font-size: 0.95em;
    }

    h6 {
        font-size: 0.9em;
        font-weight: 500;
        margin: 0;
    }

    p {
        line-height: 1.9;
    }

    a {
        &:hover {
            cursor: pointer;
        }
    }

    /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
    #___gatsby,
    div[role="group"][tabindex] {
        height: 100%;
        min-height: 100% !important;
    }
`

export default baseCSS;