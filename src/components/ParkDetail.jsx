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
    console.log('here4', this.props.parkCode)

    let parkDetail = await getPark(this.props.parkCode)
    this.setState({
      parkDetail: parkDetail
    })
    console.log('here5', this.state.parkDetail)
    // console.log('here6', this.state.parkDetail.data[0].images[0].url)
  }

  render() {
    const parkDetail = this.state.parkDetail
    console.log('asd', parkDetail.data)
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

//******************* */

// return (
//   <div id="park">
//     <div id="park-list-div">
//       <h2 className="parks">PARK Detail</h2>
//       <div id="park-list-div2">
//       </div>
//     </div>
//   </div>
// )
// }