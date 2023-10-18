import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";





const Login = () => {
    const {signIn}=useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
const location=useLocation();
const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
      const form=new FormData(e.currentTarget);
      
      const email= form.get('email');
      const password=form.get('password');
      console.log(email,password)
      setRegisterError('');
      setSuccess('');

    signIn(email,password)
    .then(result=>{console.log(result);
        navigate(location?.state? location.state:'/');
        if(result){
            setSuccess('User Logged in Successfully.')
        }
        else{
            setSuccess('Please verify your email address.')
        }
    })
    .catch(error=>{
        console.error(error)
    setRegisterError(error.message);
}
)
    }
    return (
        <div>
           
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
  <h2 className="text-3xl">Please Login</h2>
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }

      <p className="text-center text-sm mb-4">Do not have an account ?<Link className="text-red-600 font-bold" to='/register'>Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;