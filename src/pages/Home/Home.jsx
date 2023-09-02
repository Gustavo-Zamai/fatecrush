import React from "react";

import Nav from "../../components/Nav/Nav";

import "./styles.css";

const Home = () => {
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="content">
      <Nav minimal={false} authToken={authToken} />
      <div className="home">
        <h1>Swipe Right </h1>

        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
      </div>
    </div>
  );
};

export default Home;
