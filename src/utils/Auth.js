const Auth = {
    signOut() {
        localStorage.removeItem("token");
    },
    isAuth() {
        return localStorage.getItem("isLogin");
    },
};
export default Auth;
