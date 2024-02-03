import Header from "../comp/header";
import Footer from "../comp/Footer";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <input required placeholder="E-mail : " type="email" />
          <input required placeholder="Password : " type="password" />
          <button>Sign in</button>
          <p className="account">
            Don't have an account <Link to="/Signup">Sign-up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
