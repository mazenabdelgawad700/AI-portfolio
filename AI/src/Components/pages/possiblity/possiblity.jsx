import './possiblity.css'
import feauter from '../../../assets/Feature Image.png'

export default function Possibilty() {
  return (
    <div className='possiblity'>
      <div className="row align-items-center">

        <div className="col-lg-6">
          <img src={feauter} alt="feauter" />
        </div>

        <div className="col-lg-5 mt-5">
          <h4 style={{ color: '#71E5FF' }} className='mb-3 mt-0'> Request Early Access to Get Started</h4>
          <h3 className='main-header ' style={{fontSize: "34px"}}>
            The possibilities are beyond your imagination
          </h3>
          <p className='mt-3' style={{color:'#81AFDD', lineHeight: "30px", fontSize: "1.2rem"}}  >
            Yet bed any for travelling assistance indulgence unpleasing.
            Not thoughts all exercise blessing.
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
          </p>
          <p className='mt-3' style={{color: "var(--color-subText)"}}>Request Early Access to Get Started</p>

        </div>

      </div>
    </div>
  )
}