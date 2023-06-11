import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'
function Community() {
    const handleClick =()=>{
        window.open('#whatslink','_blank');
    }
  return (
    <div className='container'>
        <div className="start-wrapper">
            <div className="start-img">
                <img src={tc} alt="" />
            </div>
            <div className="start-content">
                <h2 className='section-title'>Join Our Community</h2>
                <p>
                    Unlock the Power of Knowledge and innovation by Joining our vibrant and free Whatsapp tech Community
                </p>
                <button className='register-btn' onClick={handleClick}>Join now</button>
            </div>
        </div>



    </div>
  )
}

export default Community