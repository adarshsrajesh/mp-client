import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { removeVideoApi, saveHistory } from '../services/allApi';



const VideoCard = ({displayData,setVideoDeleteResponse,insideCategory}) => {
  const [show, setShow] = useState(false);

  const removeVideo=async(id)=>{
    try{
         const result= await removeVideoApi(id)
         
         setVideoDeleteResponse(result)
    }

    catch(err){
      console.log(err);
      
    }

  }

  const handleClose =   () => {
    setShow(false)


    
  }
  const handleShow = async () => {setShow(true)
    const {caption,ytLink}=displayData
    const sysDateTime= new Date()
    console.log(sysDateTime.toLocaleString("en-US",{timeZoneName:'short'}));
    const timeStamp =sysDateTime.toLocaleString("en-US",{timeZoneName:'short'})
    const historyDetails = {caption,ytLink,timeStamp}

    try{

      const res = await saveHistory(historyDetails)
      
    }
    catch(err){
      console.log(err);
      
      
    }
  }


  const videoDraggingStarted = (e,draggingVideoDetails)=>{
    if(!insideCategory){
      console.log("dragging started",draggingVideoDetails.id)
      e.dataTransfer.setData("videoDetails",JSON.stringify(draggingVideoDetails))

    }
    
   
  }
  

  return (
    <div>
      <Card draggable={true} onDragStart={(e)=>videoDraggingStarted(e,displayData)} className='d-felx flex-column' style={{ height: '250px' }}>
      <Card.Img onClick={handleShow} variant="top" height={'170px'} width={'100%'} src={displayData?.imageUrl} />
      <Card.Body>
        
        <Card.Text className='d-flex justify-content-between align-items-center'>
        <h4>{displayData?.caption}</h4>
        {
          !insideCategory?
          <button onClick={()=>removeVideo(displayData?.id)} className='btn '> <i class="fa-solid fa-trash text-danger"></i></button>:
          <p></p>
        }
        
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="566" src={`${displayData?.ytLink}?autoplay=1`} title="Devara Part -1 Trailer (Telugu) | NTR | Saif Ali Khan | Janhvi | Koratala Siva | Anirudh | Sep 27" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        
        </Modal>
    </div>
  )
}

export default VideoCard