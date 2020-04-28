import CacheData from './CacheData';

class Auth {
    userInfo = {
        id: null,
        userName: '',
        email: ''
    };

    token;

    isAuth = false;

    checkAuth() {
        const data = CacheData.getCookie('auth') || '{}';
        const { userInfo, token } = JSON.parse(data);

        if (token && token.length) {
            this.isAuth = true;
            this.token = token;
            this.userInfo = userInfo
        }
    }

    setAuth = (auth, {token, userInfo: {id, username, email}}) => {
        if (!auth) {
            this.isAuth = false;
            return CacheData.deleteCookie('token');
        }

        this.userInfo = {id, username, email};
        this.token = token;

        CacheData.setCookie('auth', JSON.stringify({
            token: this.token,
            userInfo: this.userInfo
        }));

        this.isAuth = auth;
    }
}

export default new Auth();