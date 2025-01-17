import React, { useState } from 'react'
import { Button, FloatingLabel, Form, FormFloating, Modal } from 'react-bootstrap';
import {saveVideo} from '../services/allApi'





const Add = ({setAddResponse}) => {
  
  const [invalidYtLink,setInvalidYtLink]=useState(false)
  const [VideoDetails,setVideoDetails]=useState({
    caption:"",imageUrl:"",ytLink:""
  })


  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload= async()=>{
    const {caption,imageUrl,ytLink}=VideoDetails
    if(caption&&imageUrl&&ytLink){
      
      try{

        const result = await saveVideo(VideoDetails)
        if(result.status>=200&&result.status<300){
          handleClose()
          alert("video was uploaded successfully")
          setAddResponse(result)
        }
        else{
          console.log(result);
          
          alert("video was not uploaded")
        }

      }
      catch(err){
        console.log(err);
        
      }

    }
    
    else{
      alert("Please fill the details")
    }
  }

  const linkConversion = (userInput)=>{
    if(userInput.includes('https://www.youtube.com/watch?v='))
    {

      console.log(userInput.split("v=")[1].slice(0,11));
      const videoId =userInput.split("v=")[1].slice(0,11);
      setVideoDetails({...VideoDetails,ytLink:`https://www.youtube.com/embed/${videoId}`})
      
      setInvalidYtLink(false)
      

    }else{
      setInvalidYtLink(true)
      setVideoDetails({...setVideoDetails,ytLink:""})
    }

  }

  
  console.log(VideoDetails);
  

  return (

    <>
      <div className='d-flex align-items-center '>
        <h3>Upload New Video</h3>
        <button className='btn btn-warning ms-2' onClick={handleShow}>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=' d-flex flex-column justfy-content-between border rounded p-5'>
            <FloatingLabel controlId="floatingCaption" label="Caption">
              <Form.Control onChange={e=>setVideoDetails({...VideoDetails,caption:e.target.value})}  type="text" placeholder="Caption" />
            </FloatingLabel>
            <FloatingLabel className='my-3' controlId="floatingUrl" label="Url">
              <Form.Control onChange={e=>setVideoDetails({...VideoDetails,imageUrl:e.target.value})}  type="text" placeholder="url" />
            </FloatingLabel>
            <FloatingLabel className='my-3' controlId="floatingVideo" label="Video">
              <Form.Control onChange={e=>linkConversion(e.target.value)}  type="text" placeholder="Video URL" />
            </FloatingLabel>
            {
              invalidYtLink && <div className='text-danger'>
                Invalid Youtube Link
              </div>
              
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Submit</Button>


        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add