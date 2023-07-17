import Chart from "../../Components/chart/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import "./homeAdmin.css";
import { userData } from "../../dummyData";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";

const HomeAdmin = () => {
    return (
        <>
            <Topbar />
            <div className="containerAdmin">
                <Sidebar />
                <div className="Admin">
                    <FeaturedInfo />
                    <Chart data={userData} title="User Analytics" grid dataKey="Reservas" />
                    <div className="homeWidgets">
                        {/* <WidgetSm/> */}
                        <WidgetLg />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeAdmin;