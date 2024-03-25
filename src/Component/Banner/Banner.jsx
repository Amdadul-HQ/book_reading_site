import banner from '/bannerbg.png'
import '../../assets/font.css'

const Banner = () => {
    return (
        <section className="bg-[rgba(19,19,19,0.05)] h-[555px] w-full rounded-3xl flex justify-around items-center mb-32">
            <div className="space-y-12">
                <h1 className="font-playfair text-[#131313] text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <button className="px-7 py-5 text-xl font-bold font-work bg-[#23BE0A] rounded-lg text-white">View The List</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </section>
    );
};

export default Banner;