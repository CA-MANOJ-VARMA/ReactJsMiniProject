import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <>
        <div className="css-notfound-image-container">
          <img
            src="https://res.cloudinary.com/deem8dd5i/image/upload/v1672936702/covid19dashboard/Group_7484_aybwqk.png"
            className="css-notfound-image"
            alt="not found"
          />
          <h1 className="css-pagenotfound-heading">PAGE NOT FOUND</h1>
          <p className="css-pagenotfound-paragraph">
            we’re sorry, the page you requested could not be found Please go
            back to the homepage
          </p>
        </div>
      </>
    )
  }
}

export default NotFound
