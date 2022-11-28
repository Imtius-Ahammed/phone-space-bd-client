
import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Title from "../../hooks/Title";
import useToken from "../../hooks/useToken";

const Login = () => {
  Title('Login')
  const { register,formState:{errors}, handleSubmit } = useForm();
  const{signIn,providerLogin} = useContext(AuthContext);
  const [loginError,setLoginError] = useState('');
  const[loginBuyerEmail, setLoginBuyerEmail] = useState('');
  const [token] = useToken(loginBuyerEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
if(token){
  navigate(from, {replace: true});
}
 
  const googleProvider = new GoogleAuthProvider();
 

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
         navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
 
  const handleLogin = (data)=>{
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      toast.success('User Login Successfull');
      setLoginBuyerEmail(data.email);
      

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
      
      
      <div className="w-96 p-7 shadow-xl hover:shadow-sky-200 bg-base-50">
        
      <div><h1 className='flex gap-2 justify-center items-center text-2xl font-semibold '>Sign In With  <FcGoogle onClick={handleGoogleLogin} className='cursor-pointer text-3xl '></FcGoogle></h1></div>
        <div className="divider">OR</div>
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs mb-5">
         
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register("email",  {
              required: "Email Address is required"
            })}
            
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && <p className="text-red-500" role="alert">{errors.email?.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs mb-5">
         
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength:{value: 6, message:'password must be 6 digit or longer'}
            })}
           
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}
          <div><Link><small className="underline">Forgot password?</small></Link></div>
        </div>
       
       

       
        <input className="btn btn-accent font-bold mb-5  text-black text-xl w-full" value='login' type="submit" />
        <div>{loginError && <p className="text-red-500">{loginError}</p>}</div>

        <p>New to Doctors Portal?  <Link className="text-blue-600 underline cursor-pointer font-semibold " to="/register">Create new Account</Link></p>
      </form>
      </div>
    </div>
  );
};

export default Login;
