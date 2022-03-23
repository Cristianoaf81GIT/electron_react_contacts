import React from "react";
import FormLogin from "./features/login-signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";

export function App() {
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
