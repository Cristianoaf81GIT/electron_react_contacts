import React from "react";
import { Navigate } from "react-router-dom";
import { GuardedRouteProps } from "./types";

export function GuardedRoute({
  children: Component,
  userLoginData: userData,
}: GuardedRouteProps): JSX.Element {
  if (userData && userData.token && userData.token.length > 0) {
    return <Component />;
  }

  return <Navigate to="/" />;
}
