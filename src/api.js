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
      (`${URL}/${action.id}/comments`, action)
  .then(res => res.status)
} 


