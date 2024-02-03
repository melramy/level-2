import Header from "../comp/header";
import Footer from "../comp/Footer";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firbaseError, setfirbaseError] = useState("");
  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            required
            placeholder="E-mail : "
            type="email"
          />
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            placeholder="Password : "
            type="password"
          />
          <button
            onClick={(eo) => {
              eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  navigate("/");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                  sethasError(true);
                  setfirbaseError(errorCode);
                });
            }}
          >
            Sign in
          </button>
          <p className="account">
            Don't have an account <Link to="/Signup">Sign-up</Link>
          </p>

          {hasError && <h2> {firbaseError} </h2>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
