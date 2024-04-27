import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContest } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContest);
  const [passwordError,setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors }, } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // handle register
  const onSubmit = (data) => {
    const { email, password, image, name } = data;

    if(password.length<6){
      setPasswordError("Password must be 6 characters")
      return
    }

    if(!/[A-Z]/.test(password)){
      setPasswordError("Password must have at least 1 Uppercase letter")
      return
    }
    
    if(!/[a-z]/.test(password)){
      setPasswordError("Password must have at least 1 Lowercase letter")
      return
    }

    setPasswordError('')
      
    //create user and update profile
    createUser(email, password)
      .then((newUser) => {
        console.table(newUser);
        logOut();
        Swal.fire({
          title: 'Successful!',
          text: 'New user successfully created. Now you can login!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        updateUserProfile(name, image)
          .then(() => {
            navigate(from);
          });
      })
      .catch(error=> setPasswordError(error.message))
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Register</title>
        </Helmet>
        <div className="bg-base-200 py-3 lg:py-6 my-5">
          <p className="text-center pb-3 text-2xl font-bold">Create an Account</p>
          <div className="rounded-xl mx-auto p-5 w-[300px] md:w-[450px] bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-violet-600 font-medium">Name</span>
                </label>
                <input 
                type="text" name="name" placeholder="Enter Full Name" 
                className="input input-bordered"  
                {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-violet-600 font-medium">Email</span>
                </label>
                <input 
                type="email" name="email" placeholder="example@mail.com" 
                className="input input-bordered" 
                {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-violet-600 font-medium">
                    Photo URL (Please enter a valid URL)
                  </span>
                </label>
                <input 
                type="text" name="photoURL" placeholder="Profile Photo URL" 
                className="input input-bordered"
                {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-violet-600 font-medium">Password</span>
                </label>
                <div className="flex flex-col">
                  <input 
                    type={showPassword ? "text" : "password"} name="password" placeholder="Add Uppercase & LowerCase" 
                    className="input input-bordered relative"
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
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  {
                    passwordError && <small className='text-red-500'>{passwordError}</small>
                  }
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline border-2 text-violet-600 hover:bg-orange-500 hover:border-0 hover:text-white">Register</button>
              </div>
              <div className="pt-2">
                <p>Already have an account? Login <Link to="/login" className="text-violet-600 font-medium">here</Link> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Register;