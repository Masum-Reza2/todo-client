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

    const previousTask = myTodos?.filter(todo => todo?.previousWorked === true);
    const ongoingTask = myTodos?.filter(todo => todo?.status === 'ongoing');
    const completedTask = myTodos?.filter(todo => todo?.status === 'completed');

    return { myTodos, isLoading, refetch, previousTask, ongoingTask, completedTask }
}

export default useTodos