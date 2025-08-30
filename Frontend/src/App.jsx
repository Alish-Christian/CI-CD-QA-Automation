import './App.css'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/Signup'
import Doc from './pages/Doc'

function App() {


  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<div className="p-6"><h1 className="text-2xl font-bold">Projects</h1><p>Coming soon.</p></div>} />
          <Route path="/settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p>Coming soon.</p></div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/docs" element={<Doc />} />
          {/* <Route path="*" element={<div className="p-6"><h1 className="text-2xl font-bold">404 - Page Not Found</h1></div>} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
