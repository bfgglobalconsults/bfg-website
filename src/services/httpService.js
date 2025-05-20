import axios from "axios";
import { baseURL } from "../shared/url";
import {
	getLocalAccessToken,
	getLocalRefreshToken,
	updateLocalAccessToken,
	removeToken,
	updateLocalRefreshToken,
} from "./tokenService";

let isRefreshing = false; 
let refreshSubscribers = []; 

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Function to refresh access token
const refreshAccessToken = async (cancelToken) => {
	try {
		console.log("Refreshing access token...");
		isRefreshing = true;
		const refreshToken = getLocalRefreshToken();

		// Request new access token using refresh token
		const response = await axiosInstance.post(
			"/employee-auth/refresh/token",
			{
				refreshToken: refreshToken,
			},
			{ cancelToken },
		);

		const { access_token, refresh_token } = response.data;
		console.log("New access token response:=>", response);
		console.log("New access token received:", access_token);
		updateLocalAccessToken(access_token);
		updateLocalRefreshToken(refresh_token);
		isRefreshing = false; 

		// Resolve all pending requests with the new access token
		refreshSubscribers.forEach((subscriber) => subscriber(access_token));
		refreshSubscribers = [];
	} catch (error) {
		console.error("Error refreshing access token:", error);
		isRefreshing = false;
		return Promise.reject(error);
	}
};

axiosInstance.interceptors.request.use(
	async (config) => {
		const access_token = getLocalAccessToken();
		if (access_token !== null) {
			config.headers["Authorization"] = `Bearer ${access_token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err) => {
		const originalRequest = err.config;

		if (originalRequest.url !== "/employee-auth/signin" && err.response) {
			if (err.response.status === 401 && !originalRequest._retry) {
				console.log("Received 401 error. Refreshing access token...");
				if (!isRefreshing) {
					// Refresh token if it hasn't been refreshed already
					const source = axios.CancelToken.source();
					await refreshAccessToken(source.token);
					source.cancel("HTTP requests cancelled after token refresh");
				}

				// Create a new promise to return the access token
				const retryOriginalRequest = new Promise((resolve) => {
					refreshSubscribers.push((access_token) => {
						originalRequest.headers["Authorization"] = `Bearer ${access_token}`;
						resolve(axiosInstance(originalRequest));
					});
				});

				return retryOriginalRequest;
			}
		}

		if (err.response && err.response.status === 401) {
			console.log("Received 401 error. Removing token...");
			removeToken();
		}

		return Promise.reject(err);
	},
);

const httpService = {
	get: (url, config) =>
		axiosInstance.get(url, { ...config, cancelToken: config?.cancelToken }),
	post: (url, data, config) =>
		axiosInstance.post(url, data, {
			...config,
			cancelToken: config?.cancelToken,
		}),
	put: (url, data, config) =>
		axiosInstance.put(url, data, { ...config, cancelToken: config?.cancelToken }),
	delete: (url, config) =>
		axiosInstance.delete(url, { ...config, cancelToken: config?.cancelToken }),
	patch: (url, data, config) =>
		axiosInstance.patch(url, data, {
			...config,
			cancelToken: config?.cancelToken,
		}),
};

export default httpService;