import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContest } from "../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub, FaTwitter  } from 'react-icons/fa';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Swal from "sweetalert2";

const Login = () => {
  const { login, googleLogin, githubLogin, twitterLogin } = useContext(AuthContest);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state  || "/";

  // handle email login
  const onSubmit = data => {
    const { email, password } = data;

      setLoginError("");

      login(email, password)
        .then((result) => {
          Swal.fire({
            title: 'Successful!',
            text: 'You Login Successful',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          if (result.user) {
            navigate(from);
          }
        })
        .catch((error)=> {
          Swal.fire({
            title: 'Error!',
            text: 'Password or Email did not match!',
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
          setLoginError(error.message);
        })
  };

  // handle direct login
  const handleDirectLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        Swal.fire({
          title: 'Successful!',
          text: 'You Login Successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        console.log(result.user);
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Login UnsuccessFul!',
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
        console.log(error);
      })
  };


  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Login</title>
        </Helmet>
        <div className="bg-base-200 py-3 lg:py-6 my-5 space-y-4">
          {/* email login */}
          <p className="text-center pb-3 text-2xl font-bold"> 
            Login With Your Account
          </p>
          <div className="rounded-xl mx-auto p-5 w-[300px] md:w-[450px] bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-violet-600 font-medium">Email</span>
                </label>
                <input type="email" name="email" placeholder="Your Email" 
                className="input input-bordered"  
                {...register("email", { required: true })}
                />
                {errors.email && <span className='text-red-500'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-violet-600 font-medium">Password</span>
                </label>
                <div className="flex flex-col">
                  <input 
                    type={showPassword ? "text" : "password"} name="password" placeholder="Password" 
                    className="input input-bordered"  
                    {...register("password", { required: true })}
                  />
                  <span 
                    className="absolute translate-x-56 md:translate-x-96 translate-y-4" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {
                      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span>
                {errors.password && <span className='text-red-500'>Password is required</span>}
                {
                  loginError && <small className='text-red-500'>{loginError}</small>
                }
                </div>                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline border-2 text-violet-600 hover:bg-orange-500 hover:border-0 hover:text-white">Login</button>
              </div>
              <div className="pt-2">
                <p>No account? Register <Link to="/register" className="text-violet-600 font-medium">here</Link> </p>
              </div>
            </form>
          </div>
          <hr className="border-t-2 border-violet-700 border-dashed" />
          {/* direct login */}
          <div className="text-center space-y-3">
            <p className="text-center text-2xl font-bold">Or continue with</p>
            {/* Google Login */}
            <button 
              className="btn btn-outline border-2 text-violet-600 hover:bg-orange-500 hover:border-0 hover:text-white"
              onClick={() => handleDirectLogin(googleLogin)}
            >
              <FaGoogle />Login with Google
            </button>
            <br />
            {/* GitHub Login */}
            <button 
              className="hidden btn btn-outline border-2 text-violet-600 hover:bg-orange-500 hover:border-0 hover:text-white"
              onClick={() => handleDirectLogin(githubLogin)}
            >
              <FaGithub />Login with GitHub
            </button>
            {/* Twitter Login */}
            {/* <br /> */}
            <button 
              className="btn btn-outline border-2 text-violet-600 hover:bg-orange-500 hover:border-0 hover:text-white"
              onClick={() => handleDirectLogin(twitterLogin)}
            >
              <FaTwitter />Login with Twitter
            </button>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Login;