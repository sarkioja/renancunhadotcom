import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components"

import * as S from './styled'

import Theme from "styles/theme"
import baseCSS from "styles/baseCSS"
import Header from "components/Header";
import Footer from "components/Footer";

const GlobalStyles = createGlobalStyle`
    ${baseCSS}
`

const Layout = ({ children }) => {
    return (
    <Theme>
        <S.LayoutContainer className="div">
            <GlobalStyles />
            <div className="Layout">
                <Header />
                <main className="Layout__content">
                    {children}
                </main>
                <Footer />
            </div>
        </S.LayoutContainer>
    </Theme>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
