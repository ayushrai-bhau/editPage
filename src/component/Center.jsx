import React from 'react'
import "../App.css"

const Center = () => {
  return (
    <><div className='center'>

    <div className='main'>
    <div>
       <p>Pt.Name - <input type='text' className='pt-name'  /></p>  
    </div>
    <div>
       <p>Age/Sex -  <input type='text' className='Age'  /></p>
    </div>
    <div>
       <p> Date - <input type='text' className='Age'  /></p> 
    
    </div>
    </div>
    
        <br/>
    
      <p className='co'>C/O - <input type='text' className='C/o'  /></p>
    
    </div></>
  )
}

export default Center