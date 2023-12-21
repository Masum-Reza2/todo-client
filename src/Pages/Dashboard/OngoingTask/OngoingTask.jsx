import Lottie from "lottie-react"
import ongoingLottie from '../../../assets/LottieAnimations/ongoing.json'

const OngoingTask = () => {
    return (
        <div className="px-1 md:px-2 pb-3">
            <h1 className="text-center font-bold text-lg mt-1 md:text-2xl lg:translate-y-4 xl:translate-y-10 hidden md:block text-gray-500">Your todos</h1>
            <div className="grid md:grid-cols-12 md:gap-3 md:items-center">
                <div className="md:col-span-7 order-2 md:order-1 overflow-x-auto">
                    <h1 className="text-center font-bold text-lg md:text-2xl mt-1 md:hidden text-gray-500 mb-1">Your todos</h1>
                    ongoing
                </div>
                <div className="md:col-span-5 order-1 md:order-2">
                    <Lottie animationData={ongoingLottie} loop={true} />
                </div>
            </div>

        </div>
    )
}

export default OngoingTask