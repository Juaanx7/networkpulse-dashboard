import "./MetricCard.scss";

function MetricCard({ title, value, status, statusType, accent }) {
  return (
    <article className={`metric-card metric-card--${accent}`}>
      <div className="metric-card__top">
        <span className="metric-card__title">{title}</span>
        <span className={`metric-card__badge metric-card__badge--${statusType}`}>
          {status}
        </span>
      </div>

      <h3 className="metric-card__value">{value}</h3>

      <div className="metric-card__bar" />
    </article>
  );
}

export default MetricCard;