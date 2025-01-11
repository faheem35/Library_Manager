import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllBooksAPI } from '../services/allAPI'

const View = (addResponseFromHome) => {

  const [deleteBookResponseFromBookCard,SetDeleteBookResponseFromBookCard]=useState("")
  const [updateBookResponseFromBookCard,SetUpdateBookResponseFromBookCard]=useState("")

  const [allBooks,setAllBooks]=useState('')

  useEffect(()=>{
    getAllBooks()
  },[addResponseFromHome,deleteBookResponseFromBookCard,updateBookResponseFromBookCard])

 

  const getAllBooks=async()=>{
    try{
      const result=await getAllBooksAPI()
      console.log(result);
      
      if(result.status>=200 && result.status<=300){
        setAllBooks(result.data)
      }else{
        console.log("API call failed..");
        }
    }catch(err){
      console.log(err);
      
    }

  }


  return (
    <>
      <Row  >
        {
          allBooks?.length>0?
          allBooks.map(book=>(
            <Col key={book?.id} className='mb-4' sm={12} md={6} lg={4}>  
          <VideoCard displayData={book}  SetDeleteBookResponseFromBookCard={SetDeleteBookResponseFromBookCard} SetUpdateBookResponseFromBookCard={SetUpdateBookResponseFromBookCard}/>
          </Col>
  
          )):
          <div>No Books are uploaded </div>
        }
         
        </Row>
    </>
  )
}

export default View