import styled from "styled-components";
const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Link>About Me</Link>
        <Link>Resume</Link>
        <Link>My Works</Link>
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
  padding-bottom: 1rem;
  gap: 1rem;
  justify-content: flex-start;
  grid-auto-columns: min-content;
  width: 800px;
`;

const Link = styled.a`
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  color: #64748b;
  &:hover {
    color: #1a202e;
    text-decoration: underline #475569;
  }
`;
