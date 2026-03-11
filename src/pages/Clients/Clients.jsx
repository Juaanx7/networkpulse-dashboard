import "./Clients.scss";
import { useMemo, useState } from "react";
import { clientsData, clientsSummary } from "../../data/clientsData";
import ClientsSummaryCard from "../../components/ClientsSummaryCard/ClientsSummaryCard";

function Clients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("All Plans");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const filteredClients = useMemo(() => {
    return clientsData.filter((client) => {
      const matchesSearch =
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.ip.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPlan =
        selectedPlan === "All Plans" || client.plan === selectedPlan;

      const matchesStatus =
        selectedStatus === "All Status" || client.status === selectedStatus;

      return matchesSearch && matchesPlan && matchesStatus;
    });
  }, [searchTerm, selectedPlan, selectedStatus]);

  return (
    <section className="clients">
      <header className="clients__header">
        <div>
          <h1>Clients Management</h1>
          <p>Monitor and manage connected clients across the network.</p>
        </div>

        <button className="clients__cta">+ Add Client</button>
      </header>

      <div className="clients__filters">
        <input
          type="text"
          placeholder="Search client or IP..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
        >
          <option>All Plans</option>
          <option>Enterprise Plus</option>
          <option>Business Pro</option>
          <option>Standard</option>
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Idle</option>
        </select>
      </div>

      <div className="clients__summary">
        <span>{filteredClients.length} clients found</span>
      </div>

      <div className="clients__table-wrap">
        <table className="clients__table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Speed</th>
              <th>IP Address</th>
            </tr>
          </thead>

          <tbody>
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <tr key={client.id}>
                  <td>
                    <div className="clients__client">
                      <span className="clients__badge">{client.initials}</span>
                      {client.name}
                    </div>
                  </td>

                  <td>{client.plan}</td>

                  <td>
                    <span
                      className={`clients__status ${
                        client.status === "Active"
                          ? "clients__status--active"
                          : "clients__status--idle"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>

                  <td>{client.speed}</td>

                  <td>{client.ip}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="clients__empty">
                  No clients match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="clients__summary-grid">
        {clientsSummary.map((item) => (
          <ClientsSummaryCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Clients;