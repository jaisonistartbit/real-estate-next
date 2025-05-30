import NavigationBar from "../components/users/landing_page/navbar_component/NavigationBar"
import MainBanner from "../components/users/landing_page/main-banner/MainBanner"
import FlatListing from "../components/users/landing_page/flats-listing/FlatListing";
import Footer from "../components/users/landing_page/footer/Footer";
import NearCities from "../components/users/landing_page/neighbour-cities/NearCities";
import { ToastContainer, Bounce, toast } from "react-toastify";

export default function LandingPage() {
  return (
    <div className=" min-h-screen flex flex-col  ">
      <NavigationBar />

      {/* Your page content here */}


      <MainBanner />
      <FlatListing />
      <NearCities />
      

      <Footer />
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
        transition={Bounce}
        stacked
        style={{
          zIndex: 999999,
        }}
      />
    </div>
  );
}
