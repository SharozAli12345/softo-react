import { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import { RiMenuFill } from "react-icons/ri";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { Drawer } from 'antd';


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const scrollTo = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
        setOpen(false);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="">
                <div className="flex items-end pt-4 justify-center w-[100%]">
                    <div className="flex w-[50%] items-center  justify-end  gap-2 ">
                        <img src="images/logo.png" className="w-[42.23px] h-[65.53px] relative" alt="" />
                        <div className="text-white text-[33.12px] font-medium font-['Space Grotesk']">AlchemyEx</div>
                    </div>

                    <div className="w-[40%] h-[65.53px] items-center hidden justify-end md:flex lg:flex xl:flex 2xl:flex">
                        <ul className="text-white text-base font-medium flex gap-4">
                            <Link to="overview" spy={true} smooth={true} duration={500} offset={-50}>
                                <li className="cursor-pointer " onClick={() => scrollTo("overview")}>Overview</li>
                            </Link>
                            <Link to="overview" spy={true} smooth={true} duration={500} offset={-50}>
                                <li className="cursor-pointer" onClick={() => scrollTo("features")}>Key features</li>
                            </Link>
                            <Link to="/blogs">
                                <li className="cursor-pointer">Blogs</li>
                            </Link>
                        </ul>

                    </div>
                    <div className="w-[40%] h-[65.53px] items-center flex justify-end md:hidden lg:hidden xl:hidden 2xl:hidden">
                        <div onClick={showDrawer} className=" items-center flex justify-center w-12 h-12 bg-[#341839] rounded-xl border border-[#6A157A]">
                            <RiMenuFill className='w-[30px] h-[30px] text-white cursor-pointer' />
                        </div>
                    </div>
                    <div>
                        <Drawer
                            title="AlchemyEx"
                            onClose={onClose}
                            open={open}
                        >
                            <ul className="text-white text-xl font-medium">
                                <Link to="overview" spy={true} smooth={true} duration={500} offset={-50}>
                                    <li className="cursor-pointer my-4" onClick={() => scrollTo("overview")}>Overview</li>
                                </Link>
                                <Link to="overview" spy={true} smooth={true} duration={500} offset={-50}>
                                    <li className="cursor-pointer my-4" onClick={() => scrollTo("features")}>Key features</li>
                                </Link>
                                <Link to="overview" spy={true} smooth={true} duration={500} offset={-50}>
                                    <li className="cursor-pointer my-4" onClick={() => scrollTo("newsletter")}>Blogs</li>
                                </Link>
                            </ul>
                        </Drawer>
                    </div>

                </div>
                {/* <div data-aos="zoom-in" className="my-16">
                    <div className="text-center text-white text-4xl font-bold font-['Space Grotesk'] uppercase">One-stop defi-trading</div>
                    <div className="text-center text-fuchsia-600 text-xl font-medium font-['Space Grotesk']">Faster and cheaper</div>
                    <div className="my-12">
                        <button type="button" className="bg-gradient-to-r from-cyan-500 to-blue hover:bg-gradient-to-bl dark:focus:ring-cyan-800 text-center justify-center items-center flex text-white bg-[#D613FD] w-[45%] md:w-[28%] h-14 mx-auto rounded-md text-lg md:text-[1.3rem] px-4 py-2.5 font-['Space Grotesk']">
                            Launch App
                            <HiMiniArrowLongRight class='w-[28px] h-[28px] mx-4 my-1' />
                        </button>
                    </div>

                </div> */}

            </div>
        </>
    )
}

export default Navbar
