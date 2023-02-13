import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../../helper";
import { regist } from "../../redux/slice/authSlice";
import styles from "./register.module.scss";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jwt } = userData();

  React.useEffect(() => {
    if (jwt) navigate("/login");
    if (!jwt) navigate("/register");
  }, [jwt]);

  const [user, setUser] = React.useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  console.log(user);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async () => {
    const request = await dispatch(regist(user));
    console.log(request);
    if (!request.payload.jwt) {
      alert("Не удалось зарегистрироваться!");
    }
    reset();
  };

  return (
    <div className={styles.auth}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
          {...register("username", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: "Минимум 5 символов",
            },
          })}
          onChange={handleUserChange}
        />
        <div className={styles.error}>
          {errors?.username && <p>{errors?.username?.message || "Error!"}</p>}
        </div>

        <input
          type="number"
          placeholder="phone number"
          name="phoneNumber"
          value={user.phoneNumber}
          {...register("phoneNumber", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: "Минимум 5 символов",
            },
          })}
          onChange={handleUserChange}
        />
        <div className={styles.error}>
          {errors?.phoneNumber && (
            <p>{errors?.phoneNumber?.message || "Error!"}</p>
          )}
        </div>

        <input
          type="email"
          placeholder="email"
          value={user.email}
          name="email"
          {...register("email", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: "Минимум 5 символов",
            },
          })}
          onChange={handleUserChange}
        />
        <div className={styles.error}>
          {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
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

export default Register;
