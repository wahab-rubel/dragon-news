import { useContext } from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider'
function Navbar() {
const { user, logOut } = useContext(AuthContext)
  return (
    <div className='flex justify-between'>
     <div className=''>{user && user.name}</div>
     <div className='nav space-x-3 m-6'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/career'>Career</Link>
     </div>
     <div className='login flex justify-center items-center gap-2'>
      <div className=''>
      <img className='rounded-full' src={userIcon} alt="icon" />
      </div>
        {
          user && user?.email ? (
            <button onClick={logOut} className='btn btn-neutral rounded-none'>Log-Out</button>
           ) :  (
           <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
        )}
     </div>
    </div>
  )
}

export default Navbar
