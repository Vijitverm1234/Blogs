import React from 'react'
import './Connect.css'
function Connect() {
  return (
    <div>
      <div className='heading heading-1'>Let's Join into Conversation</div>
      <form method='post' action="https://api.web3forms.com/submit" className='con-form'>
       <input
              type="hidden"
              name="access_key"
              value="defcb9f7-0c55-49c3-b552-afa5a246e5e1"
            />
        <img src="pattern2.png" className='pattern' alt="" />
     <div className='input-con'>
    <label htmlFor="">Name :</label>
    <input type="text" name='first_name' placeholder='Enter your Name' />
     </div>
<div className='input-con'>
    <label htmlFor="">Email :</label>
    <input type="email" name='first_name' placeholder='Enter your Email Id' />
     </div>
     <div className='input-con'>
    <label htmlFor="">Message :</label>
    <textarea className='textarea-con' type="email" placeholder='Enter your Message'  name='first_name'/>
     </div>
     <hr />
     <button className='submit' type='submit'>Submit ⬛</button>
      </form>
    </div>
  )
}

export default Connect
