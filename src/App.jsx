import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Landing from './pages/Landing'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )

  //  "/neet" +	"/neet/class-11"	-> "/neet/class-11"	   Absolute (Hardcoded)
  //  "/neet" +   "class-12"  ->	 "/neet/class-12"	   Relative (Flexible)
}

export default App