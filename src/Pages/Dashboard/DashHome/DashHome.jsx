import Lottie from "lottie-react"
import completedLottie from '../../../assets/LottieAnimations/welcomeHome.json'
import { Typewriter } from "react-simple-typewriter"
import useTodos from "../../../Hooks/useTodos";
import { useEffect } from "react";
import useGlobal from "../../../Hooks/useGlobal";

const message = [
    "I'm a Task Manager.",
    "Manage tasks effortlessly.",
    "Save, update, and delete tasks with ease.",
    "Stay organized and boost productivity.",
    "User-friendly task management awaits.",
    "Simplify your daily workflow."
];

const DashHome = () => {
    const { user } = useGlobal();
    const { refetch } = useTodos();
    useEffect(() => {
        refetch();
    }, [user])
    return (
        <div className="grid grid-cols-12 py-5 md:py-0 md:place-items-center">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                <Lottie animationData={completedLottie} loop={true} />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center order-1 md:order-2">
                <h1 className='text-xl md:text-2xl font-bold'>Hello <span className='text-orange-500'>Team DevTown.</span></h1><span className='text-green-700 text-xl md:text-2xl font-bold text-center min-h-[15vh]'>
                    <Typewriter words={message} loop={false} />
                </span>
            </div>
        </div>
    )
}

export default DashHome