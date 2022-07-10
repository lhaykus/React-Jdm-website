import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {
  Timeline, TrendingUp, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report,
  People, Store, Apps,
} from "@material-ui/icons";
import { Button, useTheme, useMediaQuery, List, Menu, MenuItem, ListItem } from '@material-ui/core';
import DrawerComponent from '../DrawerComponent';
import { Link } from 'react-router-dom';


export default function Topbar() {
  return (
    <div className="topbar">
      <br/>
        <span className="logo">Twin Turbos Admin Panel</span>
        <br/>
      <div className="topbar-wrapper">
        <div className="topLeft">
        </div>
        <br/>
        <Link to="/admin" className="link">
          <li className="sidebar-list-item active">
            <Apps className="sidebar-icon" />
            Home
          </li>
          <br/>
        </Link>
        <Link to="/users" className="link">
          <li className="sidebar-list-item">
            <People className="sidebar-icon" />
            Users
          </li>
          <br/>
        </Link>
        <Link to="/admin/products" className="link">
          <li className="sidebar-list-item">
            <Store className="sidebar-icon" />
            Products
          </li>
          <br/>
        </Link>
        <img src="https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topbar-avatar" />
      </div>
    </div>

  );
}