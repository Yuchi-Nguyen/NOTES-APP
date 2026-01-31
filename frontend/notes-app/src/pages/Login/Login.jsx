import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Login = () => {
  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>
        <div className= 'w-full max-w-md p-8 border border-gray-300 rounded-lg shadow-lg'>
          <form onSubmit={() => {}}>
            <h4 className='text-2xl mb-7'>Login</h4>

            <input type="email" placeholder='Email' id="email" name="email" required className='input-box'/>

            <button type="submit" className='btn-primary mt-5 w-full'>Login</button>

            <p className='mt-4 text-center'>
              Don't have an account? <a href="/signup" className='text-blue-500'>Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login