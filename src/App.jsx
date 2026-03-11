import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Clients from "./pages/Clients/Clients";
import PlaceholderPage from "./pages/PlaceholderPage/PlaceholderPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="main-content">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route
              path="/network"
              element={<PlaceholderPage title="Network" />}
            />
            <Route
              path="/traffic"
              element={<PlaceholderPage title="Traffic" />}
            />
            <Route
              path="/tickets"
              element={<PlaceholderPage title="Tickets" />}
            />
            <Route
              path="/settings"
              element={<PlaceholderPage title="Settings" />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;