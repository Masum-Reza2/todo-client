import Lottie from "lottie-react"
import useGlobal from "../Hooks/useGlobal";
import { useParams } from "react-router-dom";
import useSecureAxios from "../Hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import taskLottie from '../assets/LottieAnimations/addTask.json'
import Countdown from "react-countdown";


const TodoDetails = () => {

    const { user } = useGlobal();
    const { id } = useParams();
    const secureAxios = useSecureAxios();
    const { data: oldTodo = {} } = useQuery({
        queryKey: [id],
        queryFn: async () => {
            const res = await secureAxios.get(`/singleTodos/${id}?email=${user?.email}`)
            return res?.data;
        }
    })

    const futureDate = new Date(oldTodo?.deadline);
    const currentDate = new Date();
    const timeDifference = futureDate.getTime() - currentDate.getTime();

    return (
        <div className="px-1 md:px-2">
            <div className="grid md:grid-cols-12 md:gap-3 md:items-center">
                <div className="md:col-span-7 order-2 md:order-1 pb-3">
                    <div className="space-y-3 py-5 border max-h-96 overflow-auto p-5 shadow shadow-black rounded-lg">
                        <p className="font-bold text-center text-lg md:text-2xl">{oldTodo?.title}</p>
                        <p><span className="font-semibold">Description</span> : <span className="text-sm">{oldTodo?.description}</span></p>
                        <div className="flex items-center gap-4">
                            <p>Ends in : </p>
                            {
                                timeDifference > 0 ? <Countdown className="font-bold" date={Date.now() + timeDifference} /> :
                                    <p className="text-red-500 font-bold">Time Over</p>
                            }

                        </div>
                        <p><span className="font-semibold">Priority</span> : <span className="text-sm">{oldTodo?.priority}</span></p>
                    </div>
                </div>
                <div className="md:col-span-5 order-1 md:order-2">
                    <Lottie animationData={taskLottie} loop={true} />
                </div>
            </div>

        </div>
    )
}

export default TodoDetails