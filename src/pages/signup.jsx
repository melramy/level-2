import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <p
            style={{
              fontSize: "23px",
              marginBottom: "22px",
            }}
          >
            Create a new account <span>🧡</span>
          </p>

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

              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;

                  console.log("doneeeeeeeeeeeeee");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                  // ..
                });
            }}
          >
            Sign up
          </button>
          <p className="account">
            Alrady have an account <Link to="/Signin">Sign-in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
