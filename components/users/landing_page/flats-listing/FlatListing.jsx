import CardView from "./CardView"

const FlatListing = () => {
    const images = [
        '/images/flats/FlatPhoto5.jpg',
        '/images/flats/FlatPhoto1.jpg',
        '/images/flats/FlatPhoto2.jpg',
        '/images/flats/FlatPhoto3.jpg',
        '/images/flats/FlatPhoto4.jpg',
    ];
    return (
        <div className="  ">
            <div className="text-center mt-[50px] ">

                <h1 className="text-[1.8rem] font-[700] tracking-wide mb-2 ">
                    Today&apos;s Luxury Listings
                </h1>
                <p className="text-gray-500 text-[0.8rem]  font-[400] tracking-[1px]   ">Thousands of luxury flats and rooms enthusiasts just like you visit our website </p>
                <div className="container lg:w-[75%] md:w-[85%] sm:w-[90%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-8 mt-12 mb-5">
                    {images.map((item, key) => (
                        <CardView item={item} key={key} />
                    ))}
                </div>


            </div>
        </div>
    )
}

export default FlatListing