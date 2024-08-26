import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] gap-y-3 '>
        <h1 className='text-3xl poppins-bold'>Welcome!</h1>
        <p className='text-sm poppins-normal mb-5'>Keep the attendance here</p>
        <Link to ="/login">
        <button className='w-full flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-12 poppins-medium">
            '>Login</button></Link>
              
            <p className='text-sm underline hover:text-blue-800'><a href="https://wa.me/917302667115?text=I%20want%20to%20request%20admin%20acess">Request Sign In?</a> </p>
        
        
    </div>
  )
}

export default Home
