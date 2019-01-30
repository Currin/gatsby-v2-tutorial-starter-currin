import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'react-emotion';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';
import logo from '../../static/logo/header-logo.jpg';
import theme from '../../config/theme';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  width: 100px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

// adding in Image Styling for Nav Logo

const Image = styled.div`
border-radius: ${props => props.theme.borderRadius.default};
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  width: 70px;
`;



const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">   
    <Image>
      <img src={logo} alt="Gatsby Logo"/>
</Image>
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;

NavBar.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};