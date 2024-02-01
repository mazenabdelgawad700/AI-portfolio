import './Brand.css'

import Googel from '../../../assets/google.png';
import slack from '../../../assets/slack.png';
import atlissan from '../../../assets/atlassian.png';
import dropbox from '../../../assets/dropbox.png';
import shopify from '../../../assets/shopify.png';

function Brand() {
  return (
    <div >
      <ul className='sponsors d-flex align-items-center justify-content-center gap-5 mt-5'>
        <li> 
          <img src={Googel} alt="Googel" /> 
        </li>

        <li> 
          <img src={slack} alt="slack" /> 
        </li>

        <li> 
          <img src={atlissan} alt="atlissan" /> 
        </li>

        <li> 
          <img src={dropbox} alt="dropbox" /> 
        </li>

        <li> 
          <img src={shopify} alt="shopify" /> 
        </li>

      </ul>
    </div>
  )
}

export default Brand
