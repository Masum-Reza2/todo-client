import Lottie from "lottie-react"
import ongoingLottie from '../../../assets/LottieAnimations/ongoing.json'
import useTodos from "../../../Hooks/useTodos"
import Spinner from "../../../Components/Spinner"
import Todos from "../TodoList/Todos"

const OngoingTask = () => {
    const { ongoingTask, isLoading } = useTodos()

    if (isLoading) return <Spinner />
    return (
        <div className="px-1 md:px-2 pb-3">
            <h1 className="text-center font-bold text-lg mt-1 md:text-2xl lg:translate-y-4 xl:translate-y-10 hidden md:block text-gray-500">{ongoingTask?.length ? 'Your Ongoing Tasks.' : 'You have no ongoing task.'}</h1>
            <div className="grid md:grid-cols-12 md:gap-3 md:items-center">
                <div className="md:col-span-7 order-2 md:order-1 overflow-x-auto">
                    <h1 className="text-center font-bold text-lg md:text-2xl mt-1 md:hidden text-gray-500 mb-1">{ongoingTask?.length ? 'Your Ongoing Tasks.' : 'You have no ongoing task.'}</h1>

                    <div className="overflow-y-auto h-[70vh] lg:h-[60vh] px-2 space-y-3 py-3">
                        {/* todos here */}
                        {
                            ongoingTask?.map((todo, index) => <Todos key={todo?._id} todo={todo} index={index} ongoing={true} />)
                        }
                    </div>

                </div>
                <div className="md:col-span-5 order-1 md:order-2">
                    <Lottie animationData={ongoingLottie} loop={true} />
                </div>
            </div>

        </div>
    )
}

export default OngoingTask