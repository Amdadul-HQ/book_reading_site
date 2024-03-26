import { Link } from 'react-router-dom';
import notfound from '/404.jpg'
const Error = () => {
    return (
        <div className='h-full flex flex-col justify-center items-center'>
            <h1 className='text-6xl mb-2 mt-11 font-semibold text-center'>Nothing Found</h1>
            <img className='h-[550px] w-[600px]' src={notfound} alt="" />
            <Link className={'text-[#23BE0A] font-semibold px-5 py-3 rounded-lg border-2 border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white transition-all  duration-500'} to='/'>GO TO HOME</Link>
        </div>
    );
};

export default Error;