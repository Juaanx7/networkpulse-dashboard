import "./PlaceholderPage.scss";

function PlaceholderPage({ title }) {
  return (
    <section className="placeholder-page">
      <div className="placeholder-page__card">
        <span className="placeholder-page__badge">In Progress</span>
        <h1>{title}</h1>
        <p>
          This module is currently under development and will be available in a
          future version of NetworkPulse.
        </p>
      </div>
    </section>
  );
}

export default PlaceholderPage;