import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='min-vh-100'>
      <div className='d-flex justify-content-between container'>

        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div >

      <table className='container my-5 table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>TimeStamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            


              
                <tr >
                  <td>index</td>
                  <td>caption</td>
                  <td>siteLink</td>
                  <td>timeStamp</td>
                  <td> <button className='btn' ><i className="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
              
              
          }
        </tbody>


      </table>
    </div>
  )
}

export default History