import React from 'react';
import { useSelector } from 'react-redux';
import './SalesTable.css';

const SalesTable = () => {
  const salesData = useSelector((state) => state.product.salesData);

  // Helper func to format numbers as currency
  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  };

  return (
    <div className="sales-table-container">
      <table className="sales-table">
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((entry) => (
            <tr key={entry.weekEnding}>
              <td>{entry.weekEnding}</td>
              <td>{formatCurrency(entry.retailSales)}</td>
              <td>{formatCurrency(entry.wholesaleSales)}</td>
              <td>{entry.unitsSold}</td>
              <td>{formatCurrency(entry.retailerMargin)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
