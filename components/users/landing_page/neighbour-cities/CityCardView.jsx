
import PropTypes from "prop-types"
const CityCardView = ({ imageUrl, cityName, propertyCount }) => {

    return (

        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="h-[200px] bg-center bg-no-repeat bg-cover image-div rounded-[12px] relative my-2 sm:my-0"
        >


            <div className="h-[40px] rounded-[12px] w-[100%] absolute px-3 pt-1   flex justify-between start-0 end-0 bottom-0" style={{ background: 'linear-gradient(359deg, rgb(0 0 0 / 81%), rgb(0 0 0 / 0%))' }} >
                <div className="text-white font-[500] text-[16px] tracking-wide pt-1">
                    {cityName}
                </div>
                <div>
                    <button className="text-white bg-[#b7b7b740]   py-1 px-3 text-[14px] rounded-[10px] hover:bg-orange-400 hover:text-white" > {propertyCount} Properties &gt;</button>


                </div>

            </div>


        </div>
    )
}

CityCardView.propTypes = {
    imageUrl: PropTypes.any,
    cityName: PropTypes.any
}

export default CityCardView