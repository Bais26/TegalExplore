import React from 'react'
import { Link } from 'react-router-dom'

const Navitems = ({name, url}) => {
  return (
    <>
    <div className='text-[15px] text-white font-semibold cursor-pointer hover:underline underline-offset-8'>   
      <Link to={url}>{name}</Link>
    </div>
    </>
  )
}

export default Navitems
