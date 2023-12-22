import axios from "axios";

const instance = axios.create({
    baseURL: 'https://todo-server-inky.vercel.app',
    headers: { token: localStorage.getItem('token') }
});

const usePublicAxios = () => {
    return instance
}

export default usePublicAxios