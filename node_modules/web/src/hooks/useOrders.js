import { useState, useEffect } from 'react';
import { sampleOrders, orderHistory } from '../data/orders';

export const useOrders = () => {
  const [currentOrders, setCurrentOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);

  useEffect(() => {
    // Load orders from localStorage or use sample data
    const storedCurrentOrders = localStorage.getItem('stitchgo_current_orders');
    const storedPastOrders = localStorage.getItem('stitchgo_past_orders');

    if (storedCurrentOrders) {
      setCurrentOrders(JSON.parse(storedCurrentOrders));
    } else {
      setCurrentOrders(sampleOrders);
      localStorage.setItem('stitchgo_current_orders', JSON.stringify(sampleOrders));
    }

    if (storedPastOrders) {
      setPastOrders(JSON.parse(storedPastOrders));
    } else {
      setPastOrders(orderHistory);
      localStorage.setItem('stitchgo_past_orders', JSON.stringify(orderHistory));
    }
  }, []);

  const addOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Pending',
      requestDate: new Date().toISOString().split('T')[0],
      estimatedCompletion: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      ...orderData
    };

    const updatedOrders = [...currentOrders, newOrder];
    setCurrentOrders(updatedOrders);
    localStorage.setItem('stitchgo_current_orders', JSON.stringify(updatedOrders));
    
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = currentOrders.map(order => {
      if (order.id === orderId) {
        const updated = { ...order, status: newStatus };
        if (newStatus === 'Delivered') {
          updated.completedDate = new Date().toISOString().split('T')[0];
        }
        return updated;
      }
      return order;
    });

    // Move delivered orders to history
    if (newStatus === 'Delivered') {
      const deliveredOrder = updatedOrders.find(o => o.id === orderId);
      const remainingOrders = updatedOrders.filter(o => o.id !== orderId);
      const updatedHistory = [deliveredOrder, ...pastOrders];
      
      setCurrentOrders(remainingOrders);
      setPastOrders(updatedHistory);
      localStorage.setItem('stitchgo_current_orders', JSON.stringify(remainingOrders));
      localStorage.setItem('stitchgo_past_orders', JSON.stringify(updatedHistory));
    } else {
      setCurrentOrders(updatedOrders);
      localStorage.setItem('stitchgo_current_orders', JSON.stringify(updatedOrders));
    }
  };

  const cancelOrder = (orderId) => {
    const updatedOrders = currentOrders.filter(order => order.id !== orderId);
    setCurrentOrders(updatedOrders);
    localStorage.setItem('stitchgo_current_orders', JSON.stringify(updatedOrders));
  };

  const getOrderById = (orderId) => {
    return currentOrders.find(order => order.id === orderId) || 
           pastOrders.find(order => order.id === orderId);
  };

  return {
    currentOrders,
    pastOrders,
    addOrder,
    updateOrderStatus,
    cancelOrder,
    getOrderById
  };
};