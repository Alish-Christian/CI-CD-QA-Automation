import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Handle form submission logic here (e.g., API call)
    console.log('Form data submitted:', formData);
    alert('Account created successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 flex items-center">
      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in-up { animation: fade-in-up 500ms ease-out both; }
        .animate-fade-in { animation: fade-in 600ms ease-out both; }
      `}</style>
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="card w-full max-w-lg bg-base-100/80 backdrop-blur shadow-xl border border-base-200 mx-auto transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <form className="card-body" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold text-center">Create your account</h1>
                <p className="text-center text-base-content/70">Join us and get started</p>

                <div className="form-control">
                  <label className="label"><span className="label-text">Full Name</span></label>
                  <input type="text" name="fullName" placeholder="Your full name" className="input input-bordered transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:border-primary" value={formData.fullName} onChange={handleChange} required />
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text">Email</span></label>
                  <input type="email" name="email" placeholder="email@example.com" className="input input-bordered transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:border-primary" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text">Password</span></label>
                  <input type="password" name="password" placeholder="••••••••" className="input input-bordered transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:border-primary" value={formData.password} onChange={handleChange} minLength="6" required />
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text">Confirm Password</span></label>
                  <input type="password" name="confirmPassword" placeholder="••••••••" className="input input-bordered transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:border-primary" value={formData.confirmPassword} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn-primary w-full mt-2 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95">Create account</button>

                <div className="divider">or</div>

                <button className="btn btn-outline w-full transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95" type="button">Continue with Google</button>

                <p className="text-center text-sm mt-3">
                  Already have an account? <Link to="/login" className="link">Log in</Link>
                </p>
              </form>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left px-2 animate-fade-in-up" style={{ animationDelay: '50ms' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Get Started
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Join the platform that accelerates testing
            </h2>
            <p className="mt-3 text-base-content/70 max-w-xl">
              Create an account to generate tests, view analytics, and manage your projects all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;