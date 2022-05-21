import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import FormLogin from "./features/login-signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { ICombineState } from "./store/reducers";

export function App() {
  const userData = useSelector(
    (state: ICombineState) => state.userLogin,
    shallowEqual
  );

  useEffect(() => {
    if (userData && userData.token !== "" && userData.refreshToken !== "") {
      window.alert(`${JSON.stringify(userData)}`);
    }
  }, [userData]);

  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLogin />} />
          <Route path="/test" element={<>Test</>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
