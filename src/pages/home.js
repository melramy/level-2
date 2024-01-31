import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";


//  level 2
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext"

const Home = () => {

  const {theme} = useContext(ThemeContext);
  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
      </Helmet>

      <div className={`${theme}`}>
        <Header />

        <MainContent pageName="HOME Page" />

        <Footer />
      </div>
    </>
  );
};

export default Home;
