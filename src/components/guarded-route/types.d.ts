import React from "react";
import { TUserLoginState } from "../../store/reducers/user.reducer";

export interface GuardedRouteProps {
  children: JSX.Element | any;
  userLoginData: TUserLoginState
}