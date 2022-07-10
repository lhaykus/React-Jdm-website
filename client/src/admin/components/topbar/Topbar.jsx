import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topLeft">
          <span className="logo">Twin Turbos</span>
        </div>
        <div className="topRight">
          <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Language />
            <span className="icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topbar-avatar" />
        </div>
      </div>
    </div>
  );
}