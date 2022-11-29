import React, { useEffect, useState } from 'react'
import GetNews from '../api/Api.js'
const Data = () => {
    const [item, setitem] = useState([])
    useEffect(() => {
        const data = GetNews()
        data.then((res) => {
            // console.log(res.data)
            setitem(res.data)
        })
        //    console.log(data)
    }, [])
    //    console.log(item)
    return (
        <div className='d-flex justify-content-center'>
            <div className='w-75'>
            {
                item.map((e) => {
                    return (
                        <div className='d-flex  shadow p-3 mb-5 bg-white rounded '>
                            <div className=''>
                                <img className='shadow  rounded' style={{
                                    width: 150,
                                    height: 200,
                                    padding:-20
                                }} src={e.url}  />
                            </div>
                            <div className='p-3 '>
                                <div className='text-center p-1'><b>{e.title}</b></div>
                                <div className=''>{e.description}</div>

                                <div className='d-flex'>
                                    <div className='mx-2'>publisher  : {e.publisher}</div>
                                   
                                    <div className='mx-2' >By :<b>{e.author}</b></div>
                                    <div><a href={e.link}>click for detail</a> </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
           
        </div>
    )
}

export default Data