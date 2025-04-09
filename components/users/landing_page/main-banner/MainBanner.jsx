import { SearchOutlined } from "@ant-design/icons"
 const MainBanner = () => {
    return (
        <div className=" ">
            <div className="bg-[url('/images/landing-page/banner-main-image.jpg')] w-[100%] h-[450px] bg-center bg-no-repeat bg-cover ">
                <div className="bg-black/50 h-[100%] w-[100%]   flex pt-[80px]">
                    <div className="lg:w-[50%]  container  mx-auto text-center ">
                        <h1 className="text-white font-[700] text-[2.5rem] tracking-wide ">Search Luxury Flats & Rooms</h1>
                        <p className="text-white font-[400] text-[0.9rem] mt-3 mb-[35px] ">Thousands of luxury flats and rooms enthusiasts just like you visit our website</p>


                        <div >
                            <div className="bg-white h-[50px] w-[80%] mx-auto rounded-lg p-2 ps-4  flex justify-between">
                                <input
                                    className="w-[85%] md:w-[70%] lg:w-[70%]  border-b-2 border-transparent focus:border-gray-300   focus:outline-none hover:border-gray-300 transition-all duration-300"
                                    type="text"
                                    placeholder="Place, neighbourhood, school or agent..."
                                />
                                <div className="flex  gap-2">
                                    <div>
                                        <span className="  ">
                                            <img src="/icons/filterIcon.png " alt="" className="h-[24px] w-[22px] mt-1 bg-transparent cursor-pointer" />
                                        </span>

                                    </div>

                                    <button className=" hidden lg:flex md:flex  sm:flex  bg-orange-400 text-[16px] text-white font-[600]  w-[100px] px-3 py-1 rounded-lg    ">Search <span className="pt-[0px]"><SearchOutlined className="ms-1" style={{ color: 'white', fontSize: '15px', fontWeight: '500' }} /></span>  </button>
                                </div>

                            </div>
                            <div className=" pt-3 ">

                                <button className="  flex lg:hidden md:hidden  sm:hidden    bg-orange-400 text-[16px] text-white font-[600]   mx-auto px-3 py-1 rounded-lg ">Search  </button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default MainBanner