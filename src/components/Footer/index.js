import './index.css'
import {Component} from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="css-footer-container">
        <p className="css-COVID19INDIA-style">
          COVID19<span className="css-INDIA-style">INDIA</span>
        </p>
        <p>we stand with everyone fighting on the front lines</p>
        <div className="css-icon-container">
          <img
            src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776775/covid19dashboard/Vector_1_ayefvv.png"
            alt="github"
            className="css-icon-itself"
          />
          <img
            src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776775/covid19dashboard/instagram_1_gb27tx.png"
            alt="instagram"
            className="css-icon-itself"
          />
          <img
            src="https://res.cloudinary.com/deem8dd5i/image/upload/v1670776775/covid19dashboard/path3611_1_wefmpy.png"
            alt="twitter"
            className="css-icon-itself"
          />
        </div>
      </div>
    )
  }
}

export default Footer
