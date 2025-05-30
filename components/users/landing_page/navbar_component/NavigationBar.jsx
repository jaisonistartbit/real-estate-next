"use client"
import PropTypes from "prop-types";
import './NavigationBarCss.css';
import { DownOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import {
    LogOut,
    MapPinHouse,
    Phone,
    TableProperties,
    UserRoundPen, Home, ListOrdered, Info, PlusCircle, MapPin
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import AddProperty from "../add-property/AddProperty";

export default function NavigationBar({ children }) {
    const [userClicked, setUserClicked] = useState(false);
    const [nearByCitiesClicked, setNearByCitiesClicked] = useState(false);
    const [addProperty, setAddProperty] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const userMenuRef = useRef(null);
    const citiesRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setUserClicked(false);
            }
            if (citiesRef.current && !citiesRef.current.contains(event.target)) {
                setNearByCitiesClicked(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = drawerOpen ? 'hidden' : '';
    }, [drawerOpen]);

    const handleCityClick = (path) => {
        router.push(path);
        setNearByCitiesClicked(false);
    };

    return (
        <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-3">
                    <div className="block lg:hidden">
                        <MenuOutlined onClick={() => setDrawerOpen(true)} className="text-lg cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}> 
                        <img src="/svgs/logo.svg" alt="logo" className="h-[30px] w-[30px]" />
                        <div>
                            <h1 className="text-xl font-bold text-orange-500">HOMIES</h1>
                            <p className="text-[10px] font-bold ps-1 text-gray-400 tracking-wide uppercase">Real Estate</p>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex gap-10 text-sm font-medium text-gray-700">
                    <div onClick={() => router.push("/")} className="cursor-pointer text-lg hover:text-orange-500 flex items-center gap-1 hover:border-b-4 hover:border-orange-400">Home</div>
                    <div onClick={() => router.push("/properties")} className="cursor-pointer text-lg hover:text-orange-500 flex items-center gap-1 hover:border-b-4 hover:border-orange-400">Property</div>
                    <div onClick={() => router.push("/about-us")} className="cursor-pointer text-lg hover:text-orange-500 flex items-center gap-1 hover:border-b-4 hover:border-orange-400">About Us</div>
                    <div onClick={() => router.push("/about-us")} className="cursor-pointer text-lg hover:text-orange-500 flex items-center gap-1 hover:border-b-4 hover:border-orange-400">Contact Us</div>

                    <div className="relative" ref={citiesRef}>
                        <div
                            onClick={() => setNearByCitiesClicked(!nearByCitiesClicked)}
                            className="cursor-pointer text-lg hover:text-orange-500 flex items-center gap-1 hover:border-b-4 hover:border-orange-400"
                        >
                            Near By Cities <DownOutlined style={{ fontSize: '12px' }} />
                        </div>
                        {nearByCitiesClicked && (
                            <div className="absolute bg-white shadow-md border border-gray-200 rounded-md mt-2 z-50 min-w-[150px] py-2">
                               

                                <DropdownItem icon={<MapPinHouse />} label="Jaipur" onClick={() => router.push(`/city/Jaipur`)} />
                                {/* <DropdownItem icon={<UserRoundPen />} label="My Profile" /> */}
                                <DropdownItem icon={<MapPinHouse />} label="Kota" onClick={() => router.push(`/city/Kota`)} />
                                <DropdownItem icon={<MapPinHouse />} label="Delhi" onClick={() => router.push(`/city/Delhi`)} />
                                {/* <DropdownItem icon={<MapPinHouse />} label="Jodhpur" onClick={() => router.push(`/city/Jodhpur`)} />
                                <DropdownItem icon={<MapPinHouse />} label="Kolkata" onClick={() => router.push(`/city/Kolkata`)} /> */}
                                <DropdownItem icon={<MapPinHouse />} label="Mumbai" onClick={() => router.push(`/city/Mumbai`)} />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2 text-lg text-gray-700">
                        <Phone style={{ color: 'rgb(251 146 60)', height: '18px' }} />
                        <span>(603) 555-0123</span>
                    </div>
                    <div className="hidden lg:block">
                        <button className="text-orange-400 py-2 px-4 border border-orange-400 rounded-[10px] hover:bg-orange-400 hover:text-white cursor-pointer" onClick={() => setAddProperty(!addProperty)}>
                            Add Property
                        </button>
                    </div>
                    <div className="relative" ref={userMenuRef}>
                        <button onClick={() => setUserClicked(!userClicked)} className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <UserOutlined className="text-gray-600" />
                        </button>
                        {userClicked && (
                            <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50">
                                <DropdownItem icon={<TableProperties />} label="My Properties" onClick={() => router.push('/my-properties')} />
                                <DropdownItem icon={<MapPinHouse />} label="Add property" onClick={() => setAddProperty(!addProperty)} />
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {drawerOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-30" onClick={() => setDrawerOpen(false)}>
                    <div className="w-64 bg-white h-full shadow-lg pt-8 px-6 border-r border-gray-200" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-semibold text-orange-500 mb-4">Menu</h2>
                        <div onClick={() => { router.push('/'); setDrawerOpen(false); }} className="flex items-center gap-3 py-2 px-2 text-gray-700 hover:text-orange-500 cursor-pointer">
                            <Home className="w-5 h-5" /> Home
                        </div>
                        <div onClick={() => { router.push('/properties'); setDrawerOpen(false); }} className="flex items-center gap-3 py-2 px-2 text-gray-700 hover:text-orange-500 cursor-pointer">
                            <ListOrdered className="w-5 h-5" /> Property
                        </div>
                        <div onClick={() => { router.push('/about-us'); setDrawerOpen(false); }} className="flex items-center gap-3 py-2 px-2 text-gray-700 hover:text-orange-500 cursor-pointer">
                            <Info className="w-5 h-5" /> About Us
                        </div>
                        <div className="flex items-center gap-3 py-2 px-2 text-gray-700">
                            <Phone className="w-5 h-5" /> (603) 555-0123
                        </div>
                        <div onClick={() => { setAddProperty(true); setDrawerOpen(false); }} className="flex items-center gap-3 py-2 px-2 text-gray-700 hover:text-orange-500 cursor-pointer">
                            <PlusCircle className="w-5 h-5" /> Add Property
                        </div>
                        <div className="flex flex-col gap-2 mt-4 border-t pt-4">
                            <span className="text-sm text-gray-500 font-semibold">Near By Cities</span>
                            <div onClick={() => { router.push('/cities/jaipur'); setDrawerOpen(false); }} className="text-gray-700 hover:text-orange-500 cursor-pointer px-2 py-1">Jaipur</div>
                            <div onClick={() => { router.push('/cities/udaipur'); setDrawerOpen(false); }} className="text-gray-700 hover:text-orange-500 cursor-pointer px-2 py-1">Udaipur</div>
                        </div>
                    </div>
                </div>
            )}

            {addProperty && (
                <AddProperty isOpen={addProperty} closeModal={setAddProperty} />
            )}

            <div>{children}</div>
        </div>
    );
}

const DropdownItem = ({ icon, label, onClick }) => (
    <div onClick={(e) => { e.stopPropagation(); onClick(); }} className="flex items-center gap-3 px-3 py-2 hover:bg-orange-100 cursor-pointer transition-all">
        <span className="text-gray-500 text-[16px]">{icon}</span>
        <span className="text-sm text-gray-700">{label}</span>
    </div>
);

DropdownItem.propTypes = {
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

NavigationBar.propTypes = {
    children: PropTypes.node.isRequired,
};
