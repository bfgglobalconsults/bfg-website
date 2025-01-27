import Cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";

const getLocalAccessToken = () => {
    try {
        const accessToken = Cookie.get("accessToken")
        return accessToken
    } catch (error) {
        return null;
  }
};

const getUser = () => {
    try {
        const user = Cookie.get("accessToken")
        return jwtDecode(user)
    } catch (error) {
        return null;
    }
};

const getToken = () => {
    try {
        const accessToken = Cookie.get("accessToken");
        const refreshToken = Cookie.get("refreshToken");

        if (accessToken && refreshToken) {
            const token = {
                accessToken,
                refreshToken
            }
            return token;
        }
        return null;

    } catch (error) {
        console.log(error);
        return null;
        
    }
};

const updateLocalAccessToken = (token) => {
    try {
        const accessTokenDecoded = jwtDecode(token.accessToken)
        const refreshTokenDecoded = jwtDecode(token.refreshToken)
        const accessTokenExpiry = new Date(accessTokenDecoded.exp * 1000)
        const refreshTokenExpiry = new Date(refreshTokenDecoded.exp * 1000)

        const accessTokenCookieOptions = {
            httpOnly: false,
            path: "/",
            sameSite: "strict",
            secure: process.env.NEXT_PUBLIC_NODE_ENV == "production",
        }

        const refreshTokenCookieOptions = {
            httpOnly: false,
            //   expires: refreshTokenExpiry,
            path: "/",
            sameSite: "strict",
            secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
        };

        Cookie.set("accessToken", token.accessToken, accessTokenCokieOptions);
        Cookie.set("refreshToken", token.refreshToken, refreshTokenCokieOptions);

       
    }
    catch (error) { 
        return false;
    }
}

const removeUser = () => {
    try {
        const token = Cookie.get("accessToken")
        if (token) {
            Cookie.remove('accessToken', { path: '/' })
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

const getExpiryDate = async (token) => {
    const decodedUser = jwtDecode(token?.refreshToken)
    return new Date(decodedUser.exp * 1000)
}

const isAccesExpired = () => {
    try {
        const accessToken = Cookie.get("accessToken")
        if (accessToken) {
            const decodedUser = jwtDecode(accessToken)
            return new Date().getTime() > new Date(decodedUser.exp * 1000 )
        }
        return true;
    } catch (error) {
        return true;
    }
}

const TokenService = {
    getLocalAccessToken,
    getUser,
    getToken,
    updateLocalAccessToken,
    removeUser,
    getExpiryDate,
    isAccesExpired
};

export default TokenService;