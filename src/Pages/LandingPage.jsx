import React from 'react'
import { Col, Row, Card,  } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function LandingPage() {

  const navigateByUrl = useNavigate()


  return (
    <>

    <Row className='mt-5 mb-5 d-flex  align-items-center justify-content-between w-100 '>

      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum facere odit placeat dolores necessitatibus id ipsum? Velit mollitia accusamus officiis, eveniet aut quod tempora iusto modi odit impedit debitis!. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 

        </p>
        <button className='mt-5 btn btn-info' onClick={()=>navigateByUrl('/Home')}>Get Started<i className="fa-solid fa-arrow-right fa-beat-fade ms-2" ></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img className='img-fluid ' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
      </Col>
      


    </Row>

    <div className="container mt-5 mb-5  d-flex align-items-center justify-content-center flex-column">

      <h3>Features</h3>
      <div className="cards  mt-5 mb-5 d-flex align-items-center justify-content-between w-100">

      <Card style={{ width: '22rem' }} className='p-3'>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media3.giphy.com/media/6UL3rqweR5Y2Jcrnqb/giphy.gif?cid=ecf05e477gbkptayx3eks4o5l0nvtcb77ob7dh4lz839hbfx&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className='p-3'>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://assets.objkt.media/file/assets-003/QmXxMQz8wNKKFEEYDM44q2TJnbAHPXMT11hEBxdJUVEhan/artifact" />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className='p-3'>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://cdn.dribbble.com/users/2266932/screenshots/6593911/dribbble.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

      </div>

    </div>


    <div className="container border rounded p-5  border-secondary mt-5 mb-5 d-flex  align-items-center justify-content-between w-100">

      <div className="col-lg-5">
        <h3 className='mb-5 text-warning'>Simple, Fast and Powerful</h3>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>
        : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolor iste reprehenderit illum! . </h6>

        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Categorise Videos</span>
        : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium  dolor iste reprehenderit illum! . </h6>

        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing History</span>
        : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium  dolor iste reprehenderit illum! . </h6>
      </div>


      <div className="video col-lg-6">
      <iframe width="100%" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>

    </div>

    
    
    </>
  )
}

export default LandingPage