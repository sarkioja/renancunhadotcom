import React from "react";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";

import styled from "styled-components";

import Seo from 'components/Seo'
import Button from "components/Button";
import About from "components/About";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";

const Hero = styled.div`
    padding-top: 2.5em;
    padding-bottom: 3em;
    margin-bottom: 6em;
    max-width: 830px;

    @media(max-width:${props => props.theme.dimensions.maxwidthMobile}px) {
        margin-bottom: 3em;
    }

    h1 {
        margin-bottom: 1em;

        a {
            text-decoration: none;
            transition: all 100ms ease-in-out;

            &:nth-of-type(1) { color: ${props => props.theme.colors.blue500}; }
            &:nth-of-type(2) { color: ${props => props.theme.colors.orange500}; }
            &:nth-of-type(3) { color: ${props => props.theme.colors.purple500}; }
            &:nth-of-type(4) { color: ${props => props.theme.colors.green500}; }
            &:nth-of-type(5) { color: ${props => props.theme.colors.teal500}; }

            &:hover {
                cursor: pointer;
                transition: all 100ms ease-in-out;

                &:nth-of-type(1) { color: ${props => props.theme.colors.blue600};    background-color: ${props => props.theme.colors.blue200};}
                &:nth-of-type(2) { color: ${props => props.theme.colors.orange600};  background-color: ${props => props.theme.colors.orange200};}
                &:nth-of-type(3) { color: ${props => props.theme.colors.purple600};  background-color: ${props => props.theme.colors.purple200};}
                &:nth-of-type(4) { color: ${props => props.theme.colors.green600};   background-color: ${props => props.theme.colors.green200};}
                &:nth-of-type(5) { color: ${props => props.theme.colors.teal600};    background-color: ${props => props.theme.colors.teal200};}

            }
        }
    }
`

const Section = styled.div`
    margin-bottom: 10em;
    display: flex;
    flex-direction: column;

    @media(max-width:${props => props.theme.dimensions.maxwidthTablet}px) {
        margin-bottom: 4em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const WorkAction = styled(Link)`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    margin-left: auto;

    @media(max-width:${props => props.theme.dimensions.maxwidthTablet}px) {
       margin: 0 auto;
    }

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }

    &:hover {
        color: ${props => props.theme.colors.blue500};
        transition: all 150ms ease-in-out;

        span {
            transform: translateX(0px);
            opacity: 1;
            transition: transform 150ms ease-in-out;
        }
    }
`

const Index = ({ data }) => {
    //Required check for no data being returned
    const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
    const home = doc.node;
    const projects = data.prismic.allProjects.edges;

    if (!doc || !projects) return null

    return (
        <Layout>
            <Seo description={'Opa!'} title={'Página Inicial'} />

            <Hero>
                <>
                    {RichText.render(home.hero_title)}
                </>
                <a href={home.hero_button_link.url}
                    target="_blank" rel="noopener noreferrer">
                    <Button>
                        {RichText.render(home.hero_button_text)}
                    </Button>
                </a>
            </Hero>
            <Section>
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        category={project.node.project_category}
                        title={project.node.project_title}
                        description={project.node.project_preview_description}
                        thumbnail={project.node.project_preview_thumbnail}
                        uid={project.node._meta.uid}
                    />
                ))}
                <WorkAction to={"/work"}>
                    See more work <span>&#8594;</span>
                </WorkAction>
            </Section>
            <Section>
                {RichText.render(home.about_title)}
                <About
                    bio={home.about_bio}
                    socialLinks={home.about_links}
                />
            </Section>
        </Layout>
    )
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_title
                        hero_button_text
                        hero_button_link {
                            ... on PRISMIC__ExternalLink {
                                _linkType
                                url
                            }
                        }
                        content
                        about_title
                        about_bio
                        about_links {
                            about_link
                        }
                    }
                }
            }
            allProjects {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        _meta {
                            uid
                        }
                    }
                }
            }
        }
    }
`

export default Index