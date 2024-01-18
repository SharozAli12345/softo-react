import {Element } from 'react-scroll';
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Navbar from './Navbar';
import Footer from './footer';
const Home = () => {
    return (
        <>
            <div className="bg-zinc-900 overflow-hidden">
                {/* navbar */}
                <div className="bg-image relative  ">
                    {/* <div className="flex items-end pt-4 justify-center w-[100%]">
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
                                <Link to="overview" spy={true} smooth={true} duration={500} offset={-50}>
                                    <li className="cursor-pointer" onClick={() => scrollTo("newsletter")}>Blogs</li>
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

                    </div> */}
                    <Navbar />
                    <div data-aos="zoom-in" className="my-16">
                        <div className="text-center text-white text-4xl font-bold font-['Space Grotesk'] uppercase">One-stop defi-trading</div>
                        <div className="text-center text-fuchsia-600 text-xl font-medium font-['Space Grotesk']">Faster and cheaper</div>
                        <div className="my-12">
                            <button type="button" className="bg-gradient-to-r from-cyan-500 to-blue hover:bg-gradient-to-bl dark:focus:ring-cyan-800 text-center justify-center items-center flex text-white bg-[#D613FD] w-[45%] md:w-[28%] h-14 mx-auto rounded-md text-lg md:text-[1.3rem] px-4 py-2.5 font-['Space Grotesk']">
                                Launch App
                                <HiMiniArrowLongRight class='w-[28px] h-[28px] mx-4 my-1' />
                            </button>
                        </div>

                    </div>

                    <div className='absolute bottom-0 left-0 right-0'>
                        <img className="w-[70%]  mx-auto h-[490px]  rounded-xl" src="images/graphimg.png" />
                        <div className='bg-smog'>
                        </div>
                    </div>

                </div>
                {/* Overview */}
                <Element name="overview">
                    <div data-aos="fade-down" className="w-[90%] mx-auto bg-[#341839]  my-32 border-4  rounded-lg border-fuchsia-600">
                        <div data-aos="zoom-in-up" className="line-div">
                            <img src="images/Line 3.png" alt="" className="text-center" />
                            <div className=" text-white mt-4 text-[1.2srem] font-semibold text-center font-['Space Grotesk'] w-[95%] mx-auto">A suite of features powering the evolution of DeFi on Solana</div>
                        </div>

                        <div className="grid grid-cols-12 gap-6 w-[80%] mx-auto">
                            <div data-aos="zoom-in-up" className="mb-10 col-span-12 lg:col-span-4 ease-in xl:col-span-3 md:col-span-6 2xl:col-span-3">
                                <div className="text-center gap-3 bg-[#191919] min-h-48 min-w-56 border-[#6A157A] border rounded-3xl p-7 items-center">
                                    <div className=" items-center flex justify-center w-14 h-14 mx-auto bg-[#341839] rounded-xl border border-[#6A157A]">
                                        <img src="images/Group 4.svg" alt="" className="hover:animate-bounce w-[35px] h-[35px]" />
                                    </div>
                                    <div className="my-1">
                                        <div className="text-center text-white text-[1.3rem] font-bold font-['Space Grotesk']">Trade</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk'] mx-auto w-[95%] h-8">Swap swiftly as well as with DCA and Limit orders.</div>

                                    </div>
                                    <div className="mt-9 mb-1">
                                        <button type="button" className="text-center hover:bg-[#341839] hover:text-[#D613FD]  text-white bg-[#D613FD] w-[90%] mx-auto rounded-md text-sm  px-4 py-2.5 font-['Space Grotesk']">Enter Exchange</button>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="mb-10 col-span-12 lg:col-span-4 xl:col-span-3 md:col-span-6 2xl:col-span-3">
                                <div className="text-center gap-3 bg-[#191919] min-h-48 min-w-56 border-[#6A157A] border rounded-3xl p-7 items-center">
                                    <div className=" items-center flex justify-center w-14 h-14 mx-auto bg-[#341839] rounded-xl border border-[#6A157A]">
                                        <img src="images/dolars.svg" alt="" className="hover:animate-bounce w-[35px] h-[35px]" />
                                    </div>
                                    <div className="my-1">
                                        <div className="text-center text-white text-[1.3rem] font-bold font-['Space Grotesk']">Earn</div>
                                        <div className="text-white text-[0.6rem] font-normal font-['Space Grotesk']">Profit through providing Standard <br />liquidity and as well as<br /> concentrated liquidity ( CLAMM )</div>
                                    </div>
                                    <div className="mt-7">
                                        <button type="button" className="text-center hover:bg-[#341839] hover:text-[#D613FD]  text-white bg-[#D613FD] w-[90%] mx-auto rounded-md text-sm  px-4 py-2.5 font-['Space Grotesk']">Start Earning</button>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="mb-10 col-span-12 lg:col-span-4 xl:col-span-3 md:col-span-6 2xl:col-span-3">
                                <div className="text-center gap-3 bg-[#191919] min-h-48 min-w-56 border-[#6A157A] border rounded-3xl p-7 items-center">
                                    <div className=" items-center flex justify-center w-14 h-14 mx-auto bg-[#341839] rounded-xl border border-[#6A157A]">
                                        <img src="images/graphLine.svg" alt="" className="hover:animate-bounce w-[35px] h-[35px]" />
                                    </div>
                                    <div className="my-1">
                                        <div className="text-center text-white text-[1.3rem] font-bold font-['Space Grotesk']">Pools</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk'] mx-auto w-[95%] h-8">Create new pairs and add <br />liquidity.</div>

                                    </div>
                                    <div className="mt-9 mb-1">
                                        <button type="button" className="text-center hover:bg-[#341839] hover:text-[#D613FD]  text-white bg-[#D613FD] w-[90%] mx-auto rounded-md text-sm  px-4 py-2.5 font-['Space Grotesk']">Add Liquidity</button>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="mb-10 col-span-12 lg:col-span-4 xl:col-span-3 md:col-span-6 2xl:col-span-3">
                                <div className="text-center gap-3 bg-[#191919] min-h-48 min-w-56 border-[#6A157A] border rounded-3xl p-7 items-center">
                                    <div className=" items-center flex justify-center w-14 h-14 mx-auto bg-[#341839] rounded-xl border border-[#6A157A]">
                                        <img src="images/roket.svg" alt="" className="hover:animate-bounce w-[35px] h-[35px]" />
                                    </div>
                                    <div className="my-1">
                                        <div className="text-center text-white text-[1.3rem] font-bold font-['Space Grotesk']">Launchpad</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk'] mx-auto w-[95%] h-8">Our launchpad propels new<br /> coins into the Solana<br /> ecosystem.</div>

                                    </div>
                                    <div className="mt-9 mb-1">
                                        <button type="button" className="text-center hover:bg-[#341839] hover:text-[#D613FD]  text-white bg-[#D613FD] w-[90%] mx-auto rounded-md text-sm  px-4 py-2.5 font-['Space Grotesk']">View Projects</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
                {/* key feature */}
                <Element name="features">
                    <div className="w-[90%] mx-auto">
                        <div data-aos="fade-left">
                            <img src="images/Line 3.png" alt="" />
                            <div className="text-white text-3xl font-normal font-['Space Grotesk'] mt-2">Key Features</div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 mt-20">
                            <div data-aos="zoom-in-up" className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6 2xl:col-span-4">
                                <div className="flex gap-3 border-[#6A157A] border-2 rounded-lg p-4 items-center">
                                    <div className=" items-center flex justify-center bg-[#341839] bg-Size min-w-16 min-h-16 rounded-xl border border-[#6A157A]">
                                        <img src="images/star.svg" alt="" className="hover:animate-bounce w-[35px] h-[40px]" />
                                    </div>
                                    <div className="w-[100%] md:w-[100%] xl:w-[60%] lg:w-[60%]">
                                        <div className="text-white text-[1rem] font-bold font-['Space Grotesk']">STRATEGIC DCA AND LIMIT ORDERS</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk']">Optimize trading with AlchemyEx’s Dollar Cost Averaging and precise limit orders, reducing market volatility impact and enhancing control over trade execution.</div>
                                    </div>

                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6 2xl:col-span-4">
                                <div className="flex gap-3 border-[#6A157A] border-2 rounded-lg p-4 items-center">
                                    <div className=" items-center flex justify-center bg-[#341839] bg-Size min-w-16 min-h-16 rounded-xl border border-[#6A157A]">
                                        <img src="images/dollar.svg" alt="" className="hover:animate-bounce w-[35px] h-[40px]" />
                                    </div>
                                    <div className="w-[100%] md:w-[100%] xl:w-[60%] lg:w-[60%]">
                                        <div className="text-white text-[1rem] font-bold font-['Space Grotesk']">COST-EFFICIENT TRADING</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk']">Engage in economic trading with our competitive fees, designed to maximize your profits while maintaining exceptional service quality.</div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6 2xl:col-span-4">
                                <div className="flex gap-3 border-[#6A157A] border-2 rounded-lg p-4 items-center">
                                    <div className=" items-center flex justify-center bg-[#341839] bg-Size min-w-16 min-h-16 rounded-xl border border-[#6A157A]">
                                        <img src="images/correct.svg" alt="" className="hover:animate-bounce w-[35px] h-[40px]" />
                                    </div>
                                    <div className="w-[100%] md:w-[100%] xl:w-[60%] lg:w-[60%]">
                                        <div className="text-white text-[1rem] font-bold font-['Space Grotesk']">CLAMM LIQUIDITY MAXIMIZATION</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk']">Benefit from our DEX's Concentrated Liquidity AMM, allowing liquidity concentration within specific price ranges to boost potential earnings.</div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6 2xl:col-span-4">
                                <div className="flex gap-3 border-[#6A157A] border-2 rounded-lg p-4 items-center">
                                    <div className=" items-center flex justify-center bg-[#341839] bg-Size min-w-16 min-h-16 rounded-xl border border-[#6A157A]">
                                        <img src="images/updown.svg" alt="" className="hover:animate-bounce w-[35px] h-[40px]" />
                                    </div>
                                    <div className="w-[100%] md:w-[100%] xl:w-[60%] lg:w-[60%]">
                                        <div className="text-white text-[1rem] font-bold font-['Space Grotesk']">CROSS-CHAIN ASSET BRIDGINGS</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk']">Optimize trading with AlchemyEx’s Dollar Cost Averaging and precise limit orders, reducing market volatility impact and enhancing control over trade execution.</div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6 2xl:col-span-4">
                                <div className="flex gap-3 border-[#6A157A] border-2 rounded-lg p-4 items-center">
                                    <div className=" items-center flex justify-center bg-[#341839] bg-Size min-w-16 min-h-16 rounded-xl border border-[#6A157A]">
                                        <img src="images/carton.svg" alt="" className="hover:animate-bounce w-[35px] h-[40px]" />
                                    </div>
                                    <div className="w-[100%] md:w-[100%] xl:w-[60%] lg:w-[60%]">
                                        <div className="text-white text-[1rem] font-bold font-['Space Grotesk']">AI TRADING BOT SUITE</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk']">Optimize trading with AlchemyEx’s Dollar Cost Averaging and precise limit orders, reducing market volatility impact and enhancing control over trade execution.</div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6 2xl:col-span-4">
                                <div className="flex gap-3 border-[#6A157A] border-2 rounded-lg p-4 items-center">
                                    <div className=" items-center flex justify-center bg-[#341839] bg-Size min-w-16 min-h-16 rounded-xl border border-[#6A157A]">
                                        <img src="images/setting.svg" alt="" className="hover:animate-bounce w-[35px] h-[40px]" />
                                    </div>
                                    <div className="w-[100%] md:w-[100%] xl:w-[60%] lg:w-[60%]">
                                        <div className="text-white text-[1rem] font-bold font-['Space Grotesk']">CROSS-CHAIN ASSET BRIDGING</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk']">Expand your trading horizons with Wormhole integration, facilitating effortless asset transfers across blockchains within Alchemy's ecosystem.</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </Element>
                {/* newsletter*/}
                <Element name="newsletter">
                    <div className="w-[90%] mx-auto bg-[#222222] rounded-xl">
                        <div data-aos="fade-down-right" className="grid grid-cols-12 gap-2 mt-20 ">
                            <div data-aos="fade-left" className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-6 2xl:col-span-6 flex items-center">
                                <div className="flex gap-3 rounded-lg p-5 items-center">
                                    <div className="w-[100%] md:w-[100%] xl:w-[60%] lg:w-[60%]">
                                        <div className="text-white text-[1.2rem] font-bold font-['Space Grotesk']">Newsletter</div>
                                        <div className="text-white text-[0.6rem] font-medium font-['Space Grotesk']">Lorem ipsum dolor sit amet consectetur. Accumsan sagittis pulvinar elementum sit. Malesuada ac scelerisque eros ullamcorper rutrum amet rhoncus varius.</div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-right" className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-6 2xl:col-span-6 flex items-center">
                                <div className="items-center w-[90%] p-5 float-end text-center">
                                    <input type="email" placeholder="Enter email here" className="border-2 text-white w-[80%] h-8 placeholder-[#ADADAD] pl-4 border-[#ADADAD] bg-[#222222] p-1 rounded-full" />
                                    <div className="mt-2 w-[90%]  md:w-[90%]  ">
                                        <button type="button" className="w-24 hover:bg-[#341839] hover:text-[#D613FD] float-end text-center  text-white bg-[#D613FD] h-9 rounded-md text-sm  px-4 py-2.5 font-['Space Grotesk']">Subscribe</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </Element>
                {/* footer */}
                <Footer />
            </div>
        </>

    )
}

export default Home;
