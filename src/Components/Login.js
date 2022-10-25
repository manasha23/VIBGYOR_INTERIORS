import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <div className="bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl  px-4 md:px-8 mx-auto">
      <h2 className="text-white  text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Sign in</h2>
        <p className="text-white  text-2xl lg:text-1xl font-bold text-center mb-4 md:mb-8">
          Don't have an account yet?{' '}
          <Link to='/sign-up' className='underline'>
            Sign up.
          </Link>
        </p>
      
      <form onSubmit={handleSubmit} className="max-w-lg  border rounded-lg mx-auto">
        <div className='form-group flex flex-col gap-4 p-4 md:p-8'>
        <div>
          <label className='inline-block mt-5 text-white text-sm sm:text-base mb-2'>Email Address:</label>
          <input onChange={(e) => setEmail(e.target.value)} className='Input w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2' type='email'/>
        </div>
        <div className='form-group'>
          <label className='inline-block text-white text-sm sm:text-base mb-2'>Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} className='Input w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2' type='password' />
        </div>
        <button className='px-8 py-3 ml-36 text-center text-white w-40 text-lg font-semibold border rounded hover:dark:text-black  dark:border-gray-100 mb-4'>
          Sign In
        </button>
        </div>
      </form>
   </div>
   </div>
 
  );
};

export default Signin;