import axios from 'axios';

export const getParkList = async (stateCode) => {
  let call =
    `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&fields=images&api_key=ewQFSORaMfttJIqbScHZgy1XH0YlngIEciUMrFXa`
  let response = await axios.get(call)
  return (response.data)
}
export const getPark = async (parkCode) => {
  let call =
    `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&fields=images,addresses,contacts,entranceFees&api_key=ewQFSORaMfttJIqbScHZgy1XH0YlngIEciUMrFXa`
  let response = await axios.get(call)
  return (response.data)
}

