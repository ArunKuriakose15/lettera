import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className="container text-center py-5">
        <h1 className="display-1 lettera">Welcome to lettera</h1>
        <p className="lead">Create, edit, and manage your letters with ease.</p>
        <a href="/login" className="btn btn-primary">Get Started</a>
      </div>
      
      {/* Features Section */}
      <div className="container my-5 service-card" id="features">
        <div className="row text-center">
          <div className="col-md-4">
            <h3>Easy Editing</h3>
            <p>Write and format letters effortlessly with our intuitive editor.</p>
          </div>
          <div className="col-md-4">
            <h3>Cloud Storage</h3>
            <p>Save your letters to Google Drive and access them anytime.</p>
          </div>
          <div className="col-md-4">
            <h3>Secure & Fast</h3>
            <p>Your data is encrypted and processed in real-time for efficiency.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage