import axios from "axios";
import { CommentTypes } from "./redux/reducer";

const URL = "https://boiling-refuge-66454.herokuapp.com/images";
const URL2 = "http://localhost:5000/images";

export const fetchPreview = async () => {
	const res = await axios.get(URL2);
	return res.data;
};

export const fetchImage = async (id: number) => {
	const response = await axios.get(`${URL2}/${id}`);
	return response.data;
};

export const postComment = async (action: CommentTypes) => {
	const res = await axios.post(`${URL2}/${action.id}/comments`, action);
	return res.status;
};
