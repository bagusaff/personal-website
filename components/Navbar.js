import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <Link href="/" passHref>
          <Links className={router.pathname == "/" ? "active" : ""}>
            About Me
          </Links>
        </Link>
        <Link href="/resume" passHref>
          <Links className={router.pathname == "/resume" ? "active" : ""}>
            Resume
          </Links>
        </Link>
        <Link href="/my-work" passHref>
          <Links className={router.pathname == "/my-work" ? "active" : ""}>
            My Works
          </Links>
        </Link>
      </Wrapper>
    </>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  padding-top: 3rem;
  padding-bottom: 2rem;
  gap: 1rem;
  margin: 0 1rem;
  align-self: center;
  justify-content: flex-start;
  grid-auto-columns: min-content;
  max-width: 800px;
  width: 100%;
  @media (max-width: 768px) {
    gap: 0.875rem;
    justify-content: center;
  }
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
  @media (max-width: 576px) {
    font-size: 0.875rem;
  }
  &.active {
    color: #1a202e;
  }
`;
