import { NavLink } from "react-router-dom";
import {
  HiOutlineSquares2X2,
  HiOutlineUsers,
  HiOutlineServerStack,
  HiOutlineChartBar,
  HiOutlineTicket,
  HiOutlineCog6Tooth,
  HiOutlineXMark,
} from "react-icons/hi2";
import "./Sidebar.scss";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "sidebar-overlay--visible" : ""}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__mobile-top">
          <button className="sidebar__close-btn" onClick={onClose}>
            <HiOutlineXMark />
          </button>
        </div>

        <div className="sidebar__brand">
          <div className="sidebar__logo">🛡️</div>
          <div>
            <h2>NetworkPulse</h2>
            <p>Admin Console</p>
          </div>
        </div>

        <nav className="sidebar__nav">
          <NavLink to="/" end onClick={onClose}>
            <HiOutlineSquares2X2 />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/clients" onClick={onClose}>
            <HiOutlineUsers />
            <span>Clients</span>
          </NavLink>

          <NavLink to="/network" onClick={onClose}>
            <HiOutlineServerStack />
            <span>Network</span>
          </NavLink>

          <NavLink to="/traffic" onClick={onClose}>
            <HiOutlineChartBar />
            <span>Traffic</span>
          </NavLink>

          <NavLink to="/tickets" onClick={onClose}>
            <HiOutlineTicket />
            <span>Tickets</span>
          </NavLink>
        </nav>

        <div className="sidebar__bottom">
          <NavLink to="/settings" onClick={onClose}>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>

          <div className="sidebar__user">
            <div className="sidebar__avatar">J</div>
            <div>
              <strong>Juan Acosta</strong>
              <p>Network Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;