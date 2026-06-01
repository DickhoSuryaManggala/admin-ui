import React from 'react';
import Card from '../Elements/Card';

function CardExpensesBreakdown({ data = [] }) {
  const content = (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.category} className="flex justify-between text-sm text-gray-700">
          <span>{item.category}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );

  return <Card title="Expenses Breakdown" desc={content} />;
}

export default CardExpensesBreakdown;
