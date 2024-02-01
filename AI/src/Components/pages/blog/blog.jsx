
import './blog.css'
import rectngle from '../../../assets/Rectangle 22-4.png'
import Rectangle22 from '../../../assets/Rectangle 22.png'
import Rectangle22_1 from '../../../assets/Rectangle 22-1.png'
import Rectangle22_2  from '../../../assets/Rectangle 22-2.png'
import Rectangle22_3  from '../../../assets/Rectangle 22-3.png'
export default function blog() {
  return (
    <div className='blog'>
      <h1 className='main-header mb-5 mw-100' style={{width: "700px", fontSize: "4rem"}}>
        A lot is happening, 
        We are blogging about it.
      </h1>

      <div className="row">

        <div className="col-lg-4">

          <div className="blog__box">

            <div className="img">
              <img src={rectngle} alt="rectngle"  style={{width: "100%"}}/>
            </div>

            <div className="blog__details position-relative p-3"
              style={{ backgroundColor: "#042C54", height: "688px" }}>
              <p>Sep 26, 2021</p>
              <h3>
                GPT-3 and Open  AI is the future. Let us exlore how it is?
              </h3>
              <span className='position-absolute mb-3' style={{bottom: "0"}}>Read Full Article</span>
            </div>

          </div>
        </div>

        <div className="col-lg-7 blob__boxs-container" style={{flexGrow: "1"}}>

          <div className="row">

            <div className="blog__second-box col-lg-6">
              <div className="img">
                <img src={Rectangle22} alt="Rectangle22" style={{width: "100%"}} />
              </div>
              <div className="blog__second-box-details p-3 position-relative"
                style={{ backgroundColor: "#042C54", height: "200px" }}>
                <p>Sep 26, 2021</p>
                <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                <span className='position-absolute mb-3' style={{bottom: "0"}}>Read Full Article</span>
              </div>
            </div>

            <div className="blog__second-box col-lg-6">
              <div className="img">
                <img src={Rectangle22_1} alt="Rectangle22" style={{width: "100%"}} />
              </div>
              <div className="blog__second-box-details p-3 position-relative"
                style={{ backgroundColor: "#042C54", height: "200px" }}>
                <p>Sep 26, 2021</p>
                <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                <span className='position-absolute mb-3' style={{bottom: "0"}}>Read Full Article</span>
              </div>
            </div>

            <div className="blog__second-box col-lg-6 mt-5">
              <div className="img">
                <img src={Rectangle22_2} alt="Rectangle22" style={{width: "100%"}} />
              </div>
              <div className="blog__second-box-details p-3 position-relative"
                style={{ backgroundColor: "#042C54", height: "200px" }}>
                <p>Sep 26, 2021</p>
                <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                <span className='position-absolute mb-3' style={{bottom: "0"}}>Read Full Article</span>
              </div>
            </div>

            <div className="blog__second-box col-lg-6 mt-5">
              <div className="img">
                <img src={Rectangle22_3} alt="Rectangle22" style={{width: "100%"}} />
              </div>
              <div className="blog__second-box-details p-3 position-relative"
                style={{ backgroundColor: "#042C54", height: "200px" }}>
                <p>Sep 26, 2021</p>
                <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                <span className='position-absolute mb-3' style={{bottom: "0"}}>Read Full Article</span>
              </div>
            </div>

        </div>

        </div>
      </div>
      

    </div>
  )
}
