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
                    <h2 className="park-d-description">{park.description}</h2>
                    {park.images.map(
                      (parkImages) =>
                        (<img className="park-d-images" key={parkImages.id}
                          src={parkImages.url}
                          alt={parkImages.altText} />
                        )
                    )
                    }
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