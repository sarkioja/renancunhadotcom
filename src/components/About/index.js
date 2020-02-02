import React from "react";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";

import * as S from "./styled"

import Button from "components/_ui/Button";

const About = ({ bio, socialLinks }) => (
    <S.AboutContainer>
        <S.AboutLinkContainer>
            {socialLinks.map((social, i) => (
                <S.AboutLink
                    key={i}
                    href={social.about_link[0].spans[0].data.url}
                    target="_blank" rel="noopener noreferrer">
                    {social.about_link[0].text}
                    <span>&#8594;</span>
                </S.AboutLink>
            ))}
        </S.AboutLinkContainer>
        <S.AboutBio>
            {RichText.render(bio)}
        </S.AboutBio>
        <S.AboutActions>
            <a href="mailto:marguerite.roth@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button className="Button--secondary">
                    Email me
                </Button>
            </a>
        </S.AboutActions>
    </S.AboutContainer>
)

export default About;

About.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};