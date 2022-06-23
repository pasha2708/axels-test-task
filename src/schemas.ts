import * as yup from "yup";

export const validationSchema = yup.object({
	author: yup
		.string()
		.required("Введите ваше имя")
		.min(3, "Минимальное количество символов: 3")
		.max(15, "Максимальное количество символов: 15"),
	text: yup
		.string()
		.required("Введите комментарий")
		.min(5, "Минимальное количество символов: 5")
		.max(100, "Максимальное количество символов: 100"),
});
