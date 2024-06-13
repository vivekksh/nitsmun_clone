import React, { useRef } from 'react'
import './Review.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpeg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'


const Review = () => {

    const slider = useRef();
    let tx = 0;


const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
  return (
    <div className='reviews'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Suraj Gupta</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>opening quoteThe organisation team was awesome. worth it every penny spent! Special thanks to the chair, NATO. Taught us so many things in such a short span of time. Was a first timer in MUN but i am confident enough to participate more in next MUN. Thank you.closing quote</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Nikhil Basfor</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>Learnt a lot throughout the 3 days session. It helped me gain confidence to present my points and it was sure a win or learn game.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Rishi Dutta</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>Nothing much for a feedback, everything went absolutely great and i personally had a LOT of fun and I'm looking forward for more conferences.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Bhaswar Agnivesh</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>It was a really great learning experience. I had a lot of fun in the conference and the socials was my favourite. NITSMUN community felt like family</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Review
