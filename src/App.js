import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Header from './components/Header';
import ParkList from './components/ParkList';
import ParkDetail from './components/ParkDetail';
import Footer from './components/Footer';



import { getParkList, getPark } from
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
    }

  }

  componentDidMount = async () => {

    let stateCode = await getLocation(this.state.stateCode)
    this.setState({
      stateCode: stateCode
    })

    let parkList = await getParkList(this.state.stateCode)
    this.setState({
      parkList: parkList
    })


    // let park = await getPark(this.state.parkList.data[0].parkCode)
    // this.setState({
    //   park: park
    // })
    // console.log('park', this.state.park)


  }



  render() {
    return (
      <div className="App">
        <Header />

        {this.state.parkList ?
          <>
            <Route exact path="/" render={() =>
              (<ParkList
                parkList={this.state.parkList}
              />
              )}
            />
            <Route path='/:parkId' render={(props) =>
              (
                <ParkDetail
                  parkId={props.match.params.parkidId}
                />
              )}
            />
          </>
          :
          <p></p>
        }
        <Footer />
      </div>
    );
  }
}

export default App;




