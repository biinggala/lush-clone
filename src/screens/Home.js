import styled from "styled-components";
import Navibar from "./components/Navibar";

const Container = styled.div`
  width: 100vh;
  height: 100%;
`;

function Home() {
  return (
    <Container>
      <Navibar />
    </Container>
  );
}

export default Home;
