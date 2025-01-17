import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistoryApi, removeHistoryApi } from '../services/allApi'








const History = () => {
  const [allHistory,setAllHistory]=useState([])
  useEffect(()=>{
  
    getHistory()
  },[])
  console.log(allHistory);

  const getHistory = async ()=>{
    try{
      const result = await getAllHistoryApi()
      if(result.status>=200&&result.status<300){
        setAllHistory(result.data)

        
      }
    }
    catch(err){
      console.log(err);
      
    }
  }
  const removeHistory = async(id)=>{
    try{
      
      await removeHistoryApi(id)
      getHistory()

    }
    catch(err){
      console.log(err);
      

    }

  }
  return (
  <div style={{paddingTop:'100px'}} className='container'>
      <div className='d-flex justify-content-between'>
        <h3>Watch History</h3>
  
        <Link to={'/home'}>Back To Home</Link>
  
      </div>
      <table className='table my-5'>
        <thead>
         <tr>
            <th>#</th>
           <th>Caption</th>
  
           <th>Link</th>
           <th>TimeStamp</th>
           <th></th>
           <th>...</th>
         </tr>
        </thead>
        <tbody>
          {
            allHistory?.length>0 ?
            allHistory.map((videoDetails,index)=>(

              <tr key={videoDetails?.id}>
                <td>{index+1}</td>
            <td>{videoDetails.caption}</td>
            
            <td><a target='_blank' href={`${videoDetails.ytLink}`}>{`${videoDetails.ytLink}`}</a></td>
            <td>{`${videoDetails.timeStamp}`}</td>
            <td><button onClick={()=>removeHistory(videoDetails.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>

              </tr>

            )):   
            <div>No History</div>
          }
        </tbody>
      </table>
  </div>
  )
}

export default History