"use client"
import PropTypes from "prop-types";
import './NavigationBarCss.css'
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { BookHeart, LayoutDashboard, LogOut, MapPinHouse, Phone, TableProperties, UserRoundPen } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function NavigationBar({ children }) {
    const [userClicked, setUserClicked] = useState(false)
    const router = useRouter();
    return (
        <div>
            <div>
                <nav className="  grid grid-cols-12      px-5 py-2">

                    <div className="col-span-12 lg:col-span-3 md:col-span-5 sm:col-span-12 grid grid-cols-10" >
                        <div className="col-span-2 pt-[2px] " >
                            <img src="/svgs/logo.svg " alt="" className="h-[30px] w-[30px] m-auto" />
                        </div>
                        <div className="col-span-3 font-[700] " >
                            <h1 className="mb-0">
                                HOMIES
                            </h1>

                            <p className="text-gray-400 text-[11px] font-[400] tracking-[2px] mt-0">
                                Real Estate
                            </p>

                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-5 md:col-span-7 sm:col-span-12  text-center flex pt-2 justify-evenly" >
                        <div onClick={()=>{router.push('/')}} className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Home  
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Listing <DownOutlined style={{ fontSize: '10px' }} />
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Property <DownOutlined style={{ fontSize: '10px' }} />
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Pages <DownOutlined style={{ fontSize: '10px' }} />
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Blog <DownOutlined style={{ fontSize: '10px' }} />
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Contact
                        </div>

                    </div>

                    <div className="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-12  text-center grid grid-cols-12" >
                        <div className="col-span-4 pt-2 col-start-3 flex">
                            <Phone style={{ color: 'rgb(251 146 60)', height: '18px', marginTop: '3px' }} /> <span className="text-black font-[500]">(603) 555-0123</span>
                        </div>

                        <div className="col-span-2   relative">

                            <button onClick={() => { setUserClicked(!userClicked) }} className="   px-2 py-2 border border-gray-200 rounded-[10px]">
                                <UserOutlined />
                            </button>
                            {
                                userClicked &&
                                <div className="w-[220px] absolute bg-white top-[60px] left-1/2 translate-x-[-50%] rounded-lg  py-1">
                                    <div className="flex gap-3 px-3 my-3 hover:bg-orange-100 py-2 cursor-pointer">
                                        <div className="pt-1">
                                            <LayoutDashboard style={{ height: '15px', width: '15px', color: 'gray' }} />
                                        </div>
                                        <div className="text-[14px] ">
                                            Dashboards
                                        </div>
                                    </div>
                                    <div className="flex gap-3 px-3 my-3 hover:bg-orange-100 py-2 cursor-pointer">
                                        <div className="pt-1">
                                            <TableProperties style={{ height: '15px', width: '15px', color: 'gray' }} />
                                        </div>
                                        <div className="text-[14px] ">
                                            My Properties
                                        </div>
                                    </div>

                                    <div className="flex gap-3 px-3 my-3 hover:bg-orange-100 py-2 cursor-pointer">
                                        <div className="pt-1">
                                            <BookHeart style={{ height: '15px', width: '15px', color: 'gray' }} />
                                        </div>
                                        <div className="text-[14px] ">
                                            My Favourites (1)
                                        </div>
                                    </div>


                                    <div className="flex gap-3 px-3 my-3 hover:bg-orange-100 py-2 cursor-pointer">
                                        <div className="pt-1">
                                            <UserRoundPen style={{ height: '15px', width: '15px', color: 'gray' }} />
                                        </div>
                                        <div className="text-[14px] ">
                                            My Profile
                                        </div>
                                    </div>

                                    <div className="flex gap-3 px-3 my-3 hover:bg-orange-100 py-2 cursor-pointer">
                                        <div className="pt-1">
                                            <MapPinHouse style={{ height: '15px', width: '15px', color: 'gray' }} />
                                        </div>
                                        <div className="text-[14px] ">
                                            Add property
                                        </div>
                                    </div>

                                    <div className="flex gap-3 px-3 my-3 hover:bg-orange-100 py-2 cursor-pointer">
                                        <div className="pt-1">
                                            <LogOut style={{ height: '15px', width: '15px', color: 'gray' }} />
                                        </div>
                                        <div className="text-[14px] ">
                                            Logout
                                        </div>
                                    </div>

                                </div>
                            }


                        </div>
                        <div className="col-span-4">
                            <button className="text-orange-400 py-2 px-4 border border-orange-400  rounded-[10px] hover:bg-orange-400 hover:text-white">Add Property</button>
                        </div>
                    </div>
                </nav>
            </div>
            <div>{children}</div>
        </div>
    );
}

NavigationBar.propTypes = {
    children: PropTypes.node.isRequired, // This validates that children should be a React node
};
