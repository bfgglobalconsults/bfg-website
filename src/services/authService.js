import httpService from "./httpService";
export const loginUser = async (userData) => {
	try {
		const res = await httpService.post("/auth/login", userData);
		return res.data;
	} catch (err) {
		let errorMessage = "Unable to login. Please try again later.";
		if (err.response && err.response.data && err.response.data.message) {
			errorMessage = err.response.data.message;
		}
		throw new Error(errorMessage);
	}
};

export const registerUser = async (form) => {
	try {
		const response = await httpService.post("/auth/register", form);
		return response.data;
	} catch (err) {
		let errorMessage;
		if (err.response && err.response.data && err.response.data.message) {
			errorMessage = err.response.data.message;
		}
		throw new Error(errorMessage);
	}
};

export const verifyAccount = async (form) => {
	try {
		const res = await httpService.post("/auth/verify-user", form);
		return res.data;
	} catch (err) {
		let errorMessage;
		if (err.response && err.response.data && err.response.data.message) {
			errorMessage = err.response.data.message;
		}
		throw new Error(errorMessage);
	}
};

export const requestResetPassword = async (email) => {
	try {
		const res = await httpService.post("/auth/forgot-password", email);

		return res.data;
	} catch (err) {
		let errorMessage;
		if (err.response && err.response.data && err.response.data.message) {
			errorMessage = err.response.data.message;
		}
		throw new Error(errorMessage);
	}
};

export const verifyToken = async (form) => {
	console.log(form);
	try {
		const res = await httpService.post("/auth/verify-password-reset-token", form);
		return res.data;
	} catch (err) {
		let errorMessage;
		if (err.response && err.response.data && err.response.data.message) {
			errorMessage = err.response.data.message;
		}
		throw new Error(errorMessage);
	}
};

export const resetPassword = async (password, token) => {
	try {
		const res = await httpService.post(`/auth/reset-password/${token}`, {
			new_password: password,
		});
		return res.data;
	} catch (err) {
		let errorMessage;
		if (err.response && err.response.data && err.response.data.message) {
			errorMessage = err.response.data.message;
		}
		throw new Error(errorMessage);
	}
};

export const changePassword = async (form) => {
	try {
		const response = await httpService.patch(
			`/employee-auth/reset/password`,
			form,
		);
		return response.data;
	} catch (err) {
		let errorMessage = "Couldn't change password, Please try again later.";
		if (err.response && err.response.data && err.response.data.message) {
			errorMessage = err.response.data.message;
		}
		throw new Error(errorMessage);
	}
};

export const logoutUser = async () => {
	try {
		const res = await httpService.get("/employee-auth/logout");
		return res.data;
	} catch (err) { 
		let errorMessage;
		if (err.response && err.response.data && err.response.data.message) {
			errorMessage = err.response.data.message;
		}
		throw new Error(errorMessage);
	 }
};