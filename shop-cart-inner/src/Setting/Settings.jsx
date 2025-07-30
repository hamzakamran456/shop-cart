import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div
      className="container text-center"
      style={{ minHeight: "80vh", paddingTop: "80px" }}
    >
      <h2 className="mb-3 fw-bold">Settings & Preferences</h2>
      <p className="mb-5 px-md-5 text-muted">
        This area is dedicated to user and content preferences. You can use the
        quick links below to navigate to key sections of the platform like shop,
        blog, or homepage. Future updates will let you personalize your
        experience more deeply.
      </p>

      <div className="row justify-content-center g-4">
        <div className="col-md-4">
          <div className="p-4 border rounded-3 h-100 shadow-sm">
            <h5 className="fw-semibold">Home Navigation</h5>
            <p className="text-muted">
              Return to the homepage and explore new arrivals and updates.
            </p>
            <Link to="/" className="lab-btn mt-2">
              <span>Go to Home</span>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded-3 h-100 shadow-sm">
            <h5 className="fw-semibold">Shop Preferences</h5>
            <p className="text-muted">
              Visit the shop and manage your cart, favorites, or purchases.
            </p>
            <Link to="/shop" className="lab-btn mt-2">
              <span>Visit Shop</span>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded-3 h-100 shadow-sm">
            <h5 className="fw-semibold">Blog Settings</h5>
            <p className="text-muted">
              Manage your blog preferences, reading list, or comment history.
            </p>
            <Link to="/blog" className="lab-btn mt-2">
              <span>Blog Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
