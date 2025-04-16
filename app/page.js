import NavigationBar from "../components/users/landing_page/navbar_component/NavigationBar"
import MainBanner from "../components/users/landing_page/main-banner/MainBanner"
import FlatListing from "../components/users/landing_page/flats-listing/FlatListing";
import Footer from "../components/users/landing_page/footer/Footer";
import NearCities from "../components/users/landing_page/neighbour-cities/NearCities";
import { ToastContainer } from "react-toastify";
export default function LandingPage() {
  return (
    <div className=" ">
      <NavigationBar>
        <MainBanner />
        <FlatListing />
        <NearCities />
        <Footer />
      </NavigationBar>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
