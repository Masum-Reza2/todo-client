import { useQuery } from "@tanstack/react-query";
import useGlobal from "./useGlobal";
import useSecureAxios from "./useSecureAxios";

const useTodos = () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { data: myTodos = [], isPending: isLoading, refetch } = useQuery({
        queryKey: ['mytodos', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/todos/${user?.email}`)
            return (res?.data)
        }
    })
    return { myTodos, isLoading, refetch }
}

export default useTodos