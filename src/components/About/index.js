import {Component} from 'react'
import './index.css'

class About extends Component {
  state = {faqDetails: []}

  componentDidMount() {
    this.fetchFaqsDetail()
  }

  fetchFaqsDetail = async () => {
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
  }

  faqDetailsReturn = () => {
    const {faqDetails} = this.state
    console.log('faqDetails return')
    console.log(faqDetails)
    return (
      <div className="css-question-answer-whole-container">
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
            <div className="css-question-answer-container">
              <p className="css-question-para">{eachQuestion[0]}</p>
              <p className="css-answer-para">{answer}</p>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="css-about-container">
          <h1>About</h1>
          <h2>COVID-19 vaccines be ready for distribution</h2>
          {this.faqDetailsReturn()}
        </div>
      </>
    )
  }
}

export default About
