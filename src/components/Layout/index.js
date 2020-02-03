import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import * as S from './styled'

import { Global } from "@emotion/core";
import globalStyles from 'styles/global';
import typeStyles from 'styles/typography';
import 'styles/fonts.scss';

import Footer from "components/Footer";
import Header from "components/Header";


const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <S.LayoutContainer className="div">
                <Global styles={[globalStyles, typeStyles]} />
                <div className="Layout">
                    <Header />
                    <main className="Layout__content">
                        {children}
                    </main>
                    <Footer />
                </div>
            </S.LayoutContainer>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
