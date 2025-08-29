import React from 'react';

// Reusing the social media icons from before
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.418.113-.863.173-1.325.173-.304 0-.598-.03-.886-.084.629 1.958 2.449 3.379 4.604 3.419-1.618 1.269-3.645 2.024-5.85 2.024-.379 0-.753-.022-1.122-.067 2.093 1.342 4.58 2.123 7.24 2.123 8.683 0 13.44-7.185 13.44-13.44 0-.204-.005-.407-.013-.61a9.61 9.61 0 0 0 2.35-2.44z"></path></svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path></svg>
);

const AppFooter = () => {
  return (
    <footer className="footer-gradient text-primary-content animate-fade-in">
      {/* Main footer section with logo, links, and social media */}
      <div className="footer p-8 sm:p-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <aside className="col-span-full lg:col-span-1 flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          {/* Replace with your actual logo */}
          <img src="https://via.placeholder.com/100x40.png?text=Your+Logo" alt="Company Logo" className="mb-4" />
          <p className="text-sm text-center lg:text-left">
            Your Company Ltd.
            <br />
            Providing reliable tech since 2000.
          </p>
        </aside>

        <nav className="text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '120ms' }}>
          <header className="footer-title text-lg font-bold mb-4">Services</header>
          <a className="link link-hover block mb-2 transition-transform hover:translate-x-1">Branding</a>
          <a className="link link-hover block mb-2 transition-transform hover:translate-x-1">Design</a>
          <a className="link link-hover block mb-2 transition-transform hover:translate-x-1">Marketing</a>
          <a className="link link-hover block transition-transform hover:translate-x-1">Advertisement</a>
        </nav>

        <nav className="text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '240ms' }}>
          <header className="footer-title text-lg font-bold mb-4">Company</header>
          <a className="link link-hover block mb-2 transition-transform hover:translate-x-1">About us</a>
          <a className="link link-hover block mb-2 transition-transform hover:translate-x-1">Contact</a>
          <a className="link link-hover block mb-2 transition-transform hover:translate-x-1">Jobs</a>
          <a className="link link-hover block transition-transform hover:translate-x-1">Press kit</a>
        </nav>

        <nav className="text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '360ms' }}>
          <header className="footer-title text-lg font-bold mb-4">Legal & Social</header>
          <a className="link link-hover block mb-2 transition-transform hover:translate-x-1">Terms of use</a>
          <a className="link link-hover block mb-2 transition-transform hover:translate-x-1">Privacy policy</a>
          <a className="link link-hover block mb-4 transition-transform hover:translate-x-1">Cookie policy</a>
          <div className="grid grid-flow-col gap-4 justify-center lg:justify-start">
            <a className="hover:scale-110 transition-transform duration-200"><TwitterIcon /></a>
            <a className="hover:scale-110 transition-transform duration-200"><YouTubeIcon /></a>
            <a className="hover:scale-110 transition-transform duration-200"><FacebookIcon /></a>
          </div>
        </nav>
      </div>

      {/* Bottom copyright section */}
      <div className="footer footer-center p-4 bg-opacity-90 bg-black text-white">
        <aside>
          <p>Copyright © 2025 - All rights reserved by Your Company Ltd.</p>
        </aside>
      </div>
    </footer>
  );
};

export default AppFooter;