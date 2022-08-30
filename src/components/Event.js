import React from 'react'
import { Link } from 'react-router-dom';

const Event = (props) => {
  const { eventitems, index } = props;
  const handleviewevent=()=>{
    localStorage.setItem("etoprewiew", index+1)
  }
  return (
    <div className='w-40 sm:w-72 h-fit border-solid border-2 rounded-lg p-3 mt-7 m-3'>
      <div className="w-fit pl-4 pr-4 h-8 rounded-xl bg-gray-500 mb-2 flex justify-center content-center text-white text-lg font-bold">
          <div className="">{index+1}</div>
      </div>
      <h1 className="font-bold text-lg sm:text-xl break-words">{eventitems.Ename}</h1>
      <p className="text-sm sm:text-md break-words">{eventitems.Edescription}</p>
      <div className="flex flex-col sm:flex-row">
        <Link to="/preview">
          <button className='h-10 w-28 sm:mr-2 text-md bg-blue-500 hover:bg-green-500 text-white text-md hover:text-lg font-semibold rounded-lg mt-4' onClick={handleviewevent}>View Event</button>
        </Link>
      </div>
    </div>
  )
}

export default Event
