/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';


const Cover = ({ title, img }) => {

    return (
        <Parallax
            blur={{ min: -10, max: 10 }}
            bgImage={img}
            bgImageAlt="Task img"
            strength={10}
        >
            <div className="hero h-[400px] md:h-[600px]">
                <div className="hero-content text-center text-neutral-content w-full">
                    <div className="bg-black bg-opacity-50 w-full py-10 rounded-md flex flex-col items-center justify-center h-[400px] md:h-[600px]">
                        <Link to={'/dashboard'} className='border p-2 rounded-md'><h1 className="text-3xl lg:text-5xl font-bold uppercase text-white hover:text-yellow-100 transition-all">{title}</h1></Link>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default Cover