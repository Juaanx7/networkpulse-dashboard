import "./DeviceDistribution.scss";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { distributionData } from "../../data/distributionData";

const COLORS = ["#94a3b8", "#3b82f6"];

function DeviceDistribution() {
  const total = distributionData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="device-distribution">
      <div className="device-distribution__chart">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={distributionData}
              dataKey="value"
              innerRadius={62}
              outerRadius={86}
              stroke="none"
              paddingAngle={4}
            >
              {distributionData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="device-distribution__center">
          <strong>1.2k</strong>
          <span>TOTAL</span>
        </div>
      </div>

      <div className="device-distribution__legend">
        {distributionData.map((item, index) => (
          <div key={item.name} className="device-distribution__legend-item">
            <div className="device-distribution__legend-left">
              <span
                className="device-distribution__dot"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span>{item.name}</span>
            </div>
            <strong>{item.value}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeviceDistribution;