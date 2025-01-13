import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'

const Home = () => {

  const [addResponseFromHome,setAddResponseFromHome]=useState("") //to make realtime reflection of upload of video on view component.

  return (
    <div className='pt-5 min-vh-100 container '>
      {/* top section */}
      <div className='d-flex justify-content-between container mb-5'>

        <Add setAddResponseFromHome={setAddResponseFromHome}/>
        <Link className='text-warning' to={'/history'}>Read History</Link>

      </div>

       {/* mid section */}
        <div className='container-fluid my-5 '>
        
          <h3 className='mb-5'>All Books</h3>
          <View addResponseFromHome={addResponseFromHome}/>
        
         </div>


    </div>
  )
}

export default Home