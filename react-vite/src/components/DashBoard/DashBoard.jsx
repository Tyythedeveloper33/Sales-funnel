import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import { useDispatch } from "react-redux";
import { thunkLogout } from "../../redux/session";
import { useSelector } from "react-redux";
const Dashboard = () => {
    const dispatch = useDispatch()
    const logout = (e) => {
        e.preventDefault();
        dispatch(thunkLogout());

      };
      const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">SiteMagnet</h2>
        <nav>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/clients"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Questionnaire
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Settings
          </NavLink>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <div>
            <h1>Welcome Back, {sessionUser.username}</h1>
            <p>Your digital marketing dashboard</p>
          </div>
   <button onClick={logout}>Logout</button>
          <button className="btn-cta">Book a Call</button>

        </header>
        <section className="card-grid">
          <div className="card">
            <h2>Total Revenue</h2>
            <p>$12,500</p>
          </div>
          <div className="card">
            <h2>Client Growth</h2>
            <p>+25%</p>
          </div>
          <div className="card">
            <h2>Website Performance</h2>
            <p>98% Uptime</p>
          </div>
          <div className="card">
            <h2>Project Updates</h2>
            <p>3 Active Projects</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
