import React from 'react';
import { Link, graphql } from 'gatsby';
import { RichText } from "prismic-reactjs";

import styled from "styled-components";

import Seo from "components/Seo";
import Layout from "components/Layout";
import Button from "components/Button";

const ProjectHeroContainer = styled.div`
    background: ${props => props.theme.colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    padding-top: 2.25em;
    margin-bottom: 3.5em;

    img {
        max-width: 600px;
    }
`

const ProjectTitle = styled.div`
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
`

const ProjectBody = styled.div`
    max-width: 550px;
    margin: 0 auto;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }
`

const WorkLink = styled(Link)`
    margin-top: 3em;
    display: block;
    text-align: center;
`


const Project = ({ data }) => {
    const project = data.prismic.allProjects.edges[0].node;

    return (
        <Layout>
            <Seo description={project.project_preview_description[0].text} title={project.project_title[0].text} />
            <ProjectTitle>
                {RichText.render(project.project_title)}
            </ProjectTitle>
            {project.project_hero_image && (
                <ProjectHeroContainer>
                    <img src={project.project_hero_image.url} alt="bees" />
                </ProjectHeroContainer>
            )}
            <ProjectBody>
                {RichText.render(project.project_description)}
                <WorkLink to={"/work"}>
                    <Button className="Button--secondary">
                        See other work
                    </Button>
                </WorkLink>
            </ProjectBody>
        </Layout>
    )
}

export const query = graphql`
    query ProjectQuery($uid: String) {
        prismic {
            allProjects(uid: $uid) {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        project_hero_image
                        project_description
                        _meta {
                            uid
                        }
                    }
                }
            }
        }
    }
`

export default Project