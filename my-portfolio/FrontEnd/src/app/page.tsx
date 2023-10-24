"use client";

import Image from "next/image";
import logo from "../../img/logo.jpg";
import styled from "styled-components";

const Container = styled.body`
  background-color: #2c3333;
  padding: 0;
  margin: 0;
`;
const Header = styled.nav`
  background-color: #395b64;
  box-shadow: 2px 2px 5px #e7f6f2;
  display: flex;
  justify-content: center;
`;
const Nav = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin: 5px 0;
`;
const Divlogo = styled.h1`
  color: white;
  font-size: 12px;
`;
const Ul = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0 10px;
`;
const Divlink = styled.li`
  display: flex;
  align-items: center;
`;
const Li = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 50px;
`;
const A = styled.a`
  color: white;
  margin: 0 10px 0 0;
  text-decoration: none;
`;
const logoStyle = {
  borderRadius: "50%",
  width: "50px",
  height: "50px",
};
const imageStyle = {
  padding: "10px",
  margin: "5px",
};
const Imagelink = styled.img`
  width: 30px;
  &:hover {
    filter: drop-shadow(2px 4px 6px black);
  }
`;
export default function header() {
  return (
    <Container>
      <Header>
        <Nav>
          <Image src={logo} style={logoStyle} alt="Avatar" />

          <Divlink>
            <Ul>
              <Li>
                <A href="">Home</A>
              </Li>
              <Li>
                <A href="">About</A>
              </Li>
              <Li>
                <A href="">Project</A>
              </Li>
              <Li>
                <A href="">Contact My</A>
              </Li>
            </Ul>
          </Divlink>
          <Divlink>
            <A href="">
              <Imagelink
                src="/youtube.svg"
                alt="youtube Logo"
                width={100}
                height={24}
              />
            </A>
            <A href="">
              <Imagelink
                src="/instagram.svg"
                alt="instagram Logo"
                width={100}
                height={24}
              />
            </A>
            <A href="">
              <Imagelink
                src="/linkedin.svg"
                alt="linkedin Logo"
                width={100}
                height={24}
              />
            </A>
            <A href="">
              <Imagelink
                src="/github.svg"
                alt="github Logo"
                width={100}
                height={24}
              />
            </A>
          </Divlink>
        </Nav>
      </Header>
    </Container>
  );
}
