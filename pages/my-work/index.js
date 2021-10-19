import React, { useState } from "react";
import styled from "styled-components";
import {
  wrapper,
  filter,
  text,
  list,
} from "../../components/Animations/my-work.animation";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import Card from "../../components/Card";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
const filterData = [
  {
    id: 1,
    filter: "",
    displayText: "All",
  },
  {
    id: 2,
    filter: "Web Apps",
    displayText: "Web Apps",
  },
  {
    id: 3,
    filter: "Mobile Apps",
    displayText: "Mobile Apps",
  },
  {
    id: 4,
    filter: "Landing Page",
    displayText: "Landing Page",
  },
];
const MyWork = ({ posts }) => {
  const [category, setCategory] = useState("");
  return (
    <>
      <Head>
        <title>My work !</title>
        <meta title="description" content="Bagus Amrullah's Works" />
      </Head>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Wrapper initial="hidden" animate="show" variants={wrapper}>
            <Title>My Works</Title>
            <FilterWrapper variants={filter}>
              {filterData.map((data) => (
                <FilterText
                  key={data.id}
                  variants={text}
                  onClick={() => {
                    setCategory(data.filter);
                  }}
                  className={category == data.filter ? "active" : ""}
                >
                  {data.displayText}
                </FilterText>
              ))}
            </FilterWrapper>
            <CardWrapper variants={list}>
              {posts
                .filter((post) => post.frontmatter.type.includes(category))
                .map((post, index) => (
                  <Card key={index} post={post} />
                ))}
            </CardWrapper>
          </Wrapper>
        </motion.div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default MyWork;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 29px;
  color: #1a202e;
  vertical-align: middle;
  margin-bottom: 1rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const FilterWrapper = styled(motion.div)`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(4, max-content);

  @media (max-width: 320px) {
    grid-template-columns: repeat(2, max-content);
  }
`;

const FilterText = styled(motion.h2)`
  font-weight: 600;
  font-size: 0.875rem;
  color: #64748b;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    color: #1a202e;
  }
  &.active {
    color: #1a202e;
  }
  @media (max-width: 576px) {
    font-size: 0.75rem;
    padding-bottom: 0.5rem;
  }
`;

const CardWrapper = styled(motion.div)`
  display: grid;
  margin-top: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(3, max-content);
  @media (min-width: 800px) {
    min-width: 750px;
    min-height: 350px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, max-content);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, max-content);
    justify-content: center;
  }
`;
