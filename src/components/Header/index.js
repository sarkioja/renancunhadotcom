import React from "react";
import { Link } from "gatsby";

import * as S from './styled'
import Logo from "components/_ui/Logo";

const Header = () => (
    <S.HeaderContainer>
        <S.HeaderContent>
            <Link to="/">
                <Logo/>
            </Link>
            <S.HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/work">
                    Work
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    Blog
                </Link>
            </S.HeaderLinks>
        </S.HeaderContent>
    </S.HeaderContainer>
)

export default Header;