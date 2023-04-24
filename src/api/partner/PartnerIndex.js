import axios from 'axios'

const baseURL = 'https://dev-api.ecclaiyo.com'

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
}

const baseApiInstance = axios.create({
  baseURL,
  headers,
})

export default baseApiInstance
