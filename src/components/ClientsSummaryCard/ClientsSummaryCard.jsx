import "./ClientsSummaryCard.scss";
import {
  HiOutlineCheckCircle,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

function ClientsSummaryCard({ icon, value, label, badge }) {
  const renderIcon = () => {
    switch (icon) {
      case "status":
        return <HiOutlineCheckCircle />;
      case "speed":
        return <HiOutlineBolt />;
      case "cities":
        return <HiOutlineGlobeAlt />;
      default:
        return <HiOutlineCheckCircle />;
    }
  };

  return (
    <article className="clients-summary-card">
      <div className="clients-summary-card__top">
        <div className="clients-summary-card__icon">{renderIcon()}</div>

        {badge && (
          <span className="clients-summary-card__badge">{badge}</span>
        )}
      </div>

      <h3>{value}</h3>
      <p>{label}</p>
    </article>
  );
}

export default ClientsSummaryCard;