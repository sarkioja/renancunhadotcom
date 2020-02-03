import React from "react";

import * as S from './styled'

import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";

const ProjectCard = ({ category, title, description, thumbnail, uid}) => (
    <S.ProjectCardContainer to={`/work/${uid}`}>
        <S.ProjectCardContent className="ProjectCardContent">
            <S.ProjectCardCategory>
                {category[0].text}
            </S.ProjectCardCategory>
            <S.ProjectCardTitle>
                {title[0].text}
            </S.ProjectCardTitle>
            <S.ProjectCardBlurb>
                {RichText.render(description)}
            </S.ProjectCardBlurb>
            <S.ProjectCardAction className="ProjectCardAction">
                Details <span>&#8594;</span>
            </S.ProjectCardAction>
        </S.ProjectCardContent>
        <S.ProjectCardImageContainer className="ProjectCardImageContainer">
            <img src={thumbnail.url} alt={title[0].text}/>
        </S.ProjectCardImageContainer>
    </S.ProjectCardContainer>
)

ProjectCard.propTypes = {
    category: PropTypes.array.isRequired,
    thumbnail: PropTypes.object.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
}

export default ProjectCard;