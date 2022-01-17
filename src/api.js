export const fetchAPI = (id = '') => {
  if (id) {
    return fetch (
      `https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then(response => response.json())  
  }
  else {return fetch (
    `https://boiling-refuge-66454.herokuapp.com/images`)
    .then(response => response.json()) } 
}

