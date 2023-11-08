import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";

type Props = {
  children: JSX.Element;
};

const Protected: React.FC<Props> = ({ children }) => {
  const { signed } = useAuth();
  const location = useLocation().pathname;

  return signed ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default Protected;
