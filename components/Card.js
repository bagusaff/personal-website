import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Card = ({ post }) => {
  const cards = {
    hidden: {
      opacity: 0,
      scale: 1.3,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <Link href={`/my-work/${post.slug}`} passHref>
      <Wrapper variants={cards} exit={cards.hidden}>
        <Banner src={post.frontmatter.thumbnail} width={200} height={140} />
        <HoverCaption>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.type}</p>
          <h2>Click to see!</h2>
        </HoverCaption>
      </Wrapper>
    </Link>
  );
};

export default Card;

const Wrapper = styled(motion.div)`
  width: 225px;
  height: 150px;
  background: #ffffff;
  box-shadow: 2px 8px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled(Image)`
  object-fit: contain;
  display: block;
`;

const HoverCaption = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 147, 147, 0.7);
  border: 0.5px solid #ffffff;
  position: absolute;
  opacity: 0;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  flex-direction: column;
  padding: 1.5rem 1rem;
  transition: all 300ms ease-in-out;
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  -ms-transition: all 300ms ease-in-out;
  h1 {
    font-weight: 600;
    font-size: 1.125rem;
    color: #ffffff;
    margin-bottom: 5px;
  }
  h2 {
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
    text-align: center;
    margin-top: auto;
  }
  p {
    font-weight: normal;
    font-size: 0.625rem;
    color: #ffffff;
    color: #fff;
  }

  &:hover {
    opacity: 1;
  }
`;
