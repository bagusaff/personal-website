import styled from "styled-components";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Link href="/">
          <Links>About Me</Links>
        </Link>
        <Link href="/resume">
          <Links>Resume</Links>
        </Link>
        <Link href="/my-work">
          <Links>My Works</Links>
        </Link>
      </Wrapper>
    </>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: auto;
  padding-top: 3rem;
  padding-bottom: 2rem;
  gap: 1rem;
  justify-content: flex-start;
  grid-auto-columns: min-content;
  width: 800px;
`;

const Links = styled.a`
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  color: #64748b;
  &:hover {
    color: #1a202e;
    text-decoration: underline #475569;
  }
`;
