import { Container, Main } from "./App";
import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}

export default App;
