import React from 'react';
import { getPark } from '../services/parks-api-helper';

export default class ParkDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkCode: '',
      parkDetail: ''
    }
  }


  componentDidMount = async () => {

    let parkCode = Object.values(this.props)
    parkCode = parkCode[0].slice(1)

    let parkDetail = await getPark(parkCode)
    this.setState({
      parkDetail: parkDetail
    })
  }

  render() {
    const parkDetail = this.state.parkDetail
    if (parkDetail) {
      return (
        <div id="park-d">
          {
            parkDetail.data.map(
              (park) =>
                (
                  <div className="park-d-container" key={park.id}>
                    <h1 className="park-d-name">{park.fullName}</h1>
                    <a className="park-d-site-url" href="{park.url}">Park's Official Site</a>
                    <h2 className="park-d-description">{park.description}</h2>
                    <h2 className="park-d-states">{park.states}</h2>
                    <h2 className="park-d-address">{park.address}</h2>
                    <h2 className="park-d-directions-info">{park.directionsInfo}</h2>
                    <a className="park-d-directions-url" href="{park.directionsUrl}">Directions</a>
                    <h2 className="park-d-weather-info">{park.weatherInfo}</h2>
                    <div className="park-d-fees">
                      {(park.entranceFees > 0) ?
                        (
                          park.entranceFees.map(
                            (parkFees) => (
                              <>
                                <h3>{parkFees.title}</h3>
                                <h3>COST: {parkFees.cost}</h3>
                                <h3>{parkFees.description}</h3>
                              </>
                            )
                          )
                        )
                        : <> </>
                      }
                    </div>

                    <div className="park-d-images">
                      {(park.images.length > 0) ?
                        <>
                          {park.images.map(
                            (parkImages) =>
                              (<img className="park-d-image" key={parkImages.id}
                                src={parkImages.url}
                                alt={parkImages.altText} />
                              )
                          )
                          }
                        </>
                        :
                        <div className="park-d-filler">
                        </div>
                      }
                    </div>
                  </div>
                )
            )
          }
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}