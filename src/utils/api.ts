import axios from 'axios'
import md5 from 'md5'

const publicKey = '150bd3a8b2a7b87da86235bcb0cd161a'
const privateKey = '21677422090558d3233c6a3181c77f2e0a770e0c'
const timeStamp = new Date().getTime()
const hash = md5(timeStamp + privateKey + publicKey)

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: timeStamp,
    apikey: publicKey,
    hash
  }
})

export default api