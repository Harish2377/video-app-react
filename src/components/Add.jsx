import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function Add({setuploadVideoServerResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [video, setvideo] = useState({
    id:"",caption:"",url:"",embedLink:""
  })
  
  const getEmbedLink = (e) =>{
    const {value} = e.target
    if(value)
    {
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setvideo({...video,embedLink:link})
    }else{
      setvideo({...video,embedLink:""})
    }

  }

  const handleUpload = async ()=>{
    const {id,caption,url,embedLink} = video
    if (!id || !caption || !url || !embedLink) {
     toast.warning('Please Fill the Form Completely!')
      
    } else {
      const response = await uploadVideo(video)
      console.log(response);
      if (response.status>=200 && response.status<300) {

        toast.success(`'${response.data.caption}' video uploaded successfully`)

        //set server response
        setuploadVideoServerResponse(response.data)
        //reset video
        setvideo({
          id:"",caption:"",url:"",embedLink:""
        })
        


      

        handleClose()
        
      } else {
        //console.log(response);
        toast.error('Please Provide unique ID for uploading videos!!')
        
      }
      
    }
    
  }
  console.log(video);


  return (
    <>
      <div className='d-flex align-items-center'>
  
        <h5>Upload New Video </h5>
        <button className='btn' onClick={handleShow}><i className="fa-solid fa-square-plus fs-5"></i></button>
  
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details <i class="fa-solid fa-arrow-down"></i></p>
          <Form className='border border-secondary rounded p-3'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video ID" onChange={(e)=>setvideo({...video,id:e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Caption" onChange={(e)=>setvideo({...video,caption:e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video URL" onChange={(e)=>setvideo({...video,url:e.target.value})} />
          </Form.Group>

          <Form.Group  controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Link" onChange={getEmbedLink} />
          </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info' onClick={handleUpload} >Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={5000}/>
    </>
  )
}

export default Add