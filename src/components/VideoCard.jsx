import React, { useState } from "react";
import { Card, Modal, Form, Button } from "react-bootstrap";
import { removeBookAPI, saveHistoryAPI, updateBookAPI } from "../services/allAPI";
import toast, { Toaster } from 'react-hot-toast';

const VideoCard = ({ displayData, SetDeleteBookResponseFromBookCard, SetUpdateBookResponseFromBookCard }) => {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({
    caption: displayData?.caption || "",
    imgUrl: displayData?.imgUrl || "",
    siteLink: displayData?.siteLink || "",
  });

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
  };

  const handleShow =async () =>{
//display modal
    setShow(true)

    const{caption,siteLink}=displayData
    const sysDateTime= new Date()
    console.log(sysDateTime);
    console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
    const timeStamp=sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const historyDetails={caption,siteLink,timeStamp}

    //api call to store in history 
    try{
      await saveHistoryAPI(historyDetails)
  
      }catch(err){
        console.log(err);
        
      }
  
    
  } 

  const handleEdit = () => setEditMode(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = async () => {
    try {
      const result = await updateBookAPI(displayData?.id, editData);
      SetUpdateBookResponseFromBookCard(result)
      if (result?.status >= 200 && result?.status < 300) {
        
        toast.success("Book updated successfully!")
        setEditMode(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBook = async (id) => {
    try {
      const result = await removeBookAPI(id);
      SetDeleteBookResponseFromBookCard(result);
      toast.success("Book Deleted successfully!")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={handleShow}
            style={{ cursor: "pointer" }}
            variant="top"
            height={"180px"}
            src={displayData?.imgUrl}
          />
          <Card.Body>
            <Card.Text className="d-flex justify-content-between align-items-center">
              <span className="text-white">{displayData?.caption}</span>
             <div className="d-flex align-items-center justify-content-end">
                <span onClick={handleEdit}>
                  <i className="fa-solid fa-pen-to-square" style={{cursor: "pointer"}} ></i>
                </span>
                <button
                  onClick={() => deleteBook(displayData?.id)}
                  className="btn"
                >
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
             </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Toaster position="top-right"/>
      </div>


      {/* Modal for Viewing or Editing */}
      <Modal
        size="xl"
        centered
        show={show || editMode}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode ? "Edit Book Details" : displayData?.caption}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editMode ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Caption</Form.Label>
                <Form.Control
                  type="text"
                  name="caption"
                  value={editData.caption}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="imgUrl"
                  value={editData.imgUrl}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Site Link</Form.Label>
                <Form.Control
                  type="text"
                  name="siteLink"
                  value={editData.siteLink}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" onClick={saveEdit}>
                Save Changes
              </Button>
            </Form>
          ) : (
            displayData?.siteLink ? (
              <iframe
                src={displayData?.siteLink}
                width="100%"
                height="700px"
                title="Embedded Content"
                allowFullScreen
              ></iframe>
            ) : (
              <p>No content available</p>
            )
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;
