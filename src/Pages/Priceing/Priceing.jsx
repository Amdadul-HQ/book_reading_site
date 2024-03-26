
import { FaCircleCheck } from "react-icons/fa6";

const Priceing = () => {

    return (
        <section className="md:px-0 px-5">
            <h1 className="text-6xl font-bold text-center">Subscribe to unlock <br /> <span className="text-[#23BE0A]">unlimited access</span></h1>
            <div className="flex md:flex-row flex-col gap-y-6 gap-x-6 justify-around mt-8 mb-7">
                <div className="p-6 rounded-2xl border bg-[rgba(255,172,51,0.15)] flex flex-col justify-between">
                    <h1 className="text-3xl font-semibold underline text-center">Basic Free</h1>
                   <div className="my-5">
                   <h1 className="text-2xl font-bold">Facility</h1>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck> Search Zendy’s data base of 37M+ Open Access articles</p>
                   </div>
                    <div className="my-4">
                    <h1 className="text-2xl font-bold">Features</h1>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>AI Summarisation</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>AI Key phrase highlighting</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>One-click citations</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>Unlimited downloads</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>Favourite articles</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>Create reading lists</p>
                    </div>
                    <div>
                    <button className="w-full bg-[#23BE0A] py-5 rounded-2xl text-lg font-medium text-white">Chose Basic</button>
                    </div>
                </div>
                <div className="bg-[rgba(50,142,255,0.15)] p-6 rounded-2xl border flex flex-col justify-between">
                    <h1 className="text-3xl font-semibold underline text-center">Pro</h1>
                    <div className="my-5">
                    <h1 className="text-2xl font-bold">Facility</h1>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck> Search  data base of 37M+ Open Access articles</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>Search premium database of articles from top publishers</p>
                    </div>
                    <div className="my-4">
                    <h1 className="text-2xl font-bold">Features</h1>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>AI Summarisation</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>AI Key phrase highlighting</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>One-click citations</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>Unlimited downloads</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>Favourite articles</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>Create reading lists</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>Ad-free experience</p>
                    <p className="flex gap-x-2 items-center text-lg text-[rgba(19,19,19,0.80)] font-semibold"><FaCircleCheck className="text-[#23BE0A]"></FaCircleCheck>Expanded storage space for uploaded content</p>
                    </div>
                    <div>
                        <button className="w-full bg-[#23BE0A] py-5 rounded-2xl text-lg font-medium text-white">Chose Basic</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priceing;