import { ChevronRight, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer
            className="bg-gray-900 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left  ">
            <div className=" container mx-auto  ">

                <div style={{ borderBottom: '1px solid gray' }}
                    className="block sm:flex md:flex sm:flex items-center justify-center    border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between  ">
                    <div className="lg:mr-12 md:mr-12  sm:mr-12 mb-5 sm:mb-0">
                        <div className="flex gap-2 lg:mr-12 md:mr-12  sm:mr-12   mx-auto" >
                            <div className="  pt-[2px] " >
                                <img src="/svgs/logo.svg " alt="" className="h-[30px] w-[30px] m-auto" />
                            </div>
                            <div className="  font-[700] " >
                                <h1 className="mb-0 text-white">
                                    HOMIES
                                </h1>

                                <p className="text-gray-300 text-[11px] font-[400] tracking-[2px] mt-0">
                                    Real Estate
                                </p>

                            </div>
                        </div>
                    </div>
                    {/* <!-- Social network icons container --> */}
                    <div className="block sm:flex md:flex sm:flex  justify-center gap-[40px]">
                        <div className="flex gap-[20px] mb-5 sm:mb-0 ">
                            <div className="">
                                <Phone style={{ color: 'rgb(251 146 60)', height: '36px', width: "32px", marginTop: '5px' }} />

                            </div>
                            <div className="text-start">
                                <p className="text-gray-400 text-[15px]">
                                    Call us
                                </p>
                                <p className="text-white text-[14px]">
                                    (603) 555-0123
                                </p>
                            </div>

                        </div>
                        <div className="flex gap-[20px] mb-5 sm:mb-0">
                            <div className="">
                                <Mail style={{ color: 'rgb(251 146 60)', height: '36px', width: "32px", marginTop: '5px' }} />

                            </div>
                            <div className="text-start">
                                <p className="text-gray-400 text-[15px]">
                                    Nee live help
                                </p>
                                <p className="text-white  text-[14px]">
                                    Jai@startbitsolutions.com
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        {/* <!-- Products section --> */}
                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
                                Company
                            </h6>
                            <p className="mb-4">
                                <a href={'/about-us'} className=" text-[14px]  flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />About Us</a>
                            </p>
                            {/* <p className="mb-4">
                                <a href={'/'} className=" text-[14px]  flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />Why choose us?</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px]  flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />Customer reviews</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px]  flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />Our team</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px]  flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />Careers with reality</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px]  flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />Work with Us</a>
                            </p> */}
                        </div>
                        {/* <!-- Useful links section --> */}
                        {/* <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
                                Popular House
                            </h6>
                            <p className="mb-4">
                                <a href={'/'} className="text-[14px]  flex  text-white hover:text-orange-400"
                                > #Penthouses</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className="text-[14px]  flex  text-white hover:text-orange-400"
                                > #Villas</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className="text-[14px]  flex  text-white hover:text-orange-400"
                                >  #Smart home</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px] flex  text-white hover:text-orange-400"
                                > #Appartments</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className="text-[14px]  flex  text-white hover:text-orange-400"
                                >  #Office</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className="text-[14px]  flex  text-white hover:text-orange-400"
                                > #Bunglow</a>
                            </p>
                        </div> */}
                        {/* <!-- Contact section --> */}
                        {/* <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
                                Quicks Links
                            </h6>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px] flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />Terms of use</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px] flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />Privacy policy</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px] flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " /> Our services</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px] flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />Contact support</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px] flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " /> Pricing plan</a>
                            </p>
                            <p className="mb-4">
                                <a href={'/'} className=" text-[14px] flex  text-white hover:text-orange-400"
                                ><ChevronRight className="h-[22px] w-[19px] " />Faqs</a>
                            </p>
                        </div>
                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
                                Newsletter
                            </h6>
                            <p className="text-[14px] text-white mb-3">Sign up to recieve the latest article</p>
                            <input placeholder="your email address" className="w-[100%] py-2 bg-transparent border border-1xl rounded-lg px-3 mb-2 placeholder:text-gray-400">
                            </input>
                            <button className="bg-orange-400 text-[16px] text-white font-[600]  w-[100%]   py-3 rounded-lg   text-center hover:border  hover:border-orange-400 hover:text-orange-400 hover:bg-white">Subscribe </button>
                            <div className="text-gray-400 cursor-pointer text-[13px]">

                                <input type="checkbox" className="mt-3"></input> I have read and agreed to all terms and conditions.
                            </div>

                        </div>*/}
                    </div>
                </div>

                {/* <!--Copyright section--> */}
                <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 hidden">
                    <span>© 2023 Copyright:</span>
                    <a
                        className="font-semibold text-neutral-600 dark:text-neutral-400"
                        href="https://tw-elements.com/"
                    >TW Elements</a>
                </div>

            </div>

        </footer>
    );
}