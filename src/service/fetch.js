import axios from "axios"

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com'

export async function getPost(path) {
  const resp = await axios.get(`${API_ENDPOINT}/${path}`)
  return resp
}