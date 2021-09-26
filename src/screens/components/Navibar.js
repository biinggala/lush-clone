import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../lushLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBasket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AllNaviMenu from "./AllMenu";

const NaviContainer = styled.div`
  background-color: black;
  height: 100px;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  color: white;
`;

const NaviContents = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Category = styled.ul`
  margin-left: 240px;
  width: 100%;
  height: 100%;
  inline-size: max-content;
`;

const Menu = styled.li`
  display: flex;
  float: left;
  justify-content: center;
  padding: 0 35px 0 35px;
  line-height: 100px;
  word-spacing: -1px;
  letter-spacing: 2px;
  font-size: 15px;
  font-family: "notokrR", Malgun Gothic, "맑은 고딕", AppleGothic, Dotum, "돋움",
    sans-serif;
`;

const UserMenu = styled.ul`
  margin-left: 80px;
  width: 148px;
  display: flex;
  justify-content: space-between;
`;

function Navibar(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <NaviContainer>
      <NaviContents>
        <Link to="/">
          <img src={logo} alt="lush logo" height="30px" width="90px" />
        </Link>
        <Category>
          <Menu
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="/products">제품</Link>
            {isHovered ? <AllNaviMenu /> : ""}
          </Menu>
          <Menu>
            <Link to="/">러쉬 소개</Link>
          </Menu>
          <Menu>매장 안내</Menu>
          <Menu>스파</Menu>
          <Menu>이벤트</Menu>
        </Category>
        <UserMenu>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faShoppingBasket} />
          <FontAwesomeIcon icon={faUserCircle} />
        </UserMenu>
      </NaviContents>
    </NaviContainer>
  );
}

export default Navibar;
