import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../src/assets/images/logo/logo.png";
import { AuthContext } from "../contexts/AuthProviders";
import Swal from "sweetalert2";
import defaultUserImage from "../assets/images/author/03.jpg";

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire("Success", "Logged out successfully!", "success");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            {!user ? (
              <>
                <Link to="/sign-up" className="lab-btn me-3">
                  <span>Create Account</span>
                </Link>
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </>
            ) : (
              <>
                <span className="me-3 text-white">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="lab-btn btn-sm"
                  style={{
                    backgroundColor: "#ff4d4d",
                    border: "none",
                  }}
                >
                  <span style={{ color: "#fff" }}>
                    <i className="icofont-logout me-1"></i> Logout
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {!user ? (
                <>
                  <Link
                    to="/sign-up"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    Create Account
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Log In
                  </Link>
                </>
              ) : (
                <div className="user-dropdown d-none d-md-block position-relative">
                  <img
                    src={user.photoURL || defaultUserImage}
                    alt="User"
                    className="rounded-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  />
                  {dropdownOpen && (
                    <div
                      className="dropdown-menu show shadow"
                      style={{
                        position: "absolute",
                        top: "50px",
                        right: 0,
                        minWidth: "220px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        zIndex: 1000,
                        padding: "10px",
                      }}
                    >
                      <div className="px-3 pb-2 border-bottom">
                        <strong>{user.displayName || "User"}</strong>
                        <p className="text-muted small mb-0">{user.email}</p>
                      </div>
                      {/* <Link to="/profile" className="dropdown-item py-2">
                        <i className="icofont-eye me-2"></i> Show Profile
                      </Link> */}
                      <Link to="/settings" className="dropdown-item py-2">
                        <i className="icofont-gear me-2"></i> Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="dropdown-item text-danger py-2 w-100 text-start"
                      >
                        <i className="icofont-logout me-2"></i> Sign out
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
