import React from 'react'
import { Link }  from "react-router-dom"

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className=' container-fluid d-flex flex-column justify-content-center align-items-center '>

       
        <div className="footer-div  d-flex justify-content-evenly w-100 flex-wrap"  >

            <div className="website" style={{width:'400px'}}>
            <h4 className='mb-3'> <i className="fa-solid fa-cloud-arrow-up fa-beat"></i>{'  '}
                Media Player</h4>
<h6 style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
<h6>Code licensed MIT, docs CC BY 3.0.</h6>
<p>Currently v5.3.2.</p>
            </div>
            <div className="links d-flex flex-column" >
                <h4 className='mb-3'>Links</h4>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}} >Landing Page</Link>
                <Link to={'/Home'} style={{textDecoration:'none',color:'white'}} >Home</Link>
                <Link to={'/Watch-History'} style={{textDecoration:'none',color:'white'}} >Watch History</Link>
            </div>
            <div className="guides d-flex flex-column">
            <h4 className='mb-3'>Guides</h4>
                <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}} >React</Link>
                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}} >React Bootstrap</Link>
                <Link to={'https://reactrouter.com/en/main'} style={{textDecoration:'none',color:'white'}} >Routing</Link>
            </div>
            <div className="contact">
                <h4 className='mb-3'>Contact Us</h4>
                <div className="sub d-flex " >
                    <input type="text" className='form-control' placeholder='Enter your Email Id' />
                    <button className='btn btn-info ms-3 ' >Subscribe</button>
                </div>
                <div className="icons fs-4 d-flex justify-content-evenly mt-3">
                <Link to={'https://www.facebook.com/'} style={{textDecoration:'none',color:'white'}} ><i className="fa-brands fa-facebook"></i></Link>
                <Link to={'https://twitter.com/'} style={{textDecoration:'none',color:'white'}} ><i className="fa-brands fa-twitter"></i></Link>
                <Link to={'https://www.instagram.com/'} style={{textDecoration:'none',color:'white'}} ><i className="fa-brands fa-instagram"></i></Link>
                <Link to={'https://in.linkedin.com/'} style={{textDecoration:'none',color:'white'}} ><i className="fa-brands fa-linkedin"></i></Link>
                <Link to={'https://www.youtube.com/'} style={{textDecoration:'none',color:'white'}} ><i className="fa-brands fa-youtube"></i></Link>
                </div>
            </div>

        </div>
        <p>Copyright © 2023 Media Player. Built with React.</p>




    </div>
  )
}

export default Footer