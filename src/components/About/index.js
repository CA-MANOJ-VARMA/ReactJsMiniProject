import {Component} from 'react'
<<<<<<< HEAD
import Loader from 'react-loader-spinner'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  succes: 'SUCCESS',
  failurre: 'FAILURE',
}

class About extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    faqDetails: [],
  }
=======
import './index.css'

class About extends Component {
  state = {faqDetails: []}
>>>>>>> 203527472a87eed531f08a56198ee368d28986f9

  componentDidMount() {
    this.fetchFaqsDetail()
  }

  fetchFaqsDetail = async () => {
<<<<<<< HEAD
    this.setState({apiStatus: apiStatusConstants.progress})
=======
>>>>>>> 203527472a87eed531f08a56198ee368d28986f9
    const faqDetailsPush = []
    const baseUrl = 'https://apis.ccbp.in/covid19-faqs'
    const options = {
      method: 'GET',
    }
    const fetchDetails = await fetch(baseUrl, options)
    const jsonData = await fetchDetails.json()
    const faqsDataObject = jsonData.faq
    const faqsData = Object.entries(faqsDataObject)
    console.log(faqsDataObject)
    faqsData.map(eachItem =>
      faqDetailsPush.push([eachItem[1].question, eachItem[1].answer]),
    )
    this.setState({faqDetails: faqDetailsPush})
    console.log('faqDetails push')
    console.log(faqDetailsPush)
<<<<<<< HEAD
    this.setState({apiStatus: apiStatusConstants.success})
  }

  renderLoader = () => (
    <div testid="aboutRouteLoader" className="products-loader-container">
      <Loader
        type="TailSpin"
        color="#0b69ff"
        testid="loader"
        height="50"
        width="50"
      />
    </div>
  )

=======
  }

>>>>>>> 203527472a87eed531f08a56198ee368d28986f9
  faqDetailsReturn = () => {
    const {faqDetails} = this.state
    console.log('faqDetails return')
    console.log(faqDetails)
    return (
<<<<<<< HEAD
      <ul
        testid="faqsUnorderedList"
        className="css-question-answer-whole-container"
      >
=======
      <ul className="css-question-answer-whole-container">
>>>>>>> 203527472a87eed531f08a56198ee368d28986f9
        {faqDetails.map(eachQuestion => {
          const answer = eachQuestion[1]
          console.log(eachQuestion[1])
          if (
            eachQuestion[1].includes(
              '<a href="https://api.covid19india.org" target="_blank">api.covid19india.org</a>',
            )
          ) {
            console.log('true')
            eachQuestion[1].replaceAll(
              '<a href="https://api.covid19india.org" target="_blank">api.covid19india.org</a>',
              'None',
            )
          }

          return (
<<<<<<< HEAD
            <li className="css-question-answer-container" key={eachQuestion[0]}>
=======
            <li className="css-question-answer-container">
>>>>>>> 203527472a87eed531f08a56198ee368d28986f9
              <p className="css-question-para">{eachQuestion[0]}</p>
              <p className="css-answer-para">{answer}</p>
            </li>
          )
        })}
      </ul>
    )
  }

<<<<<<< HEAD
  onFetchingAboutDetails = apiStatus => {
    switch (apiStatus) {
      case apiStatusConstants.progress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.faqDetailsReturn()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
=======
  render() {
>>>>>>> 203527472a87eed531f08a56198ee368d28986f9
    return (
      <>
        <div className="css-about-container">
          <h1>About</h1>
          <h2>COVID-19 vaccines be ready for distribution</h2>
<<<<<<< HEAD
          {this.onFetchingAboutDetails(apiStatus)}
=======
          {this.faqDetailsReturn()}
>>>>>>> 203527472a87eed531f08a56198ee368d28986f9
        </div>
      </>
    )
  }
}

export default About
