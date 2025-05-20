let serverUrl;
let socketUrl;

// if (process.env.NODE_ENV === "development") {
// 	serverUrl = "http://localhost:3300";
// 	socketUrl = "http://localhost:3300";
// }

// if (process.env.NODE_ENV === "production") {
// serverUrl = "https://amos-api-production.up.railway.app";
// socketUrl = "wss://amos-api-production.up.railway.app";
serverUrl = "https://bfg-website-api.onrender.com";
socketUrl = "wss://bfg-website-api.onrender.com" || "https://bfg-website-api.onrender.com";
// }

const baseURL = `${serverUrl}/api/v1`;

export { serverUrl, baseURL, socketUrl };