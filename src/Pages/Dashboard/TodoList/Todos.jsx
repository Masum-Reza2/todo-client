/* eslint-disable react/prop-types */
// icons
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useGlobal from '../../../Hooks/useGlobal';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import toast from 'react-hot-toast';
import useTodos from '../../../Hooks/useTodos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Todos = ({ todo, index, ongoing }) => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { refetch } = useTodos()

    const handleDelete = async () => {
        Swal.fire({
            title: "Confirm Delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            try {
                if (result.isConfirmed) {
                    await secureAxios.delete(`/todos/${todo?._id}?email=${user?.email}`);
                    await refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Cancelled",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            } catch (error) {
                toast.error(error?.message)
            }
        });
    }

    const handleCompleted = () => {
        Swal.fire({
            title: "Mark as Completed?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm!"
        }).then(async (result) => {
            try {
                if (result.isConfirmed) {
                    await secureAxios.put(`/makeCompleted/${todo?._id}?email=${user?.email}`);
                    await refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Marked as Completed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Cancelled",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            } catch (error) {
                toast.error(error?.message)
            }
        });
    }

    return (
        <div className="rounded-lg p-1 shadow border flex justify-between items-center text-gray-600 hover:shadow-purple-800 cursor-pointer">
            <div>
                <div>
                    <p className="font-bold">{index + 1}.{todo?.title.slice(0, 22)}...</p>
                </div>
                <div className="flex gap-2 ">
                    <p className="text-xs">{todo?.description.slice(0, 32)}</p>
                </div>
            </div>
            {
                !ongoing ?
                    <div className="space-x-2">
                        <Link to={`/dashboard/edit/${todo?._id}`}>
                            <BorderColorIcon fontSize="small" className="hover:scale-110 cursor-pointer active:-translate-y-[0.10rem]" /></Link>
                        <Link to={`/dashboard/details/${todo?._id}`}>
                            <InfoIcon fontSize="small" className="hover:scale-110 cursor-pointer active:-translate-y-[0.10rem]" /></Link>
                        <DeleteIcon onClick={handleDelete} fontSize="small" className="hover:scale-110 cursor-pointer active:-translate-y-[0.10rem]" />
                    </div>
                    :
                    <div className="space-x-2">
                        <Link to={`/dashboard/details/${todo?._id}`}>
                            <InfoIcon fontSize="small" className="hover:scale-110 cursor-pointer active:-translate-y-[0.10rem]" />
                        </Link>
                        <CheckCircleIcon onClick={handleCompleted} fontSize="small" className="hover:scale-110 cursor-pointer active:-translate-y-[0.10rem]" />
                    </div>

            }

        </div>

    )
}

export default Todos