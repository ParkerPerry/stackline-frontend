import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './SalesGraph.css';

const SalesGraph = () => {
  const salesData = useSelector((state) => state.product.salesData);

  // Helper funct to get month name
  const getMonthName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'short' });
  };

  
  const dataWithMonthMarker = salesData.map((data, index, arr) => {
    const month = getMonthName(data.weekEnding);
    const prevMonth = index > 0 ? getMonthName(arr[index - 1].weekEnding) : '';
    return {
      ...data,
      displayMonth: month !== prevMonth ? month : ''
    };
  });

  // Custom formatter to show month name only for the first week of each month
  const monthTickFormatter = (tick) => {
    return tick;
  };

  return (
    <div className="sales-graph-container">
      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={dataWithMonthMarker} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="displayMonth" tickFormatter={monthTickFormatter} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="retailSales" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesGraph;
