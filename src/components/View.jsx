import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllvideoApi, saveVideo, updateCategoryApi } from '../services/allApi'
import Category from './Category'



const View = ({addResponse,videoDeleteResponseCategory,setVideoDeleteResponseFromView}) => {
  const [videoDeleteResponse,setVideoDeleteResponse]=useState("")
  
  useEffect(()=>{
    getAllvideo()

  },[addResponse,videoDeleteResponse,videoDeleteResponseCategory])
  const [allVideo,setallVideo]=useState([])
  
  const getAllvideo = async()=>{
    try{
      const result = await getAllvideoApi()
      if(result.status>=200&&result.status<300){
        setallVideo(result.data)
      console.log(allVideo);
      

    }
    else{
      console.log(result);
      
    }
    
   
    }
    catch(err){
      console.log(err);
      
      
    }
  }
  const dragOver=(e)=>{
    e.preventDefault()

  }
 const dropBack= async (e)=>{
  const{video,categoryDetails}=JSON.parse(e.dataTransfer.getData("dragData"))
  console.log(video?.id);
  
console.log(categoryDetails?.allVideos);
console.log("debug",categoryDetails?.categoryName);

  
  let updateVideoList = categoryDetails.allVideos.filter(v=>v?.id!=video?.id)
  console.log("updatevideolist:",updateVideoList);
  // let updatedCategory=category


  
  
   const updatedCategory = {...categoryDetails, allVideos:updateVideoList}
   console.log("updated category",updatedCategory);

  

  let result=await updateCategoryApi(updatedCategory)
  setVideoDeleteResponseFromView(result)

  saveVideo(video)
  getAllvideo();



  }
  return (
    <>
      <Row droppable="true" onDrop={e=>dropBack(e)} onDragOver={e=>dragOver(e)}> 
        {

          allVideo?.length>0?
          allVideo.map(video=>(
          
            <Col key={video?.id} sm={12} md={6} lg={4} className='my-2'>
            <VideoCard displayData={video} setVideoDeleteResponse={setVideoDeleteResponse}/>
            </Col>
          ))
          :
          <div className='text-danger'> No videos uploaded</div>

       
        }
      </Row>
    </>
  )
}

export default View