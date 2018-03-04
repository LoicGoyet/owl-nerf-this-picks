import React from "react"
import styled, { injectGlobal } from 'styled-components'

import industryMediumWoff from "../../../assets/fonts/industry-medium-webfont.woff"
import industryMediumWoff2 from "../../../assets/fonts/industry-medium-webfont.woff2"
import industryBoldWoff from "../../../assets/fonts/industry-bold-webfont.woff"
import industryBoldWoff2 from "../../../assets/fonts/industry-bold-webfont.woff2"


injectGlobal`
    @font-face {
        font-family: 'Industry';
        src: url('${industryMediumWoff2}') format("woff2"),
             url('${industryMediumWoff}') format("font-woff");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Industry';
        src: url('${industryBoldWoff2}') format("woff2"),
             url('${industryBoldWoff}') format("font-woff");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }


    html {
        font-family: "Industry", Helvetica Neue, Helvetica, Arial, sans-serif;
        background-color: rgb(20, 10, 67);
        color: white;
    }

    body {
        margin: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;

export default ({children}) => <main>{children}</main>
