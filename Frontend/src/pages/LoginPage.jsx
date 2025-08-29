import React from 'react';
import { Link } from 'react-router-dom';

// You can use an icon library like react-icons for the social media logos
// npm install react-icons
import { FcGoogle } from 'react-icons/fc'; 

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in-up { animation: fade-in-up 500ms ease-out both; }
        .animate-fade-in { animation: fade-in 600ms ease-out both; }
      `}</style>
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left px-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="i-heroicons-sparkles" /> Welcome back
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Sign in to your account
            </h1>
            <p className="mt-3 text-base-content/70 max-w-xl">
              Access your dashboard, manage projects, and track testing progress effortlessly.
            </p>
          </div>

          <div className="w-full max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="card bg-base-100/80 backdrop-blur shadow-xl border border-base-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="card-body">
                <h2 className="card-title justify-center">Welcome back</h2>
                <p className="text-center text-base-content/70">Please enter your credentials</p>

                <div className="form-control mt-4">
                  <label className="label"><span className="label-text">Email</span></label>
                  <input type="email" placeholder="you@example.com" className="input input-bordered transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:border-primary" required />
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text">Password</span></label>
                  <input type="password" placeholder="••••••••" className="input input-bordered transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:border-primary" required />
                  <label className="label">
                    <span className="label-text-alt">
                      <label className="cursor-pointer flex items-center gap-2">
                        <input type="checkbox" className="checkbox checkbox-sm transition-all duration-200" />
                        <span>Remember me</span>
                      </label>
                    </span>
                    <a className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>

                <button className="btn btn-primary w-full mt-2 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95">Sign in</button>

                <div className="divider animate-fade-in" style={{ animationDelay: '250ms' }}>or</div>

                <button className="btn btn-outline w-full transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95">
                  Continue with Google
                </button>

                <p className="text-center text-sm mt-3">
                  Don't have an account? <Link to="/signup" className="link">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;