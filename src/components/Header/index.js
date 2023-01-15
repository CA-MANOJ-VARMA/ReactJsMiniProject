import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <>
        <div className="css-navbar-container">
          <ul className="css-ul-list-container">
            <li key="1">
              <Link to="/" className="css-LINK-itself">
                <p className="css-COVID19INDIA-style">COVID19INDIA</p>
              </Link>
            </li>
          </ul>
          <ul className="css-ul-list-container">
            <li key="2">
              <div className="css-home-about-list-itself">
                <Link to="/" className="css-LINK-itself">
                  <button type="button" className="css-Home-paragraph">
                    Home
                  </button>
                </Link>
                <Link to="/About" className="css-LINK-itself">
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
