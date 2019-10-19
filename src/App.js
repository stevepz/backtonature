import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import ParkList from './components/ParkList';
import ParkDetail from './components/ParkDetail';
import Footer from './components/Footer';
import DisplayIt from './components/DisplayIt';
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
    console.log(location)
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
    // parkCode = parkCode[0].slice(1, 3)
    let stateName = selected.slice(3)
    console.log('handlesescalect', event)
    console.log('handleselect', stateCode)
    console.log('handleselect', stateName)
    // this.setState({
    //   category: category
    // })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // let pic = await getpic(this.state.category)
    console.log('handlesubmit', event)
    // this.setState({
    //   pic: pic
    // })
  }




  render() {
    console.log('handlesubmit', this.handleSubmit)
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




