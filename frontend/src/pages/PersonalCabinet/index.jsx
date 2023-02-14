import React from "react";
import { userData } from "../../helper";
import { Link, useNavigate } from "react-router-dom";

const PersonalCabinet = () => {
  const { username, jwt } = userData();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, [jwt]);

  const handle = () => {
    confirm("Ты точно хотите выйти из аккаунта?");
  };

  return (
    <div>
      {username}

      <Link onClick={handle} to="/logout">
        Выйти из аккаунта
      </Link>
    </div>
  );
};

export default PersonalCabinet;
