import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="email"
          name="identifier"
          {...register("identifier", {
            required: "Поле обязательно к заполнению",
            minLength: {
                value: 5,
                message: "Минимум 5 символов"
            }
          })}
        />
        <div>
          {errors?.identifier && (
            <p>{errors?.identifier?.message || "Error!"}</p>
          )}
        </div>
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};

export default Login;
