import axios from 'axios';

export const getParkList = async (stateCode) => {
  console.log('state code', stateCode)

  let call =
    `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&fields=images&api_key=ewQFSORaMfttJIqbScHZgy1XH0YlngIEciUMrFXa`
  let response = await axios.get(call)
  return (response.data)
}
export const getPark = async (parkCode) => {
  console.log('park code', parkCode)
  let call =
    //  `https://developer.nps.gov/api/v1/articles?parkCode=${parkCode}&api_key=ewQFSORaMfttJIqbScHZgy1XH0YlngIEciUMrFXa`
    // `https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&api_key=ewQFSORaMfttJIqbScHZgy1XH0YlngIEciUMrFXa`
    //  `https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=ewQFSORaMfttJIqbScHZgy1XH0YlngIEciUMrFXa`
    //  `https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=ewQFSORaMfttJIqbScHZgy1XH0YlngIEciUMrFXa`
    //`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&fields=images,addresses,contacts,entranceFees&api_key=ewQFSORaMfttJIqbScHZgy1XH0YlngIEciUMrFXa`
    //`https://cors-anywhere.herokuapp.com/https://api.ipgeolocationapi.com/geolocate `
    `https://freegeoip.app/json/`



  let response = await axios.get(call)
  return (response.data)
}
