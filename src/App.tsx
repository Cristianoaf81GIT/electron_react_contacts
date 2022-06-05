import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import FormLogin from "./features/login-signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { ICombineState } from "./store/reducers";
import { GuardedRoute } from "./components/guarded-route";

export function App() {
  const userData = useSelector(
    (state: ICombineState) => state.userLogin,
    shallowEqual
  );

  function Test(): JSX.Element {
    return <>test</>;
  }

  return (
    <React.Fragment>
      <Header userLoginData={userData} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLogin />} />
          <Route
            path="/contact"
            element={
              <GuardedRoute userLoginData={userData}>{Test}</GuardedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
