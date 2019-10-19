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
        parkDetail.data.map(
          (park) =>
            (
              <div className="parkd" key={park.id}>
                <h1 className="parkd-name">{park.fullName}</h1>
                <h2 className="parkd-name">{park.description}</h2>
                {park.images.map(
                  (parkImages) =>
                    (<img className="park-images" key={parkImages.id}
                      src={parkImages.url}
                      alt={parkImages.altText} />
                    )
                )
                }
              </div>
            )
        )
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