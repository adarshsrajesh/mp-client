import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { getAllCategoryApi, removeCategory, removeVideoApi, saveCategoryApi, updateCategoryApi } from '../services/allApi';
const Category = ({ setVideoDeleteResponseCategory,videoDeleteResponseFromView}) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])

  useEffect(() => {
    getAllCategory()
  }, [videoDeleteResponseFromView])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteCategory = async (id) => {
    try {
      await removeCategory(id)
      getAllCategory()



    }
    catch (err) {
      console.log(err);

    }

  }


  const getAllCategory = async () => {
    try {
      const result = await getAllCategoryApi()
      if (result.status >= 200 && result.status < 300) {
        setAllCategory(result.data)
      }
      else {
        console.log("err");
      }
    }
    catch (err) {
      console.log(err);

    }
  }
  const handleSaveCategory = async (categoryName) => {
    console.log("hai");

    console.log(categoryName);

    if (!categoryName) {
      alert("Enter Category Name!!");

    }
    else {
      const categoryDetails = { categoryName, allVideos: [] }


      try {

        const result = await saveCategoryApi(categoryDetails)
        if (result.status >= 200 && result.status < 300) {
          handleClose()

          alert("Data saved successfully")
          getAllCategory()





        }


      }
      catch (err) {
        console.log(err);

      }

    }




  }
  const dragOverCategory = (e) => {
    e.preventDefault()
    // console.log("dragging over");


  }

  const videoDropOverCategory = async (e, categoryDetails) => {
    // e.preventDefault()
    console.log(" dropped inside");


    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);
    try {
      categoryDetails?.allVideos.push(videoDetails)

      let result = await removeVideoApi(videoDetails?.id)
      setVideoDeleteResponseCategory(result)



      result = await updateCategoryApi(categoryDetails)
      console.log(videoDetails.id);



    } catch (err) {

      console.log(err);

    }


  }

  const draggingStartedCategory = (e, draggingVideoDetails,category) => {

    console.log("dragging started", draggingVideoDetails)

    let dragData = {video:draggingVideoDetails,category}
    e.dataTransfer.setData("dragData", JSON.stringify(dragData))
  }
  return (
    <>
      <div className=' w-100 d-flex align-items-center justify-content-between'>
        <h3>All Categories </h3>

        <button onClick={handleShow} className='btn btn-warning'>+</button>


      </div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new category!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='border  p-5'>
          <FloatingLabel controlId="floatingCategory" label="Category">
            <Form.Control onChange={(e) => { setCategoryName(e.target.value) }} type="text" placeholder="Category" />
          </FloatingLabel>

        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} >Close</Button>
          <Button onClick={() => handleSaveCategory(categoryName)} >Add</Button>
        </Modal.Footer>


      </Modal>
      {/* All category wrapper */}
      <div className='container-fluid mt-3'>
        {/* single category wrapper */}
        {
          allCategory?.length > 0 ? allCategory.map(category => (
            <div droppable="true" onDragOver={e => dragOverCategory(e)} onDrop={e => videoDropOverCategory(e, category)} key={category?.id} className='border round p-3 mb-3'>
              <div className='d-flex justify-content-between'>
                <h3>{category.categoryName}</h3>
                <button onClick={() => deleteCategory(category?.id)} className='btn '> <i class="fa-solid fa-trash text-danger"></i></button>
              </div>

              <div className="row mt-2">
                {
                  category?.allVideos?.length > 0 ? category?.allVideos?.map(video => (
                    <div draggable={true} onDragStart={e => draggingStartedCategory(e, video, category)} className="col-lg-4">
                      <VideoCard displayData={video} insideCategory={true} />


                    </div>


                  )) :
                    <div>No videos</div>

                }
              </div>
            </div>



          )) : <div>Add new category </div>
        }




      </div>

    </>
  )
}

export default Category