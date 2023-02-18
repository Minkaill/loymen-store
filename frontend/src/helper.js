import { useNavigate } from "react-router-dom";
import React from "react";

export const storeUser = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      userId: data.user.id,
      jwt: data.jwt,
    })
  );
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
};

export const Protector = ({ Component }) => {
  const navigate = useNavigate();

  const { jwt } = userData();

  React.useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, [navigate, jwt]);
  return Component;
};
