import React from "react";
import { graphql } from "gatsby";

import styled from "styled-components";

import Seo from "components/Seo"
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";

const WorkTitle = styled.h1`
    margin-bottom: 1em;
`

const Work = ({ data }) => {
    const projects = data.prismic.allProjects.edges;
    if (!projects) return null;

    return (
    <Layout>
        <Seo title="Projetos" description="Alguns projetos criados ao longo dos anos" />
        <WorkTitle>
            Projetos
        </WorkTitle>
        <>
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
        </>
    </Layout>
    )
};

export const query = graphql`
    {
        prismic {
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

export default Work
