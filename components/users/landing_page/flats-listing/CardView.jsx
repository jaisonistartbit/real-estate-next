"use client"
import PropTypes from "prop-types"
import { ArrowRightLeft, Bookmark, MapPin } from "lucide-react";
import './cardcss.css';
import { useRouter } from "next/navigation";


const CardView = ({ item, key }) => {

  const router = useRouter();

  return (


    <div onClick={() => {
      router.push(`/property/${item?.id}`);

    }} key={item?.id} style={{
      borderStyle: "solid",
      borderColor: " #e5e7eb"
    }} className="border rounded-lg overflow-hidden cursor-pointer" >
      <div
        style={{ backgroundImage: `url(${item?.property_banner_image})` }}
        className="h-[250px] bg-center bg-no-repeat bg-cover image-div"
      >
        <div className="h-full w-full bg-black/50  card-hidden relative pt-4 px-3">
          <p className="text-start">
            <span className="rounded-[20px] bg-orange-400 text-white px-3 py-1 text-[12px] me-1 cursor-pointer font-[700]">
              Featured
            </span>
            <span className="cursor-pointer rounded-[20px] bg-gray-700 text-white px-5 py-1 text-[12px] me-1 font-[700]">
              Rent
            </span>
          </p>

          <Bookmark
            className="cursor-pointer"
            style={{
              color: 'rgb(251 146 60)',
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '7px',
              height: '36px',
              width: '36px',
              margin: 'auto',
              position: 'absolute',
              bottom: '0',
              top: '0',
              right: '0',
              left: '0',
            }}
          />
        </div>
      </div>

      <div className="px-3 py-2">
        <h1 className="text-[18px] text-gray-800 font-[600] text-start" style={{ wordSpacing: '2px' }}>
          {item?.name}
        </h1>

        <p className="flex my-2 text-[12px] text-gray-500">
          <span className="text-start me-1 pt-[1px]">
            <MapPin className="h-[14px] w-[14px]" />
          </span>
          <span>{item?.location}</span>
        </p>

        <p className="mb-3 text-start">
          <span>{item?.total_rooms} <span className="text-gray-500">Bed</span></span>
          <span className="mx-3">{item?.total_bathroom} <span className="text-gray-500">Bath</span></span>
          <span>{item?.dimension} <span className="text-gray-500">Sqft</span></span>
        </p>

        <hr style={{
          borderStyle: "solid",
          borderColor: " #e5e7eb"
        }} />

        <div className="flex justify-between mt-3">
          <div className="text-[14px] font-[600] text-orange-400 pt-1">₹ {item?.price}</div>

          {/* <div className="flex text-[14px]">
            <span className="pt-1">
              <ArrowRightLeft style={{ height: '13px' }} />
            </span>
            Compare
          </div> */}

          <div>
            <button className="border border-orange-400 text-[14px] text-orange-400 font-[600] px-2 py-[2px] rounded-lg hover:bg-orange-400 hover:text-white">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

CardView.propTypes = {
  item: PropTypes.any,
  key: PropTypes.any
}

export default CardView;
