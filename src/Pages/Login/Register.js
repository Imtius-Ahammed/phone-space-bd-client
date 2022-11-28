import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../hooks/useToken";
import Title from "../../hooks/Title";

const Register = () => {
  Title(Register)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createNewUser, providerLogin, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signUpError, setSignUpError] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const [token] = useToken(buyerEmail);

  if (token) {
    navigate("/");
  }

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleRegister = (data) => {
    console.log(data);
    setSignUpError("");
    createNewUser(data.email, data.password, data.role)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User register successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveBuyer(data.name, data.email, data.role);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };

  const saveBuyer = (name, email, role) => {
    const buyer = { name, email, role };
    fetch("https://phone-space-bd-server.vercel.app/buyers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyer),
    })
      .then((res) => res.json())
      .then((data) => {
        setBuyerEmail(email);
      });
  };
  return (
    <div className="lg:h-[700px]  lg:flex-row  flex flex-col justify-center items-center">
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image"
        />
      </div>

      <div className="w-96 p-8 shadow-xl hover:shadow-sky-200 bg-base-50">
        <div>
          <h1 className="flex gap-2 justify-center items-center text-2xl font-semibold ">
            Sign Up with{" "}
            <FcGoogle
              onClick={handleGoogleLogin}
              className="cursor-pointer text-3xl "
            ></FcGoogle>
          </h1>
        </div>
        <div className="divider">OR</div>
        <h2 className="text-2xl font-bold mb-8 text-center">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control">
            <div className="form-control w-full max-w-xs mb-5">
              <select
                type="text"
                name="role"
                {...register("role", {
                  required: "Choose one",
                })}
                className="select select-bordered"
              >
                <option disabled selected>
                  Select Role
                </option>

                <option>buyer</option>
                <option>seller</option>
              </select>
            </div>
          </div>
          <div className="form-control w-full max-w-xs mb-3">
            <input
              type="text"
              {...register("name")}
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs mb-3">
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs mb-3">
            <input
              type="password"
              placeholder="Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 digit or longer",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "Password must be Strong",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            className="btn btn-accent mb-4 font-bold text-black text-xl w-full"
            value="sign up"
            type="submit"
          />
          <p className="mb-2">
            <small>Already have an account?</small>{" "}
            <Link
              className="text-red-400 font-semibold underline cursor-pointer"
              to="/login"
            >
              Please Login
            </Link>
          </p>
          <div>
            {signUpError && <p className="text-red-500">{signUpError}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
