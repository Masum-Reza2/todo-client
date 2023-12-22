import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import useSecureAxios from "../Hooks/useSecureAxios";
import useGlobal from "../Hooks/useGlobal";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import Lottie from "lottie-react";
import taskLottie from '../assets/LottieAnimations/addTask.json'

const TodoEdit = () => {
    const [priority, setPriority] = useState('');
    const [loading, setLoading] = useState(false)

    const { user } = useGlobal();
    const { id } = useParams();
    const secureAxios = useSecureAxios();
    const { data: oldTodo = {} } = useQuery({
        queryKey: ['editQuery'],
        queryFn: async () => {
            const res = await secureAxios.get(`/singleTodos/${id}?email=${user?.email}`)
            return res?.data;
        }
    })
    // const { title, description, deadline, priority: oldPriority } = oldTodo;

    return (
        <div className="px-1 md:px-2">
            <h1 className="text-center font-bold text-lg mt-1 md:text-2xl lg:translate-y-4 xl:translate-y-10 hidden md:block text-gray-500">Update your Goal!</h1>

            <div className="grid md:grid-cols-12 md:gap-3 md:items-center">
                <div className="md:col-span-7 order-2 md:order-1">
                    <h1 className="text-center font-bold text-lg md:text-2xl mt-1 md:hidden text-gray-500 mb-1">Update your Goal!</h1>
                    <form className="space-y-3 py-5 lg:pb-0">
                        <TextField defaultValue={oldTodo?.title} required className="w-full" id="outlined-basic" variant="outlined" multiline />

                        <TextField
                            required
                            className="w-full"
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            defaultValue={oldTodo?.description}
                        />
                        <div className="space-x-5 text-gray-500">
                            <label htmlFor="deadline">Deadline : </label>
                            <input defaultValue={oldTodo?.deadline} className="border p-1 rounded-md shadow-sm" id="deadline" required min={new Date().toISOString().split('T')[0]}
                                type="date" />
                        </div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                            <Select
                                onChange={(e) => setPriority(e?.target?.value)}
                                defaultValue={oldTodo?.priority}
                                value={priority}
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Priority"
                            >
                                <MenuItem value={oldTodo?.priority}>{oldTodo?.priority}</MenuItem>
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

export default TodoEdit