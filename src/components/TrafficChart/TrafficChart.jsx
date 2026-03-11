import "./TrafficChart.scss";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { trafficData } from "../../data/trafficData";

function TrafficChart() {
  return (
    <div className="traffic-chart">
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="downloadGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="time"
            stroke="#64748b"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#64748b"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px",
              color: "#e2e8f0",
            }}
            labelStyle={{ color: "#94a3b8" }}
          />

          <Area
            type="monotone"
            dataKey="upload"
            stroke="#94a3b8"
            strokeWidth={2}
            fill="transparent"
            strokeDasharray="4 4"
          />

          <Area
            type="monotone"
            dataKey="download"
            stroke="#3b82f6"
            strokeWidth={3}
            fill="url(#downloadGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrafficChart;