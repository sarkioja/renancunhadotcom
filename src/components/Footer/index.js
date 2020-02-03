import React from "react";
import { Link } from "gatsby";

import * as S from './styled'

import Logo from "components/_ui/Logo";
import spooch from "images/oscar-icon.png"

const Footer = () => (
    <S.FooterContainer>
        <Link to="/">
            <Logo />
        </Link>
        <S.FooterAuthor href="https://marguerite.io">
            © 2019 — Designed & developed by Marguerite Roth
            <S.FooterSpooch className="FooterSpooch" src={spooch} />
        </S.FooterAuthor>
    </S.FooterContainer>
)

export default Footer;
