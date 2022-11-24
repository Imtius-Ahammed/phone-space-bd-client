import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { register,formState:{errors}, handleSubmit } = useForm();

  const {createNewUser, updateUser} = useContext(AuthContext);

  const [signUpError, setSignUpError] = useState('')

  const handleRegister = (data)=>{
    console.log(data);
    setSignUpError('');
    createNewUser(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      toast.success('User register successfully.')
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(()=>{})
      .catch(err=>console.log(err));

    })
    .catch(err=>{
      console.log(err);
      setSignUpError(err.message)
    
    });

  }
  return (
    <div className="lg:h-[700px]  lg:flex-row  flex flex-col justify-center items-center">
       <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"  className="w-full" alt="Sample image"  />
      </div>
      
      
      <div className="w-96 p-7">
        <div className='flex flex-row'><h1>Sign In With  <FcGoogle className='text-2xl'></FcGoogle></h1></div>
        <div className="divider">OR</div>
        <h2>Login</h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"> your Name?</span>
          </label>
          <input
            type="text"
            {...register("name")}
            
            className="input input-bordered w-full max-w-xs"
          />
         
        </div>
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
              minLength:{value: 6, message:'password must be 6 digit or longer'},
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message: "Password must be Strong",
              },
            })}
           
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}
        </div>
       

        <p>New to Doctors Portal <Link className="text-red-400 font-semibold" to="/login">Please Login</Link></p>
        <input className="btn btn-accent w-full" value='sign up' type="submit" />
        <div>{signUpError && <p className="text-red-500">{signUpError}</p>}</div>
      </form>
      </div>
    </div>
  );
};

export default Register;