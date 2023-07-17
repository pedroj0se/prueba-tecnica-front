// import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import HomePage from "../../Components/Home/Home";
import Destination from "../../Components/Destination/Destination";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Destination />
      {/* <Header/> */}
      <div className="homeContainer">
        {/* <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/> */}
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Home;
