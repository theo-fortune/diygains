import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";
import CustomBarComponent from "./CustomBarComponent";

export default class Chart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd";

  state = {
    data: [
      {
        name: "Mar",
        rev: 51197,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Apr",
        rev: 61194,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "May",
        rev: 42537,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Jun",
        rev: 83582,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Jul",
        rev: 73358,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Aug",
        rev: 51197,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Sep",
        rev: 66865,
        pv: 4300,
        amt: 2100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: "100%" }} className="dashboard-card chart">
        <div className="chart-head">
          <p>Monthly Revenue</p>
          <h3>₦{activeItem.rev.toLocaleString()}</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={150} height={40} data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fontFamily: "var(--lato)",
                color: "var(--raising-black)",
                fontWeight: 500,
                fontSize: 12,
              }}
            />
            <Bar
              dataKey="rev"
              onClick={this.handleClick}
              shape={<CustomBarComponent />}
            >
              {data.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={
                    index === activeIndex
                      ? "var(--majorelle-blue-lighter-variant)"
                      : "var(--ash-gray)"
                  }
                  key={`cell-${index}`}
                  active={true}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
