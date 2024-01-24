import student from '../assets/images/education.jpg';
import developer from '../assets/images/developer.jfif';
import shop from '../assets/images/shopKeeper.jpeg';
import houseWife from '../assets/images/houseWife.jpg';
import teacher from '../assets/images/teacher.jpeg';
import banker from '../assets/images/banker.jpg';
import { Link } from 'react-router-dom';
// import banker from '';

const useFulUsers = [
    { name: 'Student', img: student },
    { name: 'Developer', img: developer },
    { name: 'Shop-Keeper', img: shop },
    { name: 'House-Wife', img: houseWife },
    { name: 'Teacher', img: teacher },
    { name: 'Banker', img: banker },
]

const WidelyUsers = () => {
    return (
        <div className="py-3">
            <Link to={'/dashboard'} className='space-y-3'>
                <h1 className="text-center font-bold md:text-xl text-gray-500">Widely useful for those users.</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-2">
                    {
                        useFulUsers?.map((item, index) => <div key={index} className="p-5 border shadow rounded-lg transition-all hover:bg-pink-50 cursor-pointer flex justify-evenly items-center">
                            <p className='text-blue-600 font-bold'>{item?.name}</p>
                            <img className='w-[100px] h-[100px] rounded-full hidden md:block' src={item?.img} alt="" />
                        </div>)
                    }
                </div>
            </Link>
        </div>
    )
}

export default WidelyUsers