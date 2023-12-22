import Lottie from "lottie-react"
import previousLottie from '../../../assets/LottieAnimations/details.json'
import Countdown from "react-countdown"
import useTodos from "../../../Hooks/useTodos"

const PreviousTask = () => {
    const { previousTask } = useTodos();
    const futureDate = new Date(previousTask[0]?.deadline);
    const currentDate = new Date();
    const timeDifference = futureDate.getTime() - currentDate.getTime();
    return (
        <div className="px-1 md:px-2 pb-3">
            <h1 className="text-center font-bold text-lg mt-1 md:text-2xl lg:translate-y-4 xl:translate-y-10 hidden md:block text-gray-500">Your Previous Task</h1>
            <div className="grid md:grid-cols-12 md:gap-3 md:items-center">
                {
                    previousTask?.length ?
                        <div className="md:col-span-7 order-2 md:order-1 pb-3">
                            <div className="space-y-3 py-5 border shadow-black max-h-96 overflow-auto p-5 shadow rounded-lg">
                                <p className="font-bold text-center text-lg md:text-2xl">{previousTask[0]?.title}</p>
                                <p><span className="font-semibold">Description</span> : <span className="text-sm">{previousTask[0]?.description}</span></p>
                                <div className="flex items-center gap-4">
                                    <p>Ends in : </p>
                                    {
                                        timeDifference > 0 ? <Countdown className="font-bold" date={Date.now() + timeDifference} /> :
                                            <p className="text-red-500 font-bold">Time Over</p>
                                    }

                                </div>
                                <p><span className="font-semibold">Priority</span> : <span className="text-sm">{previousTask[0]?.priority}</span></p>
                            </div>
                        </div>
                        :
                        <div className="md:col-span-7 order-2 md:order-1 pb-3 text-center font-bold text-lg md:text-2xl">No previous task found</div>
                }

                <div className="md:col-span-5 order-1 md:order-2">
                    <Lottie animationData={previousLottie} loop={true} />
                </div>
            </div>

        </div>
    )
}

export default PreviousTask