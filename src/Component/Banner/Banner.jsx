import banner from '/bannerbg.png'
import '../../assets/font.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="bg-[rgba(19,19,19,0.05)] h-[555px] w-full rounded-3xl flex justify-around items-center mb-32">
            <div className="space-y-12">
                <h1 className="font-playfair text-[#131313] text-6xl mb-6 font-bold">Books to freshen up <br /> your bookshelf</h1>
                <Link to='/listedbooks'><button  className="px-7 flex py-5 text-xl font-bold font-work bg-[#23BE0A] rounded-lg text-white">View The List</button></Link>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </section>
    );
};

export default Banner;