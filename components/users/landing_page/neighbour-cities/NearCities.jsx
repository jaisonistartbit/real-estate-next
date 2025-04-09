import CityCardView from "./CityCardView"

const NearCities = () => {
    return (
        <div className="  ">
            <div className="text-center mt-[80px]  ">

                <h1 className="text-[1.8rem] font-[700] tracking-wide mb-2 ">
                    Explore The Neighborhoods
                </h1>
                <p className="text-gray-500 text-[0.8rem]  font-[400] tracking-[1px]   ">Find your dream apartment with our listing </p>



                <div className=" w-[93%] mx-auto mt-[50px] mb-[50px] ">
                    <div className=" grid  grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 gap-3 my-3">
                        <div className=" text-center"><CityCardView imageUrl={'/images/cities/city1.jpg'} cityName={'Udaipur'} /></div>
                        <div className="  text-center"><CityCardView imageUrl={'/images/cities/city5.jpg'} cityName={'Jodhpur'} /></div>
                        <div className=" text-center"><CityCardView imageUrl={'/images/cities/city3.jpg'} cityName={'Delhi'} /></div>
                        <div className=" text-center"><CityCardView imageUrl={'/images/cities/city4.jpg'} cityName={'Gurugram'} /></div>
                    </div>

                    <div className="   grid grid-cols-4 gap-4">
                        
                        <div className="col-span-4  sm:col-span-4 md:col-span-2 lg:col-span-1 text-center"><CityCardView imageUrl={'/images/cities/city2.jpg'} cityName={'Kota'} /></div>
                        <div className="col-span-4  sm:col-span-4 md:col-span-2 lg:col-span-2  text-center"><CityCardView imageUrl={'/images/cities/city6.jpg'} cityName={'Mumbai'} /></div>
                        <div className="col-span-4  sm:col-span-4 md:col-span-2 lg:col-span-1  text-center"><CityCardView imageUrl={'/images/cities/city7.jpg'} cityName={'Banglore'} /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NearCities