import React from "react";
import Moment from 'react-moment';

import * as S from './styled'

import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";

const PostCard = ({ author, category, date, title, description, uid}) => (
    <S.PostCardContainer className="BlogPostCard" to={`/blog/${uid}`}>
        <S.PostCategory>
            {category[0].text}
        </S.PostCategory>
        <S.PostTitle>
            {title[0].text}
        </S.PostTitle>
        <S.PostDescription>
            {RichText.render(description)}
        </S.PostDescription>
        <S.PostCardAction className="PostCardAction">
            Read more <span>&#8594;</span>
        </S.PostCardAction>
        <S.PostMetas>
            <S.PostAuthor>
                {author}
            </S.PostAuthor>
            <S.PostDate>
                <Moment format="DD/MMMM/YYYY">{date}</Moment>
            </S.PostDate>
        </S.PostMetas>
    </S.PostCardContainer>
)

PostCard.propTypes = {
    author: PropTypes.string.isRequired,
    category: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
}

export default PostCard;