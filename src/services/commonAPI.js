import axios from "axios"


const commonAPI = async(httpMethod,url,reqBody
    
) => {
  const reqConfig = {
    method:httpMethod,
    url:url,
    data:reqBody
  }
  return axios (reqConfig).then(res=>{return res}).catch(err=>{return err})
}

export default commonAPI