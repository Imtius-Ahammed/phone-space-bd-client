
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { register,formState:{errors}, handleSubmit } = useForm();
  const{signIn} = useContext(AuthContext);
  const [loginError,setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
 
  const handleLogin = (data)=>{
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      toast.success('User Login Successfull');
      navigate(from, {replace: true});

    })
    .catch(err=>{
      console.log(err);
      setLoginError(err.message);
    
    });
    

  }
  return (
    <div className="h-[800px] lg:flex-row  flex flex-col justify-center items-center">
       <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"  className="w-full" alt="Sample image"  />
      </div>
      
      
      <div className="w-96 p-7">
        <h1>Sign In With</h1>
        <div className="divider">OR</div>
        <h2>Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"> your email?</span>
          </label>
          <input
            type="email"
            {...register("email",  {
              required: "Email Address is required"
            })}
            
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && <p className="text-red-500" role="alert">{errors.email?.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"> your Password?</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength:{value: 6, message:'password must be 6 digit or longer'}
            })}
           
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}
        </div>
       

        <p>New to Doctors Portal <Link className="text-red-400 font-semibold" to="/register">Create new Account</Link></p>
        <input className="btn btn-accent w-full" value='login' type="submit" />
        <div>{loginError && <p className="text-red-500">{loginError}</p>}</div>
      </form>
      </div>
    </div>
  );
};

export default Login;
