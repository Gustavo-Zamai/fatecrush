import React, { useState } from "react";

import Nav from "../../components/Nav/Nav";
import AuthModal from "../../components/AuthModal/AuthModal";

import "./styles.css";

const Home = () => {

  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true)

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true)
    setIsSignUp(true);
  };
  return (
    <div className="content">
      <Nav 
          minimal={false}
          authToken={authToken}
          showModal={showModal}
          setShowModal={setShowModal}
          setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="primary-title">Swipe Right</h1>

        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        { showModal && (
          <AuthModal 
            setShowModal={setShowModal} 
            isSignUp={isSignUp}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
