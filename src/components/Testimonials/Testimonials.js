import React, { useRef, useState } from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const Testimonials = () => {
  
  // Method 1:
  // const [x,setX] = useState(0)
  // const ref = useRef();
  
  // const slideForward = () => {
  //   if(x > -50){
  //     setX(prevX => (prevX-25))
  //   }
  // }
  // const slideBackward = () => {
  //   if(x < 0){
  //     setX(prevX => (prevX+25))
  //   }
  // }
  
  // // NOTE!
  // // you call setX, the state updates correctly, 
  // // but ref.current.style.transform = translateX(${x}%) 
  // // is using the old value of x 
  // // because state changes don't happen instantaneously.
  // // To fix this, you should use the updated value of x 
  // // directly inside the useEffect hook, 
  // // which will trigger the translateX as soon as the state updates. 
  
  // // ref.current.style.transform = translateX(${x}%) is a side effect
  // // i.e. it affect smth outside of the scope of the component
  // // Thus, should be handled by useEffect

  // useEffect(() => {
  //   ref.current.style.transform = `translateX(${x}%)`
  // }, [x])

  // Method 2:
  const ref = useRef()
  let tx = 0;

  const slideForward = () => {
    if(tx > -50){
      tx -= 25
      ref.current.style.transform = `translateX(${tx}%)`
    }
  }
  const slideBackward = () => {
    if(tx < 0){
      tx += 25
      ref.current.style.transform = `translateX(${tx}%)`
    }
  }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
        <ul ref={ref}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt=""/>
                <div>
                  <h3>William Jackson</h3>
                  <span>Uralsk, Kazakhstan</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Jaiyq School was one of the best 
                decisions I've ever made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly exceeded
                my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt=""/>
                <div>
                  <h3>William Jackson</h3>
                  <span>Almaty, Kazakhstan</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Jaiyq School was one of the best 
                decisions I've ever made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly exceeded
                my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt=""/>
                <div>
                  <h3>William Jackson</h3>
                  <span>Astana, Kazakhstan</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Jaiyq School was one of the best 
                decisions I've ever made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly exceeded
                my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt=""/>
                <div>
                  <h3>William Jackson</h3>
                  <span>Uralsk, Kazakhstan</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Jaiyq School was one of the best 
                decisions I've ever made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly exceeded
                my expectations.
              </p>
            </div>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Testimonials
