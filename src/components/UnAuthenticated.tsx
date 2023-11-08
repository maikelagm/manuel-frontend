import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

type Props = {
  children: JSX.Element;
};

const UnAuthenticated: React.FC<Props> = ({ children }) => {
  const { signed } = useAuth();

  return !signed ? children : <Navigate to={"/"} replace />;
};

export default UnAuthenticated;
