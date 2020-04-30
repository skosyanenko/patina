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

    exitProfile = () => {
        this.isAuth = false;
        this.userInfo = {};
        this.token = '';
        return CacheData.deleteCookie('auth');
    }

    setAuth = ({token, userInfo: {id, username, email}}) => {
        this.userInfo = {id, username, email};
        this.token = token;

        CacheData.setCookie('auth', JSON.stringify({
            token: this.token,
            userInfo: this.userInfo
        }));

        this.isAuth = true;
    }
}

export default new Auth();