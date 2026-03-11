import "./Dashboard.scss";
import MetricCard from "../../components/MetricCard/MetricCard";
import { metrics, nodes, clientsPreview } from "../../data/dashboardData";
import TrafficChart from "../../components/TrafficChart/TrafficChart";
import DeviceDistribution from "../../components/DeviceDistribution/DeviceDistribution";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard__metrics">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <section className="dashboard__panel dashboard__panel--chart">
        <div className="dashboard__panel-header">
          <div>
            <h2>Network Traffic (Upload vs Download)</h2>
            <p>Real-time data visualization of global traffic flows</p>
          </div>
        </div>

        <div className="dashboard__chart-placeholder">
          <TrafficChart />
        </div>
      </section>

      <div className="dashboard__widgets">
        <section className="dashboard__panel">
          <div className="dashboard__panel-header">
            <h2>Network Nodes Status</h2>
            <a href="/network">View All</a>
          </div>

          <div className="dashboard__nodes">
            {nodes.map((node) => (
              <div key={node.name} className="dashboard__node">
                <div>
                  <strong>{node.name}</strong>
                  <p>{node.location}</p>
                </div>

                <div className="dashboard__node-status">
                  <span
                    className={`dashboard__dot dashboard__dot--${node.color}`}
                  />
                  <div>
                    <strong>{node.status}</strong>
                    <p>Latency: {node.latency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard__panel">
          <div className="dashboard__panel-header">
            <h2>Device Distribution</h2>
          </div>

          <div className="dashboard__distribution-placeholder">
            <DeviceDistribution />
          </div>
        </section>
      </div>

      <section className="dashboard__panel">
        <div className="dashboard__panel-header">
          <h2>Connected Clients</h2>
        </div>

        <div className="dashboard__table-wrap">
          <table className="dashboard__table">
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Current Speed</th>
                <th>Last Connection</th>
              </tr>
            </thead>
            <tbody>
              {clientsPreview.map((client) => (
                <tr key={client.name}>
                  <td>
                    <div className="dashboard__client">
                      <span className="dashboard__client-badge">
                        {client.initials}
                      </span>
                      <span>{client.name}</span>
                    </div>
                  </td>
                  <td>{client.plan}</td>
                  <td>
                    <span
                      className={`dashboard__status ${
                        client.status === "Active"
                          ? "dashboard__status--active"
                          : "dashboard__status--idle"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td>{client.speed}</td>
                  <td>{client.lastConnection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;