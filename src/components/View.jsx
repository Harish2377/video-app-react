import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'





function View({uploadVideoServerResponse}) {

const [allvideos, setallvideos] = useState([])
const [deleteVideoStatus, setdeleteVideoStatus] = useState(false)


const getallUploadedVideos = async ()=>{
  //make api call
  const { data } = await getAllVideos()
  setallvideos(data)

}

useEffect(()=>{
  
  getallUploadedVideos()
  setdeleteVideoStatus(false)
},[uploadVideoServerResponse,deleteVideoStatus])
console.log(allvideos);

  return (
    <>
        <Row>
        {
          allvideos.length>0?
          allvideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}  >
            <VideoCard displayData={video} setdeleteVideoStatus={setdeleteVideoStatus} />
          </Col>
          ))
          : 
          <p className='fw-bolder fs-5 text-danger'>Nothing to display!</p>
        }

        </Row>
    </>
   
  )
}

export default View