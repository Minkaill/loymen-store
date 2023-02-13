import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styles from "./login.module.scss";
import { login } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.auth.data);

  const [user, setUser] = React.useState({
    identifier: "",
    password: "",
  });
  console.log(user);

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    dispatch(login(user));
    reset();
  };

  return (
    <div className={styles.auth}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="email"
          name="identifier"
          value={user.identifier}
          {...register("identifier", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: "Минимум 5 символов",
            },
          })}
          onChange={handleUserChange}
        />
        <div className={styles.error}>
          {errors?.identifier && (
            <p>{errors?.identifier?.message || "Error!"}</p>
          )}
        </div>

        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          {...register("password", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: "Минимум 5 символов",
            },
          })}
          onChange={handleUserChange}
        />
        <div className={styles.error}>
          {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
        </div>
        <button type="submit" disabled={!isValid}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Login;
