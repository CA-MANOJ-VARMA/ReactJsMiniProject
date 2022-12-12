import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <div className="css-navbar-container">
          <ul className="css-ul-list-container">
            <li>
              <Link to="/" className="css-LINK-itself">
                <p className="css-COVID19INDIA-style">
                  COVID19<span className="css-INDIA-style">INDIA</span>
                </p>
              </Link>
            </li>
            <li>
              <div className="css-home-about-list-itself">
                <Link to="/" className="css-LINK-itself">
                  <p className="css-Home-paragraph">Home</p>
                </Link>
                <Link to="/about" className="css-LINK-itself">
                  <p>About</p>
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
