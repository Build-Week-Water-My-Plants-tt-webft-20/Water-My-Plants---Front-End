import axios from 'axios'

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token")
  return axios.create({
    baseURL: "https://water-my-plants-back-end.herokuapp.com/api",
    headers: {
      Authorization: token,
    },
  })
}