import './footer.css'
import GPT3 from '../../../assets/GPT-3.svg'
export default function Footer() {
  return (
    <div className='footer position-relative'> 
      <h1 className="main-header text-center m-auto mw-100">
        Do you want to step in to the future before others
      </h1>
      <button className='outline-light'>Request Early Access</button>

      <div className="container">
      
      <div className="row mw-100 justify-content-between" style={{paddingTop: "10rem"}}>

        <div className="col-lg-4 box">
          <img src={GPT3} alt="GPT3" className='mb-4' />
          <p>
              Crechterwoord K12 182 DK
              <br />
              Alknjkcb, All Rights Reserved
          </p>
        </div>
        
        <div className="col-lg-2 box">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Overons</a></li>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Counters</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="col-lg-3 box">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="col-lg-3 box">
          <h3>Get in touch</h3>
          <ul>
            <li>
              Crechterwoord K12
              <br />
              182 DK Alknjkcb
            </li>
            <li>085-132567</li>
            <li><a href="#">info@payme.net</a></li>
          </ul>
        </div>
      </div>

      </div>
      <div className="copyRight text-center pt-3 pb-3 mt-5">
        <p className='m-0'>&copy;{new Date().getFullYear()} GPT-3. . All rights reserved.</p>
      </div>
    </div>
  )
}