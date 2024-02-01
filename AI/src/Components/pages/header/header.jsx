/* eslint-disable react/no-unescaped-entities */

import './header.css'
import Button  from "../../container/Butttons/Button"
import  logo from '../../../assets/Header Illustration.png'
import  group from '../../../assets/Group 81.png'


function Header() {
  return (
    <div className=" mt-3" id='home'>
      
      <div className="row align-items-center">


      <div className="content col-lg-6">
        
        <header>
        <div className='gradient__text'>
          <p className='main-header fw-bold'>Let's Build Something amazing with GPT-3 OpenAI</p>
        </div>
        <p className='describtion'>

          Yet bed any for travelling assistance indulgence unpleasing.
          Not thoughts all exercise blessing. Indulgence way
          everything joy alteration boisterous the attachment. Party
          we years to order allow asked of.
          
        </p>
      </header>
        
        <form action="#" className="d-flex">
        <input type="email" name="email" id="email"
          placeholder="Your Email Address"  className="p-3" />
        <Button  className="active homeButton" text="Get Started"/>
      </form> 
        
      <p className='mt-4 testimonials'>
        <img src={group} alt="group" className='group '/>
        <p className='mb-0 ms-2'>1,600 people requested access a visit in last 24 hours</p>
      </p>

      </div>

      <div className="img col-lg-6">
          <img src={logo} alt="logo" className='logo' />
      </div>

      </div>
    </div>
  )
}

export default Header