import Lottie from "lottie-react";
import taskLottie from '../../../assets/LottieAnimations/addTask.json'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form"
import { useState } from "react";
import useGlobal from "../../../Hooks/useGlobal";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";


const AddTask = () => {
    const [loading, setLoading] = useState(false)
    const [priority, setPriority] = useState('');
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const todo = {
                email: user?.email,
                title: data?.title,
                description: data?.description,
                deadline: data?.deadline,
                priority,
                status: 'ongoing',
                previousWorked: true
            }
            await secureAxios.post('/todos', todo);
            setLoading(false);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Task added.",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/todoList')
        } catch (error) {
            toast.error(error?.message);
            setLoading(false)
        }
    }
    return (
        <div className="px-1 md:px-2">
            <h1 className="text-center font-bold text-lg mt-1 md:text-2xl lg:translate-y-4 xl:translate-y-10 hidden md:block text-gray-500">Write your next Goal!</h1>

            <div className="grid md:grid-cols-12 md:gap-3 md:items-center">
                <div className="md:col-span-7 order-2 md:order-1">
                    <h1 className="text-center font-bold text-lg md:text-2xl mt-1 md:hidden text-gray-500 mb-1">Write your next Goal!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 py-5 lg:pb-0">
                        <TextField {...register("title")} required className="w-full" id="outlined-basic" label="Title" variant="outlined" />

                        <TextField
                            {...register("description")}
                            required
                            className="w-full"
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                        />
                        <div className="space-x-5 text-gray-500">
                            <label htmlFor="deadline">Deadline : </label>
                            <input {...register("deadline")} className="border p-1 rounded-md shadow-sm" id="deadline" required min={new Date().toISOString().split('T')[0]}
                                type="date" />
                        </div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                            <Select
                                onChange={(e) => setPriority(e?.target?.value)}
                                value={priority}
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Priority"
                            >
                                <MenuItem value={'Low'}>Low</MenuItem>
                                <MenuItem value={'Moderate'}>Moderate</MenuItem>
                                <MenuItem value={'High'}>High</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" type="submit" className="mx-auto w-full border p-1 rounded-md">Add Task {loading && <TbFidgetSpinner className="text-white ml-3 animate-spin font-bold" />}</Button>
                    </form>
                </div>
                <div className="md:col-span-5 order-1 md:order-2">
                    <Lottie animationData={taskLottie} loop={true} />
                </div>
            </div>

        </div>
    )
}

export default AddTask