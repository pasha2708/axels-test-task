import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImageTypes {
	id: number;
	url: string;
}

export interface FullImageTypes {
	id: number;
	url: string | undefined;
	comments?: CommentTypes[];
}

export interface CommentTypes {
	id: number;
	date: number;
	author: string;
	text: string;
}

export interface BasicStateTypes {
	images: ImageTypes[];
	fullImage: FullImageTypes;
}

const initialState: BasicStateTypes = {
	images: [],
	fullImage: {
		id: 0,
		url: "",
	},
};

const initialFullImage: FullImageTypes = {
	id: 0,
	url: undefined,
	comments: [],
};

export const reducer = createSlice({
	name: "gallery",
	initialState,
	reducers: {
		setImages: (state, action) => {
			state.images = action.payload;
		},
		setFullImage: (state, action) => {
			state.fullImage = action.payload;
		},
		clearFullImage: (state) => {
			state.fullImage = initialFullImage;
		},
		// decrement: (state) => {
		// 	state = 1;
		// },
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload;
		// },
	},
});

export const { setImages, setFullImage, clearFullImage } = reducer.actions;

export default reducer.reducer;
