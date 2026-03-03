import React from "react";
import { MdEdit } from "react-icons/md";
import { FaBell } from "react-icons/fa";



const ProfilePage = () => {
  return (
    <div className="profile-page">

      {/* Top App Bar */}
      <div className="app-bar">
        <h2>My Profile</h2>
        <div className="app-icons">
          <FaBell />
          <MdEdit />
        </div>
      </div>

      {/* Identity Card */}
      <div className="card identity-card">
        <img
          src="https://via.placeholder.com/80"
          alt="Farmer"
          className="avatar"
        />
        <div className="identity-info">
          <h3>Rajesh Kumar</h3>
          <p>Bandoda, Goa</p>
          <span className="verified">✔ Verified Farmer</span>
          <p className="member">Member Since: 2023</p>
        </div>
      </div>

      {/* My Farm Section */}
      <h4 className="section-title">My Farm</h4>
      <div className="card farm-card">
        <div className="farm-item">
          <span>🌾</span>
          <div>
            <p>Land</p>
            <strong>5 Acres</strong>
          </div>
        </div>

        <div className="farm-item">
          <span>🪨</span>
          <div>
            <p>Soil Type</p>
            <strong>Red Loamy</strong>
          </div>
        </div>

        <div className="farm-item">
          <span>🌱</span>
          <div>
            <p>Primary Crops</p>
            <strong>Rice, Chilli</strong>
          </div>
        </div>

        <div className="farm-item">
          <span>💧</span>
          <div>
            <p>Irrigation</p>
            <strong>Tube well / Rainfed</strong>
          </div>
        </div>
      </div>

      {/* Grid Actions */}
      <div className="grid-actions">
        <div className="grid-card">📦<span>My Listings</span></div>
        <div className="grid-card">📄<span>Crop History</span></div>
        <div className="grid-card">🚜<span>Equipment</span></div>
        <div className="grid-card">💰<span>Ledger / Khata</span></div>
      </div>

      {/* App Preferences */}
      <h4 className="section-title">App Preferences</h4>

      <div className="preferences">
        <div className="pref-item">
          🌐 Change Language
          <span>English | हिंदी</span>
        </div>

        <div className="pref-item">
          🌙 Dark Mode
          <span>Off</span>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="bottom-actions">
        <button className="support-btn">📞 Call Support</button>
        <button className="logout-btn">Log Out</button>
      </div>

    </div>
  );
};

export default ProfilePage;



