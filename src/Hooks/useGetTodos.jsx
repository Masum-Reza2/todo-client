import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios"
import useGlobal from "./useGlobal";

const useGetTodos = async () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { data: myTodos } = useQuery({
        queryKey: ['todos', user?.email],
        queryFn: () => {
            secureAxios.get(`/todos/:${user?.email}`)
                .then(res => {
                    console.log(res?.data)
                    return res?.data;
                })
        }
    })
    return { myTodos }
}

export default useGetTodos