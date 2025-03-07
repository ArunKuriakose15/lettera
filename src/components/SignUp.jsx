import React from 'react'

const SignUp = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                    <div className="text-center mb-3">
                        <h1 className='lettera'>lettera</h1>
                        <h2 className="mt-2">Sign Up</h2>
                    </div>
                    <form>
                    <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="name" className="form-control" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                        <h5 className='text-center mt-2'>or</h5>
                        <div className="d-flex justify-content-center mt-2">

                            <button className="btn btn-light btn-lg d-flex align-items-center shadow-sm border rounded-pill px-4 py-2">
                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" class="me-2" width="24" height="24" />
                                <span >Sign up with Google</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp