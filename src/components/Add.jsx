import React from 'react'
import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { saveBookAPI } from '../services/allAPI';
import toast, { Toaster } from 'react-hot-toast';


const Add = ({setAddResponseFromHome}) => {

  const [bookDetails,setBookDetails]=useState({
    caption:'',imgUrl:'',siteLink:''
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleUploadBook=async()=>{
    //object destructuring
    const {caption,imgUrl,siteLink}=bookDetails

    if(caption,imgUrl,siteLink){

      try{
        const result=await saveBookAPI(bookDetails) 
        console.log(result);

        if(result.status>=200 && result.status<300){
          // alert("Book uploaded successfully")
          toast.success("Book uploaded successfully")
          handleClose()
          //pass the result to view componnet
          setAddResponseFromHome(result)

        }else{
          // alert("something went wrong in uploading")
          toast.error("something went wrong in uploading")
        }
        


      }catch(err){
        console.log(err);
        
      }

    }else{
      // alert("please fill the form properly")
      toast.error("please fill the form properly")
    }
  }

  return (
    <>
    <div className='d-flex align-items-center'>
                                        <h5> Upload New Book</h5>
                                        <button onClick={handleShow} className='btn btn-danger ms-3 rounded-circle fw-bolder fs-5'>+</button>
                                        <Toaster position='top-right'/>
                              </div>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Book Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <div className='border rounded p-3'>
      <FloatingLabel  controlId="floatingCaption" label="Book Name">
                                                  <Form.Control onChange={e=>setBookDetails({...bookDetails, caption:e.target.value})} type="text" placeholder="Book Name" />
                                        </FloatingLabel>
                                        

                                        <FloatingLabel className='mt-3' controlId="floatingUrl" label="Book Image URL">
                                                  <Form.Control onChange={e=>setBookDetails({...bookDetails, imgUrl:e.target.value})} type="text" placeholder="Book Image URL" />
                                        </FloatingLabel>

                                        <FloatingLabel className='mt-3' controlId="floatingLink" label="Book Site Link">
                                                  <Form.Control onChange={e=>setBookDetails({...bookDetails, siteLink:e.target.value})} type="text" placeholder="Book Site Link" />
                                        </FloatingLabel>
      </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUploadBook}>
          Add to Library
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Add