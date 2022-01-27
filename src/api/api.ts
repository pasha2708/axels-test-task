import axios from 'axios';
import { CommentTypes } from '../redux/ducks/gallery';

const URL = 'https://boiling-refuge-66454.herokuapp.com/images';

export const fetchPreview = async () => {
  const res = await axios.get(URL);
  return res.data;
};

export const fetchImage = async (id: Number) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export const postComment = async (action: CommentTypes) => {
  const res = await axios
    .post(`${URL}/${action.id}/comments`, action);
  return res.status;
};
