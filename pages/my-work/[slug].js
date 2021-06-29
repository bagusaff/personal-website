import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import { BiArrowBack } from "react-icons/bi";

import Layout from "../../components/layout";
import styled from "styled-components";
const ProjectDetail = ({ htmlString, data }) => {
  const banner = data.thumbnail;
  console.log(banner);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <Layout>
        <Wrapper>
          <Link href="/my-work">
            <Links>
              <BiArrowBack size="1.5rem" />
            </Links>
          </Link>
          <Banner src={banner} width={500} height={300} />
          <Title>{data.title}</Title>
          <Body>{data.type}</Body>
          <Links href={data.link} target="_blank" passHref>
            {data.link}
          </Links>
          <Title>Description</Title>
          <Body>{data.description}</Body>
          <Title>Job Desc</Title>
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
          <Title>Technology Used</Title>
          <Body>{data.technology}</Body>
        </Wrapper>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetaData = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
  const parsedMarkdown = matter(markdownWithMetaData);

  const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default ProjectDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  p,
  ul,
  li {
    font-weight: normal;
    font-size: 1rem;
    color: #64748b;
    line-height: 1.125rem;
  }
  li {
    list-style-type: circle;
    list-style-position: inside;
  }
`;

const Banner = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin: 1rem 0 !important;
`;

const Title = styled.h1`
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: #64748b;
`;

const Links = styled.a`
  font-style: italic;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
  padding-top: 10px;
  color: #64748b;
`;

const Body = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: #64748b;
  line-height: 1.1rem;
  text-align: justify;
`;

const IconWrapper = styled.div`
  display: flex;
`;
