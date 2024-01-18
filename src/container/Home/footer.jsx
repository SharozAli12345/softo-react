

const Footer = () => {
    return (
        <>
            <div data-aos="fade-up" className="relative bg-[#341839] mt-40 text-white">
                <div className="w-[100%] overflow-hidden">
                    <svg data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="relative block h-[600px] fill-[#18181B]"></path>
                    </svg>
                </div>
                <div data-aos-anchor-placement="bottom-center" className="w-[80%] mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div data-aos="zoom-in-right" className="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
                            <div className="bg-Size">
                                <div className="text-white text-[1.2rem] font-normal font-['Space Grotesk'] mt-2">About</div>
                                <img src="images/Line 3.png" alt="" className="w-12 h-[4px]" />
                            </div>
                            <ul className="text-sm">
                                <li className="py-1 cursor-pointer">Documentation</li>
                                <li className="py-1 cursor-pointer">CoinMarketCao</li>
                                <li className="py-1 cursor-pointer">Coin Gecko</li>
                                <li className="py-1 cursor-pointer">Disclaimer</li>
                            </ul>
                        </div>
                        <div data-aos="zoom-in-right" className="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
                            <div className="bg-Size">
                                <div className="text-white text-[1.2rem] font-normal font-['Space Grotesk'] mt-2">PROTOCOL</div>
                                <img src="images/Line 3.png" alt="" className="w-12 h-[4px]" />
                            </div>
                            <ul className="text-sm list-none">
                                <li className="py-1 cursor-pointer">Apply for DropZone</li>
                                <li className="py-1 cursor-pointer">Apply for Fusion Poo</li>
                                <li className="py-1 cursor-pointer">Apply for Acceleraytor</li>
                                <li className="py-1 cursor-pointer">Permissionless Pool</li>
                            </ul>
                        </div>
                        <div data-aos="zoom-in-left" className="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
                            <div className="bg-Size">
                                <div className="text-white text-[1.2rem] font-normal font-['Space Grotesk'] mt-2">SUPPORT</div>
                                <img src="images/Line 3.png" alt="" className="w-12 h-[4px]" />
                            </div>
                            <ul className="text-sm list-none">
                                <li className="py-1 cursor-pointer">Getting Started on AlchemyEx</li>
                                <li className="py-1 cursor-pointer">FAQ</li>
                            </ul>
                        </div>
                        <div data-aos="zoom-in-left" className="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
                            <div className="bg-Size">
                                <div className="text-white text-[1.2rem] font-normal font-['Space Grotesk'] mt-2">SUPPORT</div>
                                <img src="images/Line 3.png" alt="" className="w-12 h-[4px]" />
                            </div>
                            <ul className="text-sm list-none">
                                <li className="py-1 cursor-pointer flex items-center gap-2 mt-1">
                                    <div className=" items-center flex  p-2 w-8 h-8 bg-[#341839] rounded-lg border border-[#6A157A]">
                                        <img src="images/twitter.svg" alt="" className="hover:animate-bounce w-[25px] h-[25px]" />
                                    </div>
                                    <div>
                                        Twitter
                                    </div>
                                </li>
                                <li className="py-1 cursor-pointer flex items-center gap-2 mt-1">
                                    <div className=" items-center flex  p-2 w-8 h-8 bg-[#341839] rounded-lg border border-[#6A157A]">
                                        <img src="images/medum.svg" alt="" className="hover:animate-bounce w-[25px] h-[25px]" />
                                    </div>
                                    <div>
                                        Medium
                                    </div>
                                </li>
                                <li className="py-1 cursor-pointer flex items-center gap-2 mt-1">
                                    <div className=" items-center flex  p-2 w-8 h-8 bg-[#341839] rounded-lg border border-[#6A157A]">
                                        <img src="images/discord.svg" alt="" className="hover:animate-bounce w-[25px] h-[25px]" />
                                    </div>
                                    <div>
                                        Discord
                                    </div>
                                </li>
                                <li className="py-1 cursor-pointer flex items-center gap-2 mt-1">
                                    <div className=" items-center flex  p-2 w-8 h-8 bg-[#341839] rounded-lg border border-[#6A157A]">
                                        <img src="images/telegram.svg" alt="" className="hover:animate-bounce w-[25px] h-[25px]" />
                                    </div>
                                    <div>
                                        Telegram
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" flex items-center pb-4 justify-center gap-2">
                        <img src="images/logo.png" className="w-[34px] h-[50px] relative" alt="" />
                        <div className="text-white text-[1.5rem] font-medium font-['Space Grotesk']">AlchemyEx</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
