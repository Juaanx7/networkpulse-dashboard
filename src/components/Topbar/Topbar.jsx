import "./Topbar.scss";
import {
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineBars3,
} from "react-icons/hi2";

function Topbar({ onMenuClick }) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <button className="topbar__menu-btn" onClick={onMenuClick}>
          <HiOutlineBars3 />
        </button>

        <div className="topbar__search">
          <HiOutlineMagnifyingGlass />
          <input type="text" placeholder="Search network, clients or nodes..." />
        </div>
      </div>

      <div className="topbar__actions">
        <button className="topbar__icon-btn">
          <HiOutlineBell />
        </button>

        <button className="topbar__cta">+ New Node</button>
      </div>
    </header>
  );
}

export default Topbar;