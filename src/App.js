import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import CallbackGoogle from "./api/CallbackGoogle";
import { useState } from "react";

const Style = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  return (
    <Style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Auth />}></Route>
          <Route
            path="/auth/google/callback"
            element={<CallbackGoogle />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Style>
  );
}

export default App;
