import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "./firebase";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const navigate=useNavigate()
    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider)
            console.log(result)
            toast.success("Login Success!")
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }

    
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                    <div className="text-center mb-3">
                        <h1 className='lettera'>lettera</h1>
                        <h2 className="mt-2">Sign In</h2>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn btn-primary rounded-pill w-100" >Sign In</button>

                        <h5 className='text-center mt-2'>or</h5>


                    </form>
                    <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-light btn-lg d-flex align-items-center shadow-sm border rounded-pill px-4 py-2"
                            onClick={handleSignInWithGoogle}>
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" className="me-2" width="24" height="24" />
                            <span >Sign in with Google</span>
                        </button>
                        <ToastContainer />
                    </div>
                    <div className=" mt-3">
                        <Link to="/signup">Register</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login