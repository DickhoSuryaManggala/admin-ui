import React from 'react';
import Card from '../Elements/Card';

function CardUpcomingBill({ data = [] }) {
  const content = (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.id} className="flex justify-between text-sm text-gray-700">
          <span>{item.name}</span>
          <span>{item.amount}</span>
        </div>
      ))}
    </div>
  );

  return <Card title="Upcoming Bill" desc={content} />;
}

export default CardUpcomingBill;
