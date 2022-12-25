import {Component} from 'react'

class StateDetails extends Component {
  componentDidMount() {
    this.carryForwardStateDetails()
  }

  carryForwardStateDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const baseUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }

    const totalCases = await fetch(baseUrl, options)
    const jsonData = await totalCases.json()
    console.log(jsonData[`${stateCode}`])
  }

  render() {
    return (
      <>
        <div>Hello</div>
      </>
    )
  }
}

export default StateDetails
