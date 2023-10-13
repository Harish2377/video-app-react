
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideos, getAllCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';



function Category() {

  const [ allCategory, setAllCategory] = useState([])

  const [ categoryName, setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async()=>{
    if (categoryName) {
      let body= {
        categoryName,allVideos:[]
        
        
      }
      //make api call
      const response = await  addCategory(body)
      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()
        //reset state
        setCategoryName("")

        //get category
        getCategories()

      }else{

        toast.error("Operation Failed!!")

      }
    } else {


      toast.warning("Please provide category name!!")
    }
  }

  const getCategories = async()=>{
    //make api call
    const {data} = await getAllCategory()
    setAllCategory(data);
  }
  console.log(allCategory);

  useEffect(()=>{

    getCategories()

  },[])



  const handleDelete = async (id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const dragOver = (e) =>{
    console.log("video drag over category");
    e.preventDefault()

  }


  const videoDrop = async (e,categoryId)=>{
    // console.log("video dropped inside category Id:" +categoryId);
    const videoId =e.dataTransfer.getData("videoId")
    // console.log("video card Id",videoId);
    //get video details
    const {data} = await getAVideos(videoId)
    // console.log(data);
    //get category  details
    const selectedCategory = allCategory?.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    //make api call to update category
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }
  

  return (
    <>
    <div className='d-grid ms-3'>

      <button className='btn btn-info' onClick={handleShow}>Add New Category</button>

    </div>
    {
      allCategory.length>0?allCategory?.map(item=>(

        <div className="mt-3 ms-3 border rounded p-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>

          <div className="d-flex justify-content-between align-items-center">
            <h6>{item?.categoryName}</h6>
            <button className='btn' onClick={()=>handleDelete(item?.id)}><i className="fa-sharp fa-solid fa-trash  text-danger"></i></button>
          </div>
          <Row>
            {
              item?.allVideos &&
              item?.allVideos.map(card=>(
                <Col sm={12}>
                <VideoCard displayData={card} insideCategory={true}/>
                </Col>
              ))              

              
            }
          </Row>

        </div>
        

      )): <p className='fw-bolder fs-5 text-danger'>No categories are added!</p>
    }

    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form className='border border-secondary rounded p-3'>


          <Form.Group className="mb-3" controlId="formBasicEmail">

             < Form.Label>Enter Category Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Category Name"  onChange={(e)=>setCategoryName(e.target.value)} />
          </Form.Group>

          

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info' onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={5000}/>
    </>
  )
}

export default Category