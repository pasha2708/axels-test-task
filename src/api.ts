import axios from "axios";
import { CommentTypes } from "./redux/reducer";

interface PostCommentTypes {
	imageId: number;
	id: number;
	author: string;
	text: string;
}

interface DeleteCommentTypes {
	commentId: number;
	imageId: number;
}

const URL = "http://localhost:5000/images";
const URL2 = "https://axels-gallery-be.herokuapp.com/images";

export const fetchPreview = async () => {
	const response = await axios.get(URL2);
	return response.data;
};

export const fetchImage = async (id: number) => {
	const response = await axios.get(`${URL2}/${id}`);
	return response.data;
};

export const postComment = async (action: PostCommentTypes) => {
	const { imageId, ...data } = action;
	const response = await axios.post(`${URL2}/${imageId}/comments`, data);
	return response.data;
};

export const deleteComment = async ({
	commentId,
	imageId,
}: DeleteCommentTypes) => {
	const response = await axios.delete(
		`${URL2}/${imageId}/comments/${commentId}`
	);
	return response.data;
};

export const editComment = async (payload: any) => {
	const { imageId, ...data } = payload;
	const response = await axios.patch(
		`${URL2}/${imageId}/comments/${payload.id}`,
		data
	);
	return response.data;
};
