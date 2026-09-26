import Bannner from "../componants/Bannner";
import Firstpage from "../componants/Firstpage";
import Second from "../componants/Second";
import Third from "../componants/Third";
import Fourth from "../componants/Fourth";
import Fifth from "../componants/Fifth";
import Sixth from "../componants/Sixth";
import Footer from "../componants/Footer";
const Home = ({ service }) => {
  return (
    <>
      <Bannner />
      <Firstpage />
      <Second />
      <Third />
      <Fourth service={service} />
      <Fifth />
      <Sixth />
      <Footer />
    </>
  );
};

export default Home;
