import React from 'react';
import './App.css';
import DisplayIt from
  './components/DisplayIt';
import { getParkList } from
  './services/parks-api-helper.js'
import { getLocation } from
  './services/geo-api-helper.js'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parkList: '',
      park: {},
      stateList: [],
      stateCode: "",
      stateName: ""
    }
  }

  componentDidMount = async () => {
    let location = await getLocation()
    this.setState({
      stateName: location.region_name,
      stateCode: location.region_code
    })

    let parkList = await getParkList(this.state.stateCode)
    this.setState({
      parkList: parkList
    })
  }

  handleSelect = (event) => {
    let selected = event.target.value
    let stateCode = selected.slice(0, 2)
    let stateName = selected.slice(3)
    this.setState({
      newStateCode: stateCode,
      newStateName: stateName
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let parkList = await getParkList(this.state.newStateCode)
    this.setState({
      parkList: parkList,
      stateName: this.state.newStateName,
      stateCode: this.state.newStateCode
    })
    document.getElementById('header-link').click();
  }

  render() {
    return (
      <DisplayIt
        parkList={this.state.parkList}
        stateName={this.state.stateName}
        handleSelect={this.handleSelect}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
export default App;