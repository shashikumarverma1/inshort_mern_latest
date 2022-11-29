import React from 'react'

function Header() {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
          <div className='bg-info align-text w-100 shadow p-1 mb-5 bg-white rounded '>
             <div className='d-flex align-item-center p-2 mx-3'>
              <div><b>Menu</b></div>
                <div className='col-12 d-flex justify-content-center'> 
                <div > <img style={{
                width:200,
                height:80
              }} src={url}/>
              </div>
              </div>


              

               
             </div>

          </div>
          
    
  )
}

export default Header