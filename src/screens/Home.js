import styled from "styled-components";
import Navibar from "./components/Navibar";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const MainPage = styled.div`
  padding-top: 100px;
  text-align: center;
`;

const MainImage = styled.div`
  height: 500px;
  width: 100%;
  background: url("https://lush.co.kr/data/editor/goods/200623/soap01_125448.jpg")
    50% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h1 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 26px;
    font-family: "notokrL";
    letter-spacing: 0.2em;
    text-indent: 0.2em;
    font-weight: 300;
  }
`;
function Home() {
  return (
    <Container>
      <Navibar />
      <MainPage>
        <MainImage>
          <h1>솝</h1>
          <p>향기를 머금은 거품으로 구석구석 꼼꼼하게</p>
        </MainImage>
      </MainPage>
    </Container>
  );
}

export default Home;
