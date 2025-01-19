import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllvideoApi, saveVideo, updateCategoryApi } from '../services/allApi'



const View = ({ addResponse, videoDeleteResponseCategory, setVideoDeleteResponseFromView }) => {
  const [videoDeleteResponse, setVideoDeleteResponse] = useState("")

  useEffect(() => {
    getAllvideo()

  }, [addResponse, videoDeleteResponse, videoDeleteResponseCategory])
  const [allVideo, setallVideo] = useState([])

  const getAllvideo = async () => {
    try {
      const result = await getAllvideoApi()
      if (result.status >= 200 && result.status < 300) {
        setallVideo(result.data)
        console.log(allVideo);


      }
      else {
        console.log(result);

      }


    }
    catch (err) {
      console.log(err);


    }
  }
  const dragOver = (e) => {
    e.preventDefault()

  }
  const dropBack = async (e) => {
    const { video, category } = JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video?.id);

    console.log(category?.allVideos);
    console.log("debug", category?.categoryName);


    let updateVideoList = category.allVideos.filter(v => v?.id != video?.id)
    console.log("updatevideolist:", updateVideoList);
    // let updatedCategory=category




    const updatedCategory = {...category, allVideos: updateVideoList }
    console.log("updated category", updatedCategory);



    let result = await updateCategoryApi(updatedCategory)
    setVideoDeleteResponseFromView(result)

    await saveVideo(video)
    getAllvideo();



  }
  return (
    <>
      <Row droppable="true" onDrop={e => dropBack(e)} onDragOver={e => dragOver(e)}>
        {

          allVideo?.length > 0 ?
            allVideo.map(video => (

              <Col key={video?.id} sm={12} md={6} lg={4} className='my-2'>
                <VideoCard displayData={video} setVideoDeleteResponse={setVideoDeleteResponse} />
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