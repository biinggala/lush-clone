import { Link } from "react-router-dom";
import styled from "styled-components";

const AllMenu = styled.div`
  background-color: #333333;
  position: absolute;
  left: 0px;
  top: 100px;
  height: max-content;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  .arrow {
    width: 15px;
    height: 15px;
    background-color: #333333;
    position: relative;
    left: 202px;
    top: -7.5px;
    transform: rotate(45deg);
  }
`;

const Column = styled.div`
  display: flex;
  float: left;
  flex-direction: column;
  margin-right: 35px;
  line-height: 40px;
  margin-top: 45px;
  a {
    font-size: 13px;
    color: lightgrey;
    h4 {
      font-size: 18px;
      color: white;
      font-weight: bold;
    }
  }
`;

function AllNaviMenu() {
  return (
    <AllMenu>
      <div className="arrow"></div>
      <Column>
        <Link to="/">
          <h4>베스트</h4>
        </Link>
        <Link to="/">주간 베스트</Link>
        <Link to="/">별 다섯개 후기</Link>
        <Link to="/">온라인 전용</Link>
        <Link to="/">국내제조</Link>
        <Link to="/">네이키드</Link>
        <Link to="/">선물 고수 되기</Link>
      </Column>
      <Column>
        <Link to="/">
          <h4>신제품</h4>
        </Link>
        <Link to="/">버블 바 큐레이션</Link>
        <Link to="/">비건 메이크업</Link>
        <Link to="/">기프트</Link>
        <Link to="/">할로윈</Link>
        <Link to="/">크리스마스</Link>
      </Column>
      <Column>
        <Link to="/">
          <h4>배쓰</h4>
        </Link>
        <Link to="/">배쓰 밤</Link>
        <Link to="/">버블 바</Link>
        <Link to="/">배쓰 오일</Link>
        <Link to="/">펀</Link>
      </Column>
      <Column>
        <Link to="/">
          <h4>샤워</h4>
        </Link>
        <Link to="/products">솝</Link>
        <Link to="/">샤워 젤&젤리</Link>
        <Link to="/">보디 컨디셔너</Link>
        <Link to="/">샤워 밤</Link>
        <Link to="/">샤워 오일</Link>
        <Link to="/">스크럽&버터</Link>
        <Link to="/">펀</Link>
      </Column>
      <Column>
        <Link to="/">
          <h4>보디</h4>
        </Link>
        <Link to="/">클렌저</Link>
        <Link to="/">로션</Link>
        <Link to="/">핸드 앤 풋</Link>
        <Link to="/">마사지 바</Link>
        <Link to="/">더스팅 파우더</Link>
        <Link to="/">쉐이빙 크림</Link>
      </Column>
      <Column>
        <Link to="/">
          <h4>페이스</h4>
        </Link>
        <Link to="/">아</Link>
        <Link to="/">너무</Link>
        <Link to="/">많아</Link>
        <Link to="/">이거</Link>
        <Link to="/">맞아</Link>
        <Link to="/">??</Link>
      </Column>
      <Column>
        <Link to="/">
          <h4>헤어</h4>
        </Link>
        <Link to="/">맛있는</Link>
        <Link to="/">짜장면</Link>
        <Link to="/">원해요</Link>
      </Column>
    </AllMenu>
  );
}

export default AllNaviMenu;
