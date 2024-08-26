import React from 'react'
import { BiSolidFilePdf } from 'react-icons/bi'
import { FaPeopleGroup } from 'react-icons/fa6'
import { IoCheckmarkDoneCircleSharp, IoPersonAdd } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
          
    <div className='flex justify-center items-center gap-y-5   h-screen  flex-col'>
       
        <div className='grid gap-y-7 text-center'>
        <Link to='/students'>
        <div className=' flex justify-between items-center text-2xl poppins-medium text-gray-800 px-8 py-3 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-sm hover:text-gray-400'>
        <FaPeopleGroup className='mr-10' />
          All Students
          
          </div>
        </Link>

        <Link to='/add-student'>
        <div className='flex justify-between items-center text-2xl poppins-medium text-gray-800 px-8 py-3 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-sm hover:text-gray-400'>
        <IoPersonAdd />
          Add Student</div>
        </Link>

        <Link to='/mark-attendance'>
        <div className='flex justify-between items-center text-2xl poppins-medium text-gray-800 px-8 py-3 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-sm hover:text-gray-400'>
        <IoCheckmarkDoneCircleSharp />

          Mark Present</div>
        </Link>
        <Link to='/attendance'>
        <div className='flex justify-between items-center text-2xl  poppins-medium text-gray-800 px-8 py-3 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-sm hover:text-gray-400'>
        <BiSolidFilePdf />
          Attendance</div>
        </Link>
    </div>
    </div>
    </div>
  )
}

export default Navigation