import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Routes/HomePage";
import LoginSignup from "./Routes/LoginSignup";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(true)
  const [JWTAuthentication, setJWTAuthentication] = useState(null)

  useEffect(() => {
    setLoading(true)
    // ----------API CALL------------
    axios
      .get(
        // body: JSON.stringify({
        `${process.env.REACT_APP_API_URL}/api/admin/authorize`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true
        }
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setJWTAuthentication(true);
          setLoading(false)
          // console.warn (response.data)
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
        setJWTAuthentication(false)
        setLoading(false)
        // alert(error.response.data.msg)
      });
    // let API_Response = true
    // ------------------------------
    // setJWTAuthentication(API_Response)
  }, [])

  return (
    <>
      {loading ?
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100vh', backgroundImage: 'linear-gradient(transparent, #cbcbcbd6)' }}>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        : JWTAuthentication === true ? (
          <HomePage />
        ) : JWTAuthentication === false ? (
          <LoginSignup setJWTAuthentication={setJWTAuthentication} />
        ) : null}
    </>
  );
};

export default App;
