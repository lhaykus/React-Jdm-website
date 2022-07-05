import { Link } from 'react-router-dom';
import React from 'react';
import './sidebar.css';
import {
    Timeline, TrendingUp, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report,
    People, Store, Apps,
} from "@material-ui/icons";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu '>
                    <h3 className='sidebar-title'>Dashboard</h3>
                    <ul className='sidebar-list'>
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <Apps className="sidebar-icon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebar-icon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebar-icon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu ">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <People className="sidebar-icon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Store className="sidebar-icon" />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebar-icon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebar-icon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu ">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-list">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebar-icon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebar-icon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebar-icon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu ">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebar-icon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebar-icon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebar-icon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;