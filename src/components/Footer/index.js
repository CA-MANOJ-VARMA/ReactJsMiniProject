import './index.css'
import {Component} from 'react'
import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

class Footer extends Component {
  render() {
    return (
      <div className="css-footer-container">
        <div className="css-COVID19INDIA-style">
          <p>
            COVID19<span className="css-INDIA-style">INDIA</span>
          </p>
        </div>
        <p>we stand with everyone fighting on the front lines</p>
        <div className="css-icon-container">
          <VscGithubAlt className="css-icon-itself" />
          <FiInstagram className="css-icon-itself" />
          <FaTwitter className="css-icon-itself" />
        </div>
      </div>
    )
  }
}

export default Footer
