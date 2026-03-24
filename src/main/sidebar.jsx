import React from "react";

const SideBar = ({ click1, click2, click3, click4 }) => {
  return (
    <>
      <header className="gym-header unified-sidebar">
        <nav className="gym-nav unified-sidebar-nav">
          <div className="unified-sidebar-group unified-sidebar-group-left">
            <span
              className="gym-nav-item unified-sidebar-item"
              onClick={click2}
            >
              Home
            </span>
            <span
              className="gym-nav-item unified-sidebar-item"
              onClick={click3}
            >
              Why Ultra EgoPhysique
            </span>
          </div>

          <div className="unified-sidebar-brand" onClick={click2}>
            <img
              className="gym-nav-logo unified-sidebar-logo"
              src={`public/ultraego/1.png`}
              alt="Ultra Ego Physique Gym logo"
            />
          </div>

          <div className="unified-sidebar-group unified-sidebar-group-right">
            <span
              className="gym-nav-item unified-sidebar-item"
              onClick={click1}
            >
              About Us
            </span>
            <span
              className="gym-nav-item unified-sidebar-item"
              onClick={click4}
            >
              Memberships & Packages
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default SideBar;
