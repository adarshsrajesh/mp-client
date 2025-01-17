import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'




const Home = () => {
  const [addResponse,setAddResponse]=useState("")
  const [videoDeleteResponseCategory,setVideoDeleteResponseCategory]=useState("")
  const [videoDeleteResponseFromView,setVideoDeleteResponseFromView]=useState("")
  
  return (
    <div className='container' style={{paddingTop:'100px'}}>
    <div className='container d-flex justify-content-between'>
      <Add setAddResponse={setAddResponse} />

      <Link to={'/history'}>Watch History </Link>

    </div>

    <div className="container-fluid row" my-5>
      <div className="my-5 col-lg-6">
        <h3>
         All Videos
        </h3>
        <View addResponse={addResponse} setVideoDeleteResponseFromView={setVideoDeleteResponseFromView} videoDeleteResponseCategory={videoDeleteResponseCategory}/>
      </div>
      <div className="my-5 col-lg-6">
      <h3>
        Catergory
        </h3>
        <Category videoDeleteResponseFromView={videoDeleteResponseFromView} setVideoDeleteResponseCategory={setVideoDeleteResponseCategory}/>
      </div>
    </div>

      

    </div>
  )
}

export default Home