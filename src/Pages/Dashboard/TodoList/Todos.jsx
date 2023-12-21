// icons
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

const Todos = () => {
    return (
        <div className="rounded-lg p-1 shadow-md border flex justify-between items-center text-gray-600">
            <div>
                <div>
                    <p className="font-bold">0.This miss todo number</p>
                </div>
                <div className="flex gap-2 ">
                    <p className="text-xs">something description about the...</p>
                </div>
            </div>
            <div className="space-x-2">
                <BorderColorIcon fontSize="small" className="hover:scale-110 cursor-pointer active:-translate-y-[0.10rem]" />
                <InfoIcon fontSize="small" className="hover:scale-110 cursor-pointer active:-translate-y-[0.10rem]" />
                <DeleteIcon fontSize="small" className="hover:scale-110 cursor-pointer active:-translate-y-[0.10rem]" />
            </div>
        </div>
    )
}

export default Todos