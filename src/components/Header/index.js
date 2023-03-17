import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <>
        <div className="css-navbar-container">
          <ul className="css-ul-list-container">
            <li key="covid19india">
              <Link to="/" className="css-LINK-itself">
                <p>
                  COVID19<span className="css-INDIA-style">INDIA</span>
                </p>
              </Link>
            </li>
            <li key="homebuttonheader">
              <div className="css-home-about-container">
                <Link to="/" className="css-LINK-itself">
                  <button type="button" className="css-Home-paragraph">
                    Home
                  </button>
                </Link>
                <Link to="/about" className="css-LINK-itself">
                  <button type="button" className="css-Home-paragraph">
                    About
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Header
