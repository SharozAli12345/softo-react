import { Input } from 'antd';
import Navbar from "./Navbar"
import { HiSearch } from "react-icons/hi";
import Footer from './footer';
const Blogs = () => {

    return (
        <>
            <div className="bg-zinc-900 overflow-hidden min-h-screen">
                <div>
                    <Navbar />
                </div>
                <div className='w-full text-center'>
                    <div data-aos="zoom-in" className="text-white  my-10">
                        <h1 className='font-libre text-[2.8rem] font-mono'>Blogs</h1>
                        <span>Flash updates from the team</span>
                    </div>
                    <div className='w-[40%] mx-auto '>
                        <Input
                            prefix={<HiSearch className='w-8 text-[#717374] bg-[#222222] h-8 font-normal' />}
                            placeholder="Search your keyword"
                            size='large'
                            className='hover:border-[#354042] border-[#717374] focus:border-0 focus:border-[#717374] text-[#717374] bg-[#222222] shadow-slate-200/20 shadow-2xl'
                        />
                    </div>
                </div>
                <div className='w-[90%] mx-auto mt-16'>
                    <div className='grid grid-cols-12 gap-10'>
                        <div data-aos="zoom-in-up" className='my-20 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-3'>
                            <div className='hover:[#7AFFD7] hover:opacity-85'>
                                <div>
                                    <img src="images/cardblog1.jpg" alt="" className='hover:border hover:border-[#7AFFD7] hover:border-opacity-15 h-[200px] w-96 rounded-2xl' />
                                </div>
                                <div className='text-[#717374] font-normal text-base mt-2 flex items-center'>
                                    <div className=" line-through-[28px] items-center flex">Crypto</div>
                                    <div className='w-28 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                    <div className=" mx-1 items-center flex">December 8,2023</div>
                                    <div className='w-5 mx-1  border opacity-35 border-[#717374] rounded-2xl'></div>
                                </div>
                                <h4 className='text-white text-[1.7rem] w-full font-bold'>
                                    The Pool 2 Peer Mechanism
                                </h4>
                            </div>
                            <div className='mt-20'>
                                <p className='break-words text-[#717374] w-[93%]'>
                                    A brief overview on the pool 2 peer model and comparing
                                    it with exciting models. Why Modern Exchanges Play a Dual
                                    Role Contemporary centralized exchanges have a dual
                                    responsibility: matching buyers with sellers and provi
                                    <span className='text-white mx-1'>...</span>
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" className='my-20 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-3'>
                            <div className='hover:[#7AFFD7] hover:opacity-85'>
                                <div>
                                    <img src="images/cardblog2.jpg" alt="" className='hover:border hover:border-[#7AFFD7] hover:border-opacity-15 h-[200px] w-96 rounded-2xl' />
                                </div>
                                <div className='text-[#717374] font-normal text-base mt-2 flex items-center'>
                                    <div className=" line-through-[28px] items-center flex">Crypto</div>
                                    <div className='w-32 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                    <div className=" line-through-[28px] items-center flex">December 8,2023</div>
                                    <div className='w-7 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                </div>
                                <h4 className='text-white text-[1.7rem] w-full font-bold'>
                                    The Pool 2 Peer Mechanism
                                </h4>
                            </div>
                            <div className='mt-20'>
                                <p className='break-words text-[#717374] w-[93%]'>
                                    A brief overview on the pool 2 peer model and comparing
                                    it with exciting models. Why Modern Exchanges Play a Dual
                                    Role Contemporary centralized exchanges have a dual
                                    responsibility: matching buyers with sellers and provi
                                    <span className='text-white mx-1'>...</span>
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" className='my-20 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-3'>
                            <div className='hover:[#7AFFD7] hover:opacity-85'>
                                <div>
                                    <img src="images/cardblog2.jpg" alt="" className='hover:border hover:border-[#7AFFD7] hover:border-opacity-15 h-[200px] w-96 rounded-2xl' />
                                </div>
                                <div className='text-[#717374] font-normal text-base mt-2 flex items-center'>
                                    <div className=" line-through-[28px] items-center flex">Crypto</div>
                                    <div className='w-32 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                    <div className=" line-through-[28px] items-center flex">December 8,2023</div>
                                    <div className='w-7 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                </div>
                                <h4 className='text-white text-[1.7rem] w-full font-bold'>
                                    The Pool 2 Peer Mechanism
                                </h4>
                            </div>
                            <div className='mt-20'>
                                <p className='break-words text-[#717374] w-[93%]'>
                                    A brief overview on the pool 2 peer model and comparing
                                    it with exciting models. Why Modern Exchanges Play a Dual
                                    Role Contemporary centralized exchanges have a dual
                                    responsibility: matching buyers with sellers and provi
                                    <span className='text-white mx-1'>...</span>
                                </p>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" className='my-20 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-3'>
                            <div className='w-full'>
                                <div className='hover:[#7AFFD7] hover:opacity-85'>
                                    <div>
                                        <img src="images/cardblog4.jpg" alt="" className='hover:border hover:border-[#7AFFD7] hover:border-opacity-15 h-[200px] w-96 rounded-2xl' />
                                    </div>
                                    <div className='text-[#717374] font-normal text-base mt-2 flex items-center'>
                                        <div className=" line-through-[28px] items-center flex">Crypto</div>
                                        <div className='w-32 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                        <div className=" line-through-[28px] items-center flex">December 8,2023</div>
                                        <div className='w-7 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                    </div>
                                    <h4 className='text-white text-[1.7rem] w-full font-bold'>
                                        The Pool 2 Peer Mechanism
                                    </h4>
                                </div>
                                <div className='mt-20'>
                                    <p className='break-words text-[#717374]'>
                                        A brief overview on the pool 2 peer model and comparing
                                        it with exciting models. Why Modern Exchanges Play a Dual
                                        Role Contemporary centralized exchanges have a dual
                                        responsibility: matching buyers with sellers and provi
                                        <span className='text-white mx-1'>...</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" className='my-20 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-3'>
                            <div className='w-full'>
                                <div className='hover:[#7AFFD7] hover:opacity-85'>
                                    <div>
                                        <img src="images/cardblog2.jpg" alt="" className='hover:border hover:border-[#7AFFD7] hover:border-opacity-15 h-[200px] w-96 rounded-2xl' />
                                    </div>
                                    <div className='text-[#717374] font-normal text-base mt-2 flex items-center'>
                                        <div className=" line-through-[28px] items-center flex">Crypto</div>
                                        <div className='w-32 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                        <div className=" line-through-[28px] items-center flex">December 8,2023</div>
                                        <div className='w-7 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                    </div>
                                    <h4 className='text-white text-[1.7rem] w-full font-bold'>
                                        The Pool 2 Peer Mechanism
                                    </h4>
                                </div>
                                <div className='mt-20'>
                                    <p className='break-words text-[#717374]'>
                                        A brief overview on the pool 2 peer model and comparing
                                        it with exciting models. Why Modern Exchanges Play a Dual
                                        Role Contemporary centralized exchanges have a dual
                                        responsibility: matching buyers with sellers and provi
                                        <span className='text-white mx-1'>...</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" className='my-20 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-3'>
                            <div className='w-full'>
                                <div className='hover:[#7AFFD7] hover:opacity-85'>
                                    <div>
                                        <img src="images/cardblog3.jpg" alt="" className='hover:border hover:border-[#7AFFD7] hover:border-opacity-15 h-[200px] w-96 rounded-2xl' />
                                    </div>
                                    <div className='text-[#717374] font-normal text-base mt-2 flex items-center'>
                                        <div className=" line-through-[28px] items-center flex">Crypto</div>
                                        <div className='w-32 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                        <div className=" line-through-[28px] items-center flex">December 8,2023</div>
                                        <div className='w-7 mx-2  border opacity-35 border-[#717374] rounded-2xl'></div>
                                    </div>
                                    <h4 className='text-white text-[1.7rem] w-full font-bold'>
                                        The Pool 2 Peer Mechanism
                                    </h4>
                                </div>
                                <div className='mt-20'>
                                    <p className='break-words text-[#717374]'>
                                        A brief overview on the pool 2 peer model and comparing
                                        it with exciting models. Why Modern Exchanges Play a Dual
                                        Role Contemporary centralized exchanges have a dual
                                        responsibility: matching buyers with sellers and provi
                                        <span className='text-white mx-1'>...</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Blogs
