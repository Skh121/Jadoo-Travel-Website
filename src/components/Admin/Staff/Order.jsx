import React, { useState } from 'react';
 
const OrderComponent = () => {
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Margarita Pizza', quantity: 1, price: 250 },
    { id: 2, name: 'Crispy Chicken Burger', quantity: 2, price: 300 },
    { id: 3, name: 'Last Word Cocktail', quantity: 1, price: 190 },
  ]);
 
  const handleQuantityChange = (id, delta) => {
    setOrderItems(orderItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    ));
  };
 
  const totalPrice = orderItems.reduce((total, item) => total + item.quantity * item.price, 0);
 
  return (
    <div className="max-w-sm mx-auto border border-gray-300 p-6 rounded-lg">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold">Table 15</h2>
      </div>
      <table className="w-full mb-6 border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Item Name</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, index) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.name}</td>
              <td className="border border-gray-300 text-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 bg-gray-200 border border-gray-400 rounded-md mx-1"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 border border-gray-400 rounded-md mx-1"
                >
                  +
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">Rs {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mb-6 border-t border-gray-300 pt-4">
        <strong>Total: Rs {totalPrice}</strong>
      </div>
      <button className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
        Place Order
      </button>
    </div>
  );
};
 
export default OrderComponent;