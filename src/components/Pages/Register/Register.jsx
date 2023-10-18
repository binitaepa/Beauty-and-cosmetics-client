import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";



const Register = () => {
    const {createUser,signInWithGoogle}=useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const name= form.get('name');
        const email=form.get('email')
        const password=form.get('password')
        console.log(name,email,password)

        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }
        else if(!/[!@#$%^&*()_+{}[:;<>,.?~\\/-]/.test(password)){
            setRegisterError('Your password should have a special character.')
            return;
        }

        createUser(email,password)
      .then(result=>{console.log(result);
        setSuccess('User Created Successfully.')
    toast('You have registered successfully!')})
      .catch(error=>{
        console.error(error)
      })
    }
    const handleGoogle= () =>{
        signInWithGoogle()
        .then(result=>{console.log(result)})
        .catch(error=>{console.error(error)})
    }
    
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
  <div className='p-4 space-y-3 mb-6'>
            <h2 className="text-3xl">Login With</h2>
                <button onClick={handleGoogle} className="btn btn-outline w-full text-white bg-pink-500">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <h2 className="text-3xl items-center flex justify-center">OR</h2>
            </div>
  <h2 className="text-3xl">Please Register</h2>
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-pink-200">
      <form onClick={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-pink-400 text-white">Register</button>
        </div>
      </form>
      {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600 ml-10">{success}</p>
                }
      <p className="text-center text-sm mb-4">Already have an account ?<Link className="text-red-600 font-bold" to='/login'>Login</Link></p>
    </div>
  </div>
</div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;