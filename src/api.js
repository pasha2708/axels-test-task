import axios from 'axios'

const URL = 'https://boiling-refuge-66454.herokuapp.com/images'

export const fetchPreview = () => {
    return axios.get
      (URL)
      .then(res => res.data)  
  }

export const fetchImage = (id) => {
  return axios.get 
    (`${URL}/${id}`)
    .then(res => res.data) 
} 

  export const postComment = (action) => {
    return axios.post 
    (`https://61e572d1c14c7a0017124c77.mockapi.io/123`, action)
      // (`${URL}/${action.id}/comments`, action)
  .then(res => res.status)
} 


