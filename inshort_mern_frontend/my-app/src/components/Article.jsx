import React,{useEffect} from 'react'
import GetNews from '../api/Api'
function Article() {
    useEffect(() => {
        DisplayNews()
    }, [])
    const DisplayNews=async()=>{
      const  getresponse=await GetNews()
    }
    
  return (
    <div className='bg-info'>Article</div>
  )
}

export default Article