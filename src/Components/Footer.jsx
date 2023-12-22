import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className='bg-black text-gray-500 py-5 px-2 space-y-5'>
            <div className='flex flex-col items-center'>
                <p>Task Manager</p>
                <small>Task manager team ltd.</small>
            </div>
            <div className='flex items-center justify-center gap-5 text-xl'>
                <BsFacebook className='cursor-pointer transition-all hover:scale-110 hover:text-yellow-50' />
                <BsInstagram className='cursor-pointer transition-all hover:scale-110 hover:text-yellow-50' />
                <BsYoutube className='cursor-pointer transition-all hover:scale-110 hover:text-yellow-50' />
                <AiOutlineTwitter className='cursor-pointer transition-all hover:scale-110 hover:text-yellow-50' />
            </div>
            <small className='flex items-center justify-center'>@copyright © {year} all right reserved.</small>
        </footer>
    )
}

export default Footer